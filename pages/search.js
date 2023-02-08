import React from "react";
import { useRouter } from "next/router";
import tw from "tailwind-styled-components";

const Search = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <ButtonContainer>
        <BackButton
          onClick={() => router.replace("/")}
          src="https://img.icons8.com/ios-filled/50/000000/left.png"
        />
      </ButtonContainer>

      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FromToIcons>

        <InputBoxes>
          <Input placeholder="Enter Pickup Location" />
          <Input placeholder="Where To?" />
        </InputBoxes>

        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>

      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>

      <SearchButtonContainer>Confirm Location</SearchButtonContainer>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
bg-gray-200
h-screen
`;

const ButtonContainer = tw.div`
bg-white
px-4


`;

const BackButton = tw.img`
h-12
cursor-pointer
`;

const InputContainer = tw.div`
bg-white
flex
px-4
mb-2
items-center
`;

const FromToIcons = tw.div`
w-10
flex
flex-col
items-center
mr-2
`;

const Circle = tw.img`
h-2.5

`;

const Line = tw.img`
h-10
`;

const Square = tw.img`
h-2.5

`;

const InputBoxes = tw.div`
flex 
flex-col
flex-1
`;

const Input = tw.input`
h-10
bg-gray-200
my-2
p-2
outline-none
border-none
`;

const PlusIcon = tw.img`
w-10
h-10
bg-gray-200
rounded-full
mx-3
`;

const SavedPlaces = tw.div`
flex
items-center
bg-white
px-4
py-2
mb-2
`;

const StarIcon = tw.img`
bg-gray-400
w-10
h-10
p-2
rounded-full
mr-2
`;

const SearchButtonContainer = tw.div`
bg-black
text-white
text-2xl
text-center
mx-4
py-3
cursor-pointer
`;
