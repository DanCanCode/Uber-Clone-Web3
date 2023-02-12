import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import RideSelector from "./components/RideSelector";
import { motion } from "framer-motion";

const Confirm = () => {
  const [pickupCoordinates, setPickupCoordinates] = useState([]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([]);
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const getPickupCoordinates = () => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZGFuY2FuY29kZSIsImEiOiJjbGRyem1kNXQxZ2hrM3F1dTVmenVqYXp6In0.XRKSWq6Cy5z_fw8-OVnkjQ",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      })
      .catch((error) => console.log(error));
  };

  const getDropoffCoordinates = () => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZGFuY2FuY29kZSIsImEiOiJjbGRyem1kNXQxZ2hrM3F1dTVmenVqYXp6In0.XRKSWq6Cy5z_fw8-OVnkjQ",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPickupCoordinates();
    getDropoffCoordinates();
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <Map pickup={pickupCoordinates} dropoff={dropoffCoordinates} />

      <RideContainer>
        <ButtonContainer>
          <BackButton
            onClick={() => router.replace("/")}
            src="https://img.icons8.com/ios-filled/50/000000/left.png"
          />
        </ButtonContainer>
        <RideSelector pickup={pickupCoordinates} dropoff={dropoffCoordinates} />

        <ConfirmButton whileTap={{ scale: 0.8 }}>Confirm Ride</ConfirmButton>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex 
lg:flex-row
flex-col
h-[92.25vh]
`;

const ButtonContainer = tw.div`
ml-2
mt-2
`;

const BackButton = tw.img`
h-12
cursor-pointer
hover:bg-neutral-200
rounded-full
transition-all
duration-300
`;

const RideContainer = tw.div`
flex-1
flex
flex-col
relative
lg:max-h-screen
max-h-[60vh]
lg:overflow-visible
overflow-y-scroll
`;

const ConfirmButton = tw(motion.div)`
bg-black
text-white
rounded-md
m-4
text-center
py-4
text-xl
cursor-pointer
`;
