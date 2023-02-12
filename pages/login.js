import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { FaCar, FaUtensils } from "react-icons/fa";
import { motion } from "framer-motion";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {
  const [description, setDescription] = useState({
    ride: "Request a ride, pay with Ethereum",
    eat: "Discover delicious eats",
    active: "ride",
  });

  return (
    <Wrapper>
      <WelcomeContainer active={description.active}>
        <ServicesContainer
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.75 }}
        >
          <Services>
            <Ride
              active={description.active}
              onClick={() => setDescription({ ...description, active: "ride" })}
            >
              <FaCar fontSize={24} />
              Ride
            </Ride>
            <Eat
              active={description.active}
              onClick={() => setDescription({ ...description, active: "eat" })}
            >
              <FaUtensils fontSize={24} />
              Eat
            </Eat>
          </Services>

          <Description>
            {description.active == "ride" ? (
              <>
                <Item>{description.ride}</Item>
                <SubText>Reach your destination in seconds.</SubText>
              </>
            ) : (
              <>
                <Item>{description.eat}</Item>
                <SubText>Order delivery from restaurants you love.</SubText>
              </>
            )}
            <DescriptionButton
              active={description.active}
              onClick={() => signInWithPopup(auth, provider)}
            >
              {description.active == "ride" ? "Request now" : "Order now"}
            </DescriptionButton>
          </Description>
        </ServicesContainer>
      </WelcomeContainer>

      <ArrowContainer>
        <Arrow>
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </Arrow>
      </ArrowContainer>

      <EatsPromoContainer>
        <EatsPromoDescription
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.75 }}
        >
          <EatsPromoHeading>
            Save on Uber and Uber Eats with Uber One membership
          </EatsPromoHeading>
          <Text>
            With $0 Delivery Fee and 5% off eligible rides and eats orders,
            members save an average of $25 per month.*
          </Text>
          <Text>
            *Terms apply. Average savings are based on members in your country
            and do not include subscription price.
          </Text>
          <EatsPromoButton onClick={() => signInWithPopup(auth, provider)}>
            Sign up to save
          </EatsPromoButton>
        </EatsPromoDescription>
        <EatsPromoImage src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_962,h_641/v1648741869/assets/2b/bf7e09-4136-44a0-8d3e-a2b23d3da914/original/Group-92577.png" />
      </EatsPromoContainer>

      <RidePromoContainer>
        <RidePromoHeading>Focused on safety, wherever you go</RidePromoHeading>

        <RidePromoGrid>
          <RidePromo
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.75 }}
          >
            <RidePromoImage src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1116,h_744/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png" />
            <RidePromoSubHead>Our commitment to your safety</RidePromoSubHead>
            <Text>
              With every safety feature and every standard in our Community
              Guidelines, we're committed to helping to create a safe
              environment for our users.
            </Text>
          </RidePromo>

          <RidePromo
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.75 }}
          >
            <RidePromoImage src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1116,h_744/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png" />
            <RidePromoSubHead>
              Setting 10,000+ cities in motion
            </RidePromoSubHead>
            <Text>
              The app is available in thousands of cities worldwide, so you can
              request a ride even when you’re far from home.
            </Text>
          </RidePromo>
        </RidePromoGrid>
      </RidePromoContainer>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`
flex
flex-col
h-full
space-y-12
`;

const WelcomeContainer = tw.div`
p-16
bg-cover
bg-no-repeat
${(props) =>
  props.active == "ride"
    ? "bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_2260,h_1416/v1653688612/assets/4e/98a67b-fa75-455d-b932-2d3ba478a4ed/original/DotCom_Update_Rider_bg2x.jpg)]"
    : "bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_2260,h_1334/v1613521576/assets/9d/2ff1e0-a207-425a-a1b8-cf40c95d6567/original/Eats_Home_bg_desktop2x.png)]"}
`;

const ServicesContainer = tw(motion.div)`
bg-white
rounded-md
shadow-lg
inline-block
max-w-[500px]
`;

const Services = tw.div`
flex
items-center
bg-neutral-100
justify-evenly
p-4
rounded-t-lg
text-sm
`;

const Ride = tw.div`
flex
flex-col
items-center
cursor-pointer
${(props) => (props.active == "ride" ? "border-b-2 border-b-black" : "")}
`;

const Eat = tw.div`
flex
flex-col
items-center
cursor-pointer
${(props) => (props.active == "eat" ? "border-b-2 border-b-black" : "")}
`;

const Description = tw.div`
p-12
space-y-8
`;

const Item = tw.div`
text-5xl
font-bold

`;

const SubText = tw.div`
`;

const DescriptionButton = tw.div`
cursor-pointer
rounded-md
inline-block
${(props) => (props.active == "ride" ? "text-white bg-black" : "bg-green-500")}
font-medium
text-center
py-3
px-6
`;

const ArrowContainer = tw.div`
flex
justify-center
`;

const Arrow = tw.div`
animate-bounce
bg-black
p-2 
w-16 
h-16 
shadow-lg 
rounded-full 
flex 
items-center 
justify-center
`;

const EatsPromoContainer = tw.div`
flex
justify-evenly
p-16
items-start
`;

const Text = tw.div``;

const EatsPromoDescription = tw(motion.div)`
space-y-4
flex-1
max-w-[500px]
`;

const EatsPromoImage = tw.img`
max-h-96
flex-2
`;

const EatsPromoHeading = tw.div`
font-bold
text-4xl
mb-6
`;

const EatsPromoButton = tw.div`
bg-black
inline-block
rounded-md
font-medium
text-center
py-3
px-6
cursor-pointer
text-white
`;

const RidePromoContainer = tw.div`
p-16
grid
grid-rows-1
mx-auto
`;

const RidePromoGrid = tw.div`
grid
grid-cols-2
justify-between
`;

const RidePromo = tw(motion.div)`
pr-10
space-y-4
`;

const RidePromoHeading = tw.div`
font-bold
text-4xl
mb-6
`;

const RidePromoSubHead = tw.div`
text-lg
font-medium
`;

const RidePromoImage = tw.img`
max-h-96
`;
