/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useRef, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import { Stage, Layer, Image, Transformer} from 'react-konva';
import styled from 'styled-components';
import useImage from 'use-image';
import ImageComponent from '../ImageKonva';
import { KonvaEventObject } from 'konva/lib/Node'



export default function KonvaComponent(){
    const [image] = useImage("https://www.minhaoperadora.com.br/wp-content/uploads/2022/05/Design-sem-nome-21.jpg");
    const [selected, setSelected] = useState(false)
  function checkDeselect(e) {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage()
    if (clickedOnEmpty) setSelected(false)
  }
    return (
        <>
            <Stage width={1800} height={1000}  onMouseDown={checkDeselect}>
                <Layer>
                    <ImageComponent
                        img={image}    
                        setSelected={setSelected} 
                        selected={selected}          
                    />
                </Layer>
            </Stage> 
        </>
    );
};
