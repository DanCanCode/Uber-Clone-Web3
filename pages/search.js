import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import tw from "tailwind-styled-components";

const Search = () => {
  const router = useRouter();
  const [isFocused, setIsFocused] = useState("from");
  const [inputData, setInputData] = useState({
    pickup: "",
    dropoff: "",
  });

  console.log(inputData);
  return (
    <Wrapper>
      <Heading>
        {isFocused == "from" ? "Where can we pick you up?" : "Where to?"}
      </Heading>

      <InputContainer>
        <InputBox focused={isFocused == "from" && isFocused}>
          <SvgContainer>
            <svg viewBox="0 0 24 24" width="1em" height="1em">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 14a2 2 0 100-4 2 2 0 000 4zm5-2a5 5 0 11-10 0 5 5 0 0110 0z"
              />
            </svg>
          </SvgContainer>

          <Input
            value={inputData.pickup}
            onChange={(e) =>
              setInputData({ ...inputData, pickup: e.target.value })
            }
            onFocus={() => setIsFocused("from")}
            placeholder="Enter pickup location"
          />
        </InputBox>

        <VerticalLine />

        <InputBox focused={isFocused == "to" && isFocused}>
          <SvgContainer>
            <svg viewBox="0 0 24 24" width="1em" height="1em">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 10h-4v4h4v-4zM7 7v10h10V7H7z"
              />
            </svg>
          </SvgContainer>

          <Input
            value={inputData.dropoff}
            onChange={(e) =>
              setInputData({ ...inputData, dropoff: e.target.value })
            }
            onFocus={() => setIsFocused("to")}
            placeholder="Enter dropoff location"
          />
        </InputBox>
      </InputContainer>

      <Link
        href={{
          pathname: "/confirm",
          query: {
            pickup: inputData.pickup,
            dropoff: inputData.dropoff,
          },
        }}
      >
        <SearchButtonContainer>Confirm Location</SearchButtonContainer>
      </Link>
      {/* <ButtonContainer>
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
          <Input
            value={inputData.pickup}
            onChange={(e) =>
              setInputData({ ...inputData, pickup: e.target.value })
            }
            placeholder="Enter Pickup Location"
          />
          <Input
            value={inputData.dropoff}
            onChange={(e) =>
              setInputData({ ...inputData, dropoff: e.target.value })
            }
            placeholder="Where To?"
          />
        </InputBoxes>

        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>

      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>

      <Link
        href={{
          pathname: "/confirm",
          query: {
            pickup: inputData.pickup,
            dropoff: inputData.dropoff,
          },
        }}
      >
        <SearchButtonContainer>Confirm Location</SearchButtonContainer>
      </Link> */}
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
pt-2
`;

const Heading = tw.div`
w-full 
font-bold 
text-left 
flex 
items-center 
text-3xl 
p-4 
overflow-hidden
`;

const InputContainer = tw.div`
flex 
flex-col 
mb-4 
relative
`;

const InputBox = tw.div`
h-10 
mx-4 
border-2 
bg-[#eeeeee] 
flex 
items-center 
my-1 
py-1 
px-2
rounded-md
${(props) => props.focused && "border-black"}
`;

const SvgContainer = tw.div`
mx-1
`;

const VerticalLine = tw.div`
w-0 
h-[2rem] 
border-black 
border 
absolute 
z-10 
left-[2.3rem] 
top-[2rem]
`;

const ButtonContainer = tw.div`
bg-white
px-4


`;

const BackButton = tw.img`
h-12
cursor-pointer
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
my-2 
rounded-2 
p-2 
outline-none 
border-none 
bg-transparent  
h-full 
w-full
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
