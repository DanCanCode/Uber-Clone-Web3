import React, { useState } from "react";
import Link from "next/link";
import tw from "tailwind-styled-components";
import { FaCar } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { motion, useCycle } from "framer-motion";

const Search = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isFocused, setIsFocused] = useState("from");
  const [inputData, setInputData] = useState({
    pickup: "",
    dropoff: "",
  });

  return (
    <Wrapper
      onClick={() => !isOpen && toggleOpen()}
      open={isOpen}
      whileHover={{ scale: !isOpen ? 1.2 : 1.0 }}
      whileTap={{ scale: !isOpen ? 0.8 : 1.0 }}
    >
      {isOpen ? (
        <>
          <CloseButton>
            <GrClose
              className="cursor-pointer"
              onClick={() => toggleOpen()}
              fontSize={28}
            />
          </CloseButton>
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
          </Link>
        </>
      ) : (
        <FaCar fontSize={36} />
      )}

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

const Wrapper = tw(motion.div)`
max-h-[700px] 
bg-white 
${(props) =>
  props.open
    ? "rounded-lg w-[400px] h-full"
    : "cursor-pointer p-4 rounded-full hover:bg-neutral-200 "} 
flex 
flex-col 
shadow-lg
`;

const CloseButton = tw.div`
flex
items-center
justify-end
p-4
pb-2
`;

const Heading = tw.div`
w-full 
font-bold 
text-left 
flex 
items-center 
text-3xl 
p-4 
pt-0
overflow-hidden
`;

const InputContainer = tw.div`
flex 
flex-col 
mb-2 
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

const SavedPlaces = tw.div`
flex
items-center
bg-white
mx-4
p-2
mb-2
rounded-md
cursor-pointer
hover:bg-neutral-200
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
rounded-md
cursor-pointer
`;
