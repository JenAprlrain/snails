import styled from "styled-components";
import { CgSearch } from "react-icons/cg";
import { Colors, Devices } from "../Theme";

const SearchBarEl = styled.article`
    background-color: ${Colors.Background};
    padding: 0.5rem 1rem;
    gap: 0.5rem;
    height: 100%;
    left: 0;
    top: 0;
    width: 40%;
    display: none; 
    align-items: center;

     @media ${Devices.Laptop}{
        display: flex;
     }
`;

const SearchBarBg= styled.div`
       background-color:${Colors.White};
       display: flex;
       width: 100%;
       align-items: center;
       gap: 0.5rem;
       border-radius: 20px;
       padding: 0.5rem 0.7rem;

       svg{
           font-size:1.5rem;
           color: ${Colors.Primary};
       }
`;
const SearchInput= styled.input`
      border: none;
      font-size: 1.15rem;
      flex:1;
      :focus{
        outline: none;

      }
`;

export default function SearchBar() {
  return  <SearchBarEl>
        <SearchBarBg>
            <CgSearch/>
            <SearchInput placeholder="Search Collections" />
        </SearchBarBg>
  </SearchBarEl>;
  
}
