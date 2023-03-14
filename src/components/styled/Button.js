import styled from "styled-components";
import { Colors } from "../Theme";

const Button = styled.button`
   display: flex;
   align-items:center;
   justify-content: center;
   cursor:pointer;
   border: none;
   padding: 0.5rem 1.5rem;
   font-weight: 500;
   color: ${Colors.White};
   border: none;
   width:max-content;
   background: Gray;
  border-radius: ${p=>p.round? "50px": "50px"};
`;
export default Button;
