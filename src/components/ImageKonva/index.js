/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useRef, useEffect} from 'react';
import { Image, Transformer} from 'react-konva';
import styled from 'styled-components';

export default function ImageComponent({img, selected, setSelected}){ 
    const trRef = useRef(null)
    const shapeRef = useRef(null)

   
    useEffect(() => {
 
        if (trRef.current) {
        
          trRef.current.nodes([shapeRef.current])
          trRef.current.getLayer().batchDraw()
        }
        
    }, [])

    return (
        <>
            <Image 
                id={"qualquercoisa"}
                draggable
                image={img}    
                ref={shapeRef} 
            />

           <Transformer ref={trRef}
           />
        </>
    );
};

const DivTeste = styled.div``