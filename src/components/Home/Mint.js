import React from 'react';
import styled from 'styled-components';

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
align-items: 
`

const Mint = () => {
  return (
    <Section>
             <div>MINT</div>
    </Section>

  )
}

export default Mint