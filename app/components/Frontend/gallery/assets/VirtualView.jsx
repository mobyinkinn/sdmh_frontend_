// import React from 'react'

// const VirtualView = () => {
//   return (
//     <div>VirtualView</div>
//   )
// }

// export default VirtualView


// "use client"

// import { Canvas } from "@react-three/fiber";
// import * as THREE from "three";
// import { OrbitControls } from "@react-three/drei";
// const VirtualView = () => {
//   return (
//     <Canvas style={{ width: "100%", height: "50vh" }}>
//       <OrbitControls />
//       <mesh>
//         <sphereGeometry args={[500, 60, 40]} />
//         <meshBasicMaterial
//           map={new THREE.TextureLoader().load("/bg.jpg")}
//           side={THREE.BackSide}
//         />
//       </mesh>
//     </Canvas>
//   );
// };

// export default VirtualView;



// "use client";

// import { Canvas, useThree } from "@react-three/fiber";
// import { OrbitControls, Html } from "@react-three/drei";
// import * as THREE from "three";

// const VirtualView = () => {
//   return (
//     <div style={{ width: "100%", height: "60vh" }}>
//       <Canvas>
//         <OrbitControls />
//         <mesh>
//           <sphereGeometry args={[500, 60, 40]} />
//           <meshBasicMaterial
//             map={new THREE.TextureLoader().load("/bg.jpg")}
//             side={THREE.BackSide}
//           />
//         </mesh>
//         {/* Place ControlsOverlay with Html */}
//         <ControlsOverlay />
//       </Canvas>
//     </div>
//   );
// };

// const ControlsOverlay = () => {
//   const { camera } = useThree();

//   const zoomIn = () => {
//     camera.position.z -= 10;
//     camera.updateProjectionMatrix();
//   };

// //   const zoomOut = () => {
// //     camera.position.z += 10;
// //     camera.updateProjectionMatrix();
// //   };
// const zoomOut = () => {
//   // Set a limit for zoom out (e.g., z = 1000)
//   if (camera.position.z > 100) {
//     camera.position.z += 10;
//     camera.updateProjectionMatrix();
//   }
// };

//   const moveUp = () => {
//     camera.position.y -= 5;
//     camera.updateProjectionMatrix();
//   };

//   const moveDown = () => {
//     camera.position.y += 5;
//     camera.updateProjectionMatrix();
//   };

//   const resetCamera = () => {
//     camera.position.set(0, 0, 500);
//     camera.lookAt(0, 0, 0);
//     camera.updateProjectionMatrix();
//   };

//   return (
//     <Html position={[0, 0, 0]}>
//       <div
//         style={{
//           position: "absolute",
//           bottom: "10px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           background: "rgba(255, 255, 255, 0.7)",
//           borderRadius: "8px",
//           padding: "10px",
//           display: "flex",
//           gap: "10px",
//         }}
//       >
//         <button onClick={zoomIn}>Zoom In</button>
//         <button onClick={zoomOut}>Zoom Out</button>
//         <button onClick={moveUp}>Move Up</button>
//         <button onClick={moveDown}>Move Down</button>
//         <button onClick={resetCamera}>Reset</button>
//       </div>
//     </Html>
//   );
// };

// export default VirtualView;



"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";

const VirtualView = () => {
  return (
    <div style={{ width: "100%", height: "60vh" }}>
      <Canvas>
        <OrbitControls
          minDistance={100} 
          maxDistance={400} 
        />
        <mesh>
          <sphereGeometry args={[500, 60, 40]} />
          <meshBasicMaterial
            map={new THREE.TextureLoader().load("/bg.jpg")}
            side={THREE.BackSide}
          />
        </mesh>
        {/* Place ControlsOverlay with Html */}
        <ControlsOverlay />
      </Canvas>
    </div>
  );
};

const ControlsOverlay = () => {
  const { camera } = useThree();

  const zoomIn = () => {
    if (camera.position.z < 400) {
      camera.position.z -= 10;
      camera.updateProjectionMatrix();
    }
  };

  const zoomOut = () => {
    if (camera.position.z > 100) {
      camera.position.z += 10;
      camera.updateProjectionMatrix();
    }
  };

  const moveUp = () => {
    camera.position.y -= 5;
    camera.updateProjectionMatrix();
  };

  const moveDown = () => {
    camera.position.y += 5;
    camera.updateProjectionMatrix();
  };

  const resetCamera = () => {
    camera.position.set(0, 0, 500);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  };

  return (
    <Html position={[0, 0, 0]}>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(255, 255, 255, 0.7)",
          borderRadius: "8px",
          padding: "10px",
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut}>Zoom Out</button>
        <button onClick={moveUp}>Move Up</button>
        <button onClick={moveDown}>Move Down</button>
        <button onClick={resetCamera}>Reset</button>
      </div>
    </Html>
  );
};

export default VirtualView;





// "use client";

// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { OrbitControls, Html } from "@react-three/drei";
// import * as THREE from "three";
// import { useRef, useState } from "react";

// const VirtualView = () => {
//   return (
//     <div style={{ width: "100%", height: "60vh" }}>
//       <Canvas>
//         <AutoOrbitControls />
//         <RotatingSphere />
//         <ControlsOverlay />
//       </Canvas>
//     </div>
//   );
// };

// const RotatingSphere = () => {
//   const sphereRef = useRef();
//   const [isUserInteracting, setIsUserInteracting] = useState(false);

//   // Auto-rotation logic
//   useFrame(() => {
//     if (!isUserInteracting && sphereRef.current) {
//       sphereRef.current.rotation.y += 0.005; // Adjust rotation speed
//     }
//   });

//   return (
//     <mesh ref={sphereRef}>
//       <sphereGeometry args={[500, 60, 40]} />
//       <meshBasicMaterial
//         map={new THREE.TextureLoader().load("/bg.jpg")}
//         side={THREE.BackSide}
//       />
//     </mesh>
//   );
// };

// const AutoOrbitControls = () => {
//   const [isUserInteracting, setIsUserInteracting] = useState(false);
//   const controlsRef = useRef();

//   // Listen to user interactions to toggle interaction state
//   const handleStartInteraction = () => setIsUserInteracting(true);
//   const handleEndInteraction = () => setIsUserInteracting(false);

//   return (
//     <OrbitControls
//       ref={controlsRef}
//       enablePan={false} // Disable panning
//       enableZoom={true} // Allow zooming
//       enableRotate={true} // Allow manual rotation
//       onStart={handleStartInteraction} // Triggered when interaction starts
//       onEnd={handleEndInteraction} // Triggered when interaction ends
//     />
//   );
// };

// const ControlsOverlay = () => {
//   const { camera } = useThree();

//   const resetCamera = () => {
//     camera.position.set(0, 0, 500);
//     camera.lookAt(0, 0, 0);
//     camera.updateProjectionMatrix();
//   };

//   return (
//     <Html position={[0, 0, 0]}>
//       <div
//         style={{
//           position: "absolute",
//           bottom: "10px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           background: "rgba(255, 255, 255, 0.7)",
//           borderRadius: "8px",
//           padding: "10px",
//           display: "flex",
//           gap: "10px",
//         }}
//       >
//         <button onClick={resetCamera}>Reset</button>
//       </div>
//     </Html>
//   );
// };

// export default VirtualView;
