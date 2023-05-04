import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Colors, Devices } from '../Theme';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../styled/Button";



const HeroEl = styled.article`
   margin: 6rem 1rem 5rem 1rem;
   text-align: center;
   display: flex;
   flex-direction:column;
   align-items: center;
   justify-content: center;

   @media ${Devices.Laptop} {
    margin: 3rem 4rem 5rem 4rem;
   }

   @media ${Devices.LaptopL} {
    margin: 3rem 10rem 5rem 10rem;
   }


`;

const Title = styled.h1`
  margin-bottom: 3rem;
  font-weight: 500;
  font-size: 1.7rem;

  @media ${Devices.Laptop} {
    font-size: 2.7rem;
  }
`;
const Heading = styled.span``;
const Sub = styled.span`
  font-size: 1.1rem;
  display: block;
`;


const Slider = styled.div`
  
  position:relative;
  height: 35vh;
  min-height: 230px;
  padding: 2rem;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  transition-property: transform,-webkit-transform;
  transform: translateZ(0);
  cursor: pointer;
  box-sizing: border-box;
  z-index:1;
  
 
  border-radius: 20px;
 
  @media ${Devices.Tablet} {
   height: 50vh;
 }

`;
const ImgContainer = styled.div`
   position: absolute;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   filter: brightness(1);
   display: block;
`;

const ImgContainer1 = styled.div`
position: relative;
display:block;
left:0;
top:0;

`;

const InfoContainer = styled.div`
   background: rgba(22, 22, 27, 0.85);
   width: 528px;
   position: absolute;
   z-index: 3;
   backdrop-filter: blur(1rem);
   display: grid;
   grid-template-columns: 88px 1fr 56px;
   gap: 3rem;
   align-items: center;
   -webkit-box-align: center;
   bottom : 1rem;
   PADDING: 1rem;
   left: 50%;
   transform: translateX(-50%);
   border-radius: 1rem;
`;


const MiddleSection = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   -webkit-box-pack: center;
   box-sizing: border-box;
   cursor: pointer;

  
`;

const STitle = styled.h2`
margin-top: 0px;
margin-bottom: 0px;
font-weight: 700;
text-align: left;
letter-spacing: 1px;
font-size: 2rem;
`;

const Description = styled.h3`
margin-top: 0px;
margin-bottom: 0px;
font-weight: 400;
font-size: 1rem;
text-align: left;
`;

const Lines = styled.span`
  position: sticky;
  z-index:3;
  display:flex;
  gap: 0.5rem;
`;

const Line = styled.span`
 display:inline-block;
 width:2rem;
 height: 0.25rem;
 border-radius: 30px;
 background-color:${p => p.active ? Colors.White : Colors.Black};
`;
const Img = styled.div`
  width: 100%;
  height: 100%;
`;

const Img2 = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 0.5rem;
  box-sizing: border-box
  overflow-clip-margin: content-box;
  overflow: clip

  

`;


const Items = [
  {
    Id: 1,
    Title: "Racing Snails",
    Description: "Racing Snails are 1690 Pixel Snails racing on the Fantom Blockchain",
    ImageSrc: "/images/Banner.png",
    ImageSrc1: "/images/Snails.png",
  },
];




export default function Hero() {
  const [Index, setIndex] = useState(0);
  const [Slides, setSlides] = useState(Items);
  const [CurSlide, setCurlSlide] = useState(Items[0]);

  return (
    <HeroEl>
        <Title>
        <Heading>DISCOVER THE SLOWEST CREATURES ON THE FASTEST BLOCKCHAIN</Heading>
        <Sub>Created by Shells Squad</Sub>
        </Title>
      <Slider>
      <BsChevronLeft/>
        <InfoContainer>
          <ImgContainer1>
          <Img2>
            <Image alt="Racing Snails"
              width={100}
              height={100}
              src={CurSlide.ImageSrc1}
            />
            </Img2>
          </ImgContainer1>
          <MiddleSection>
              <STitle>{CurSlide.Title}</STitle>
              <Description>{CurSlide.Description}</Description>
          </MiddleSection>          
        </InfoContainer>
        <ImgContainer>
          <Img>
            <Image
              layout="fill"
              src={CurSlide.ImageSrc}
            />
          </Img>
        </ImgContainer>
        <BsChevronRight/>
      </Slider>
      <Lines>
          {Slides.map((s) => {
            return <Line key={s.Id} active={s.Id === CurSlide.Id} />
          })}
        </Lines>
    </HeroEl>

  );
}
