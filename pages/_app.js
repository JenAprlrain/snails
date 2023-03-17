import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../src/components/Header";
import { Colors } from "../src/components/Theme";
import Button from "../src/components/styled/Button";
import Page from "../src/components/styled/Page";



import Store from "../src/components/Store";

const GlobalStyle = createGlobalStyle`


  html,
  body {
    background-color: ${Colors.Background};
    font-family: "Bahnschrift", sans-serif;
  }

  p,a,h1,h2,h3,h5,h6,div,span{
    color:${Colors.White}; 
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    transition: all 0.3s;
    margin: 0;
  }

  /* width */
  body::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  body::-webkit-scrollbar-track {
    background: #ffffff;
  }

  /* Handle */
  body::-webkit-scrollbar-thumb {
    background: #212121;
    border-radius: 20px;
  }

  /* Handle on hover */
  body::-webkit-scrollbar-thumb:hover {
    background: rgb(43, 43, 43);
  }
`;

const Main = styled.div`
 display: flex; 
 flex-direction: column;
 width: 100%;
 min-height: 100vh; 
`;


const MobileMenu = styled.div`
 background-color:${Colors.Background};
 color: ${Colors.White};
 z-index: ${p=> (p.open ? "9" : "-1")};
 position: absolute;
 padding: 2rem 1rem 1rem 1.2rem;
 left: 0;
 display: flex;
 width: ${(p) => (p.open?  "100%" : "0")};
 height: 100%;

 ul{
   opacity:${(p) => (p.open? "1" : "0")};
   transition: all 0.1s ease-out;
   text-decoration: none;
   list-style:none;
   display: flex;
   flex-direction: column;
   gap: 2rem;
   width: 100%;
 }

`;
const NavItem = styled.a`
 font-size: 1.2rem;
 font-weight: 400;


`;


function MyApp({ Component, pageProps }) {
  const [MobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Store>
      <Main>
        <Header mobileMenu={{ MobileMenuIsOpen, setMobileMenuIsOpen }} />
        <Page>
        <MobileMenu open={MobileMenuIsOpen}>
          <ul>
            <li>
              <NavItem href="#">Marketplace</NavItem>
            </li>
            <li>
              <NavItem href="#">Launchpad</NavItem>
            </li>
            <li>
              <NavItem href="#"> Create</NavItem>
            </li>
            <li>
              <Button>Connect Wallet</Button>
            </li>
          </ul>
        </MobileMenu>
        <Component {...pageProps} />
        </Page>

      </Main>
      </Store>
          
      
      {/* footer */}
    </>
  );
}

export default MyApp;
