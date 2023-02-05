import React from "react";
import { useState, Suspense } from "react";
import { Box, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
function Scene() {
  const gltf = useLoader(GLTFLoader, "/dog.glb");
  return (
    <Suspense fallback={null}>
      <primitive scale={0.5} object={gltf.scene} />
    </Suspense>
  );
}
function Body() {
  return (
    <div>
      <body className="flex w-full h-96 flex-col items-center">
        <div className="h-96 w-2/5">
          <Canvas>
            <ambientLight />
            <pointLight position={[20, 20, 20]} />
            <OrbitControls />
            <Scene />
          </Canvas>
        </div>
      </body>
    </div>
  );
}

export default Body;
