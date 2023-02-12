import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
        router.push("/");
      } else {
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
          <UserImage src={user && user.photoUrl} />
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
`;

const Name = tw.div`
text-white
mr-1
`;

const UserImage = tw.img`
h-12
mr-1
rounded-full
object-contain
hover:border
hover:border-neutral-700
active:border-blue-500
`;
