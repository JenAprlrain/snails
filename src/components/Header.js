import styled from "styled-components";
import { FiMenu } from 'react-icons/fi';
import { CgSearch } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import { Colors, Devices } from "./Theme";
import { useState } from "react";
import Button from "./styled/Button";
import SearchBar from "./Header/SearchBar";
import MobileSearchBar from "./Header/MobileSearchBar";
import Logo from '../../public/images/hyprspce.svg?url';
import Image from "next/image";

import PlugConnect from '@psychedelic/plug-connect';
import { useGlobalContext,useSetAgent } from "./Store";




const HeaderEl = styled.article`
   color:${Colors.White};
   z-index: 10;
   display: flex;
   width: 100%;
   align-items: center;
   height: 10%;
   gap: 3rem;
   padding: 1rem 3rem;
   top:0;
   background-color:${Colors.Background};
   position: sticky;
   

   svg {
    font-size: 2rem;
    cursor: pointer;
   }
   
`;

const ImgContainer = styled.div`
   position: relative;
   filter: brightness(1);
`;

const Center = styled.div`
flex:1;
display:flex;
align-items: center;
gap: 0.5 rem;
`;


const Nav = styled.nav`
   margin-left:auto;
   padding-right: 2rem;
   display: none;
   ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 3rem;
   }

   @media ${Devices.Laptop}{
    display: block;
   }
`;
const NavItem = styled.a`
font-size: 1rem;
font-weight: 400;

&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${Colors.Gray};
  transition: width 0.3s ease;
}
&:hover::after{
  width: 100%;
}


`;


const SearchIcon = styled.span`
   display:flex;
   justify-content: center;
   align-items: center;

   @media ${Devices.Laptop}
    display: none;
`;


const MenuIcon = styled(SearchIcon)``;
const AuthItems = styled(NavItem)`
font-size: 1rem;
display:none;

@media ${Devices.Laptop} {
    display:inherit;
}
`;





export default function Header({ mobileMenu }) {
    const [SearchIsOpen, setSearchIsOpen] = useState(false);
    const { MobileMenuIsOpen, setMobileMenuIsOpen } = mobileMenu;

    const whitelist = ['h7ecw-giaaa-aaaal-ab75a-cai'];

    const setAgent = useSetAgent();

    const { state : {
        principal
    }} = useGlobalContext();

    function toggleMenu() {
        setMobileMenuIsOpen(!MobileMenuIsOpen);
    }
    const handlePlugLogin = async () => {
        console.log("login with plug")
        setAgent({
            agent: await window?.ic?.plug?.agent,
            isAuthed: true,
        });
    };
    return (

        <HeaderEl>
            <MenuIcon>
                {MobileMenuIsOpen ? (
                    <IoClose
                        style={{ fontsize: "2.5rem" }}
                        color={Colors.Primary}
                        onClick={() => {
                            toggleMenu();
                        }}
                    />
                ) : (
                    <FiMenu onClick={() => {
                        toggleMenu();
                    }} />
                )}
            </MenuIcon>
            <Center>
                <ImgContainer>
                <Image
                width={200}
                height={28} src={Logo} />
                </ImgContainer>

                <SearchBar />
                <Nav>
                    <ul>
                        <li>
                            <NavItem href="#">Marketplace</NavItem>
                        </li>
                        <li>
                            <NavItem href="#"> Launchpad</NavItem>
                        </li>
                        <li>
                            <NavItem href="#">Create</NavItem>
                        </li>
                        <li>
                            {/* <Button>Connect Wallet</Button> */}
                            {!principal && <PlugConnect
                                dark
                                title="Connect Wallet"
                                host="https://ic0.app"
                                whitelist={whitelist}
                                onConnectCallback={handlePlugLogin}
                            />}
                            {principal && <Button>{principal.toText().substring(1,7)+"..."}</Button>}
                        </li>
                    </ul>
                </Nav>
            </Center>
            {SearchIsOpen ? (
                <MobileSearchBar
                    SearchIsOpen={SearchIsOpen}
                    setSearchIsOpen={setSearchIsOpen}
                />
            ) : (
                ""
            )}
            <SearchIcon>
                <CgSearch
                    onClick={() => {
                        setSearchIsOpen(!SearchIsOpen);
                    }}
                />
            </SearchIcon>
        </HeaderEl>
    );
}
