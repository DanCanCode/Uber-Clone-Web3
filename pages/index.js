import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Map from "./components/Map";

export default function Home() {
  return (
    <>
      <Head>
        <title>Uber Web 3.0</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Map />
        <ActionItems>
          {/* Header */}
          <Header>
            <UberLogo src="https://logosmarcas.net/wp-content/uploads/2020/05/Uber-Logo.png" />
            <Profile>
              <Name>John Doe</Name>
              <UserImage src="https://i1.wp.com/twinfinite.net/wp-content/uploads/2019/11/kazuma-kiryua.jpg?fit=700%2C421&ssl=1" />
            </Profile>
          </Header>
          <ActionButtons>
            <Link href="/search" className="flex-1">
              <ActionButton>
                <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberX.png" />
                Ride
              </ActionButton>
            </Link>

            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
              Wheels
            </ActionButton>
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
              Reserve
            </ActionButton>
          </ActionButtons>

          <InputButton>Where To?</InputButton>
        </ActionItems>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`
  flex
  flex-col
  h-screen
`;

const ActionItems = tw.div`
  flex-1
  p-4
`;

const Header = tw.div`
  flex
  justify-between
  items-center
`;

const UberLogo = tw.img`
  h-28
`;

const Profile = tw.div`
  flex
  items-center
`;

const Name = tw.div`
  mr-4
  w-20
`;

const UserImage = tw.img`
  h-20
  w-20
  rounded-full
  border
  border-gray-200
  p-px
`;

const ActionButtons = tw.div`
  flex
`;

const ActionButton = tw.div`
  bg-gray-200
  flex-1
  m-1
  h-32
  flex
  flex-col
  items-center
  justify-center
  rounded-lg
  transform
  hover:scale-105
  transition
  text-xl
`;

const ActionButtonImage = tw.img`
  h-3/5
`;

const InputButton = tw.div`
  h-20
  bg-gray-200
  text-2xl
  p-4
  flex
  items-center
  mt-8
`;
