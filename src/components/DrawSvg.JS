import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, {useLayoutEffect, useRef} from 'react'
import styled from 'styled-components'
import Vector from '../Icons/Vector'


const VectorContainer = styled.div`
position: absolute;
top: 0.5rem;
left: 50%;
transform: translateX(-50%);
width: 100%;
height: 100%;
overflow: hidden;

svg{
    display: inline-block;
    width: 100%;
    height: 100%;
}

@media (max-width: 48em) {
left: 1rem;
}
`

const DrawSvg = () => {
const ref = useRef(null);

gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
    let element = ref.current;

    let svg = document.getElementsByClassName("svg-path")[0];

    const length = svg.getTotalLength();


    
//start positioning of svg drawing
svg.style.strokeDasharray = length;

// Hide svg before scrolling start
svg.style.strokeDashoffset = length;

   let t1 = gsap.timeline({
       scrollTrigger:{
        trigger:element,
        start:"top center",
        end: "bottom bottom",
        onUpdate: (self) => {
            const draw = length * self.progress;

            // also reverse the drawing when scroll goes up
            svg.style.strokeDashoffset = length - draw;

        },
        onToggle: self => {
            if(self.isActive){
                console.log("Scrolling is active");
            }else{
                console.log("Scrolling is not active");
            }
        }
       }
   })


    return () => {

    };

}, [])

  return (
    <VectorContainer ref={ref}>
        <Vector />
    </VectorContainer>
  )
}

export default DrawSvg