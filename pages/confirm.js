import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import tw from "tailwind-styled-components";
import Map from "./components/Map";

const Confirm = () => {
  const [pickupCoordinates, setPickupCoordinates] = useState([]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([]);

  const getPickupCoordinates = () => {
    const pickup = "Santa Monica";
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
    const dropoff = "Los Angelas";
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
  }, []);

  return (
    <Wrapper>
      <Map pickup={pickupCoordinates} dropoff={dropoffCoordinates} />

      <RideContainer>
        {/* Ride Selector */}

        {/* Confirm Button */}
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex 
lg:flex-row
flex-col
h-screen
`;

const RideContainer = tw.div`
flex-1
`;
