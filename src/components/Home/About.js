import React from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Button'


const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.dark};
color: ${props => props.theme.dark};
display: flex;
justify-content: center;
align-items: center;
position: relative;
`


const Container = styled.div`
width: 75%;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 48em) {
  flex-direction: column;
  width: 60%;
  &>*:last-child{
    width: 60%;
    margin-top: 1rem;
  }
}

@media (max-width: 64em) {
  width: 70%;
}
`

const Box = styled.div`
width: 75%;
height: 100%;
flex-direction: coloumn;
justify-content: center;
align-items: center;

@media (max-width: 40em){
  min-height: 30vh;
}
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 0 auto;

@media (max-width: 64em){
  width: 100%;
  text-align: center;
}
@media (max-width: 40em){
  font-size: ${props => props.theme.fontxl};

}
@media (max-width: 30em){
  font-size: ${props => props.theme.fontlg};
  
}
`
const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;

@media (max-width: 64em){
  width: 100%;
  text-align: center;
  font-size: ${props => props.theme.fontmd}
}
@media (max-width: 40em){
  font-size: ${props => props.theme.fontmd};

}
@media (max-width: 30em){
  font-size: ${props => props.theme.fontsm};
  
}
`

const SubTextLight = styled.p`
font-size: ${props => props.theme.fontmd};
color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;

@media (max-width: 64em){
  width: 100%;
  text-align: center;
  font-size: ${props => props.theme.fontsm}
}
@media (max-width: 40em){
  font-size: ${props => props.theme.fontsm};

}
@media (max-width: 30em){
  font-size: ${props => props.theme.fontxs};
}

`

const ButtonContainer = styled.div`
width: 80%;
margin: 1rem auto;
align-self: flex-start;

@media (max-width: 64em){
width: 100%;

button{
  margin: 0 auto;
}
}

`

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box> <Carousel /></Box>
        <Box>
          <Title>
            ABOUT THE PROJECT
          </Title>
          <SubText>
          It all started when a family of Snails longed for more out of life.
Setting off one rainy day, Ara, Lira, Cara, and Ero Cascara were determined to find something more than the paced and measured life of an average snail.
The Cascaras were just one family, with a dream to one day take on the race course.
After countless days of Adventure and Racing, the Cascaras have found their home on the blockchain - the fastest blockchain (FTM).
Hundreds joined the movement, each having fun and teaching the others a valuable lesson.
Be your best snail. Race to Win! 🏁 🐌
          </SubText>
          <SubTextLight>
            By ownning a Shellsquad you get exclusive access to a plethora of utility.
          </SubTextLight>
          <ButtonContainer>
              <Button text="JOIN OUR DISCORD" link="#" />
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  )
}

export default About