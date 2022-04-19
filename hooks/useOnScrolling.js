import React, {useEffect, useState} from 'react';

const useOnScrolling=()=>{
    const [offsetY, setOffsetY] = useState(0);
    const [offsetX, setOffsetX] = useState(0);
    const [directionY, setDirectionY] = useState('');
    const [directionX, setDirectionX] = useState('');

    const handleOnScroll=(event)=>{
        var currentOffsetY = event.nativeEvent.contentOffset.y;
        var currentOffsetX = event.nativeEvent.contentOffset.X;
        setDirectionY(currentOffsetY > offsetY ? 'down' : 'up');
        setDirectionX(currentOffsetX > offsetX ? 'right' : 'left');
        setOffsetY(currentOffsetY);
        setOffsetX(currentOffsetY);
    }
    
    return {
        offsetX,
        offsetY,
        directionY,
        directionX,
        handleOnScroll
    }
}

export default useOnScrolling;

/**
 * useScroll React custom hook
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 *

 import { useState, useEffect } from "react";

 export function useScroll() {
   const [lastScrollTop, setLastScrollTop] = useState(0);
   const [bodyOffset, setBodyOffset] = useState(
     document.body.getBoundingClientRect()
   );
   const [scrollY, setScrollY] = useState(bodyOffset.top);
   const [scrollX, setScrollX] = useState(bodyOffset.left);
   const [scrollDirection, setScrollDirection] = useState();
 
   const listener = e => {
     setBodyOffset(document.body.getBoundingClientRect());
     setScrollY(-bodyOffset.top);
     setScrollX(bodyOffset.left);
     setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
     setLastScrollTop(-bodyOffset.top);
   };
 
   useEffect(() => {
     window.addEventListener("scroll", listener);
     return () => {
       window.removeEventListener("scroll", listener);
     };
   });
 
   return {
     scrollY,
     scrollX,
     scrollDirection
   };
 }
 **/