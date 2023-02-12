import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import { motion } from "framer-motion";
import { BiUser, BiLogOut, BiReceipt, BiCog } from "react-icons/bi";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
      } else {
        setDropdown(false);
        setUser(null);
      }
    });
  }, [user]);

  return (
    <Wrapper>
      {/* Logo */}
      <UberLogo>Uber</UberLogo>

      {/* buttons */}

      {user ? (
        <Profile>
          <Name>{user && user.name}</Name>
          <UserImage
            onClick={() => setDropdown(!dropdown)}
            src={user && user.photoUrl}
          />
          <DropdownContainer
            show={dropdown ? "true" : "false"}
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.25 }}
          >
            <DropdownItems>
              <Item>
                <BiUser /> <Text>Account</Text>
              </Item>
              <Item>
                <BiReceipt /> <Text>Orders</Text>
              </Item>
              <Item>
                <BiCog /> <Text>Settingst</Text>
              </Item>
              <Item onClick={() => signOut(auth)}>
                <BiLogOut /> <Text>Log out</Text>
              </Item>
            </DropdownItems>
          </DropdownContainer>
        </Profile>
      ) : (
        <ButtonContainer>
          <Login onClick={() => signInWithPopup(auth, provider)}>Log in</Login>
          <Signup>Sign up</Signup>
        </ButtonContainer>
      )}
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = tw.div`
bg-black
h-16
flex
items-center
justify-between
px-6
`;

const UberLogo = tw.div`
text-white
text-xl
`;

const ButtonContainer = tw.div`
flex
items-center
text-sm
font-medium
`;

const Login = tw.div`
text-white
mr-1
rounded-full
px-4
py-2
cursor-pointer
hover:bg-neutral-700
active:bg-neutral-500
transition-all
duration-300
`;

const Signup = tw.div`
bg-white
rounded-full
px-4
py-2
cursor-pointer
`;

const Profile = tw.div`
flex
items-center
text-sm
font-medium
relative
`;

const Name = tw.div`
text-white
mr-2
`;

const UserImage = tw.img`
h-12
mr-1
rounded-full
object-contain
hover:border
hover:border-neutral-700
active:border-blue-500
active:border-2
`;

const DropdownContainer = tw(motion.div)`
absolute
z-10
bg-white
rounded-lg
shadow-lg
border
border-neutral-400
top-14
right-3
py-6
pl-12
pr-6
${(props) => (props.show == "true" ? "block" : "hidden")}
`;

const DropdownItems = tw.div`
text-2xl
flex
flex-col
items-end
space-y-2
`;

const Text = tw.div`
pl-2`;

const Item = tw.div`
flex
items-center
cursor-pointer
`;
