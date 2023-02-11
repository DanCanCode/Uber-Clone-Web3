import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carlist";

const RideSelector = ({ pickup, dropoff }) => {
  const [rideDuration, setRideDuration] = useState(0);

  // get ride duration from mapbox api
  useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickup[0]},${pickup[1]};${dropoff[0]},${dropoff[1]}?access_token=pk.eyJ1IjoiZGFuY2FuY29kZSIsImEiOiJjbGRyem1kNXQxZ2hrM3F1dTVmenVqYXp6In0.XRKSWq6Cy5z_fw8-OVnkjQ`
    )
      .then((response) => response.json())
      .then((data) => setRideDuration(data.routes[0].duration / 100))
      .catch((error) => console.log(error));
  }, [pickup, dropoff]);

  console.log(rideDuration);
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>

      <CarList>
        {carList?.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 min away</Time>
            </CarDetails>
            <Price>${(rideDuration * car.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`
flex-1
`;

const Title = tw.div`
text-gray-500
text-center
text-xs
py-2
border-b
`;

const CarList = tw.div``;

const Car = tw.div`
flex
p-4
items-center
hover:bg-gray-200
cursor-pointer
`;

const CarImage = tw.img`
h-14
mr-4
`;

const CarDetails = tw.div`
flex-1
`;

const Service = tw.div`
font-medium
`;

const Time = tw.div`
text-xs
text-blue-500
`;

const Price = tw.div`
`;
