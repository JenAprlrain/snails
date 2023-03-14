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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
 
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
   position: static;
   filter: brightness(1);
   display: block;
   margin: 1rem;
   cursor: pointer;
   width: 100%;
   height: 100%;
   max-width: 500px;
`;

const InfoContainer = styled.div`
   background-color: ${Colors.Black};
   width:100%;
   position: relative;
   z-index: 3;
   opacity: 80%;
   display: flex;
   flex: 1;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   margin-bottom: 2rem;
   margin-top: 22rem;
   border-radius: 20px; 
`;


const MiddleSection = styled.div`
   display: flex;
   flex-direction: column;
   width: 50%;
   gap: 1rem;

& > svg{
    font-size: 2.4rem;
    cursor: pointer;
    @media ${Devices.Tablet} {
        font-size: 3.4rem;
    }
}

`;

const STitle = styled.h2`
 font-size: 2rem;
`;

const Description = styled.h3`
 font-size: 1rem;
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

const Items = [
  {
    Id: 1,
    Title: "Bone Punkzz",
    Description: "BonePunkzz is a collection of 100 3D bones on the Internet Computer",
    ImageSrc: "/images/Banner.png",
    ImageSrc1: "/images/Bone Punkzz.jpg",
  },
];




export default function Hero() {
  const [Index, setIndex] = useState(0);
  const [Slides, setSlides] = useState(Items);
  const [CurSlide, setCurlSlide] = useState(Items[0]);

  return (
    <HeroEl>
          <Title>
        <Heading>Discover the new NFT marketplace on the Internet Computer</Heading>
        <Sub>Created by BonePunkzzDAO</Sub>
      </Title>
      <Slider>
        <InfoContainer>
        <div>
          <ImgContainer1>
            <Image
              width={100}
              height={100}
              src={CurSlide.ImageSrc1}
            />
          </ImgContainer1>
          </div>
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
      </Slider>
      <Lines>
          {Slides.map((s) => {
            return <Line key={s.Id} active={s.Id === CurSlide.Id} />
          })}
        </Lines>
    </HeroEl>

  );
}
