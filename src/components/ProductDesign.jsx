import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Shoe from "./Shoe";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  position: absolute;
  bottom: 100px;
  right: 100px;
  @media screen and (max-width: 768px) {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
`;

export const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Shoe />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate={true} />
      </Canvas>
      <Desc>
        We Design produscts with a strong focus on both world class design and
        esuring your product is a market success.
      </Desc>
    </>
  );
};
