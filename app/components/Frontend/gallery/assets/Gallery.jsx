// "use client";

// import { Canvas, useThree } from "@react-three/fiber";
// import { OrbitControls, Html } from "@react-three/drei";
// import * as THREE from "three";

// const Gallerychnage = ({ image }) => {
//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       <Canvas>
//         <OrbitControls />
//         <mesh>
//           <sphereGeometry args={[500, 60, 40]} />
//           <meshBasicMaterial
//             map={new THREE.TextureLoader().load(image || "/bg.jpg")}
//             side={THREE.BackSide}
//           />
//         </mesh>
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

//   const zoomOut = () => {
//     camera.position.z += 10;
//     camera.updateProjectionMatrix();
//   };

//   const moveUp = () => {
//     camera.position.y += 5;
//     camera.updateProjectionMatrix();
//   };

//   const moveDown = () => {
//     camera.position.y -= 5;
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

// export default Gallerychnage;



// "use client";

// import { Canvas, useThree } from "@react-three/fiber";
// import { OrbitControls, Html } from "@react-three/drei";
// import * as THREE from "three";
// import { useEffect, useState } from "react";
// import Spinner from "@/app/components/ui/Spinner";
// import ControlsOverlay from "../ControlsOverlay";

// const Gallerychnage = ({ image }) => {
//   const [texture, setTexture] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const loader = new THREE.TextureLoader();
//     loader.load(
//       image || "/bg.jpg",
//       (loadedTexture) => {
//         setTexture(loadedTexture);
//         setIsLoading(false);
//       },
//       undefined,
//       (err) => {
//         console.error("Texture loading failed:", err);
//         setIsLoading(false); // Stop spinner even if failed
//       }
//     );
//   }, [image]);

//   if (isLoading || !texture) {
//     return (
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Spinner />
//       </div>
//     );
//   }

//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       <Canvas>
//         <OrbitControls minDistance={100} maxDistance={400} />
//         <mesh>
//           <sphereGeometry args={[500, 60, 40]} />
//           <meshBasicMaterial map={texture} side={THREE.BackSide} />
//         </mesh>
//         <ControlsOverlay />
//       </Canvas>
//     </div>
//   );
// };

// // const ControlsOverlay = () => {
// //   const { camera } = useThree();

// //   const zoomIn = () => {
// //     camera.position.z -= 10;
// //     camera.updateProjectionMatrix();
// //   };

// //   const zoomOut = () => {
// //     camera.position.z += 10;
// //     camera.updateProjectionMatrix();
// //   };

// //   const moveUp = () => {
// //     camera.position.y += 5;
// //     camera.updateProjectionMatrix();
// //   };

// //   const moveDown = () => {
// //     camera.position.y -= 5;
// //     camera.updateProjectionMatrix();
// //   };

// //   const resetCamera = () => {
// //     camera.position.set(0, 0, 500);
// //     camera.lookAt(0, 0, 0);
// //     camera.updateProjectionMatrix();
// //   };

// //   return (
// //     <Html position={[0, 0, 0]}>
// //       <div
// //         style={{
// //           position: "absolute",
// //           bottom: "10px",
// //           left: "50%",
// //           transform: "translateX(-50%)",
// //           background: "rgba(255, 255, 255, 0.7)",
// //           borderRadius: "8px",
// //           padding: "10px",
// //           display: "flex",
// //           gap: "10px",
// //           zIndex: 999,
// //         }}
// //       >
// //         <button onClick={zoomIn}>Zoom In</button>
// //         <button onClick={zoomOut}>Zoom Out</button>
// //         <button onClick={moveUp}>Move Up</button>
// //         <button onClick={moveDown}>Move Down</button>
// //         <button onClick={resetCamera}>Reset</button>
// //       </div>
// //     </Html>
// //   );
// // };

// export default Gallerychnage;



"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useState } from "react";
import Spinner from "@/app/components/ui/Spinner";
import ControlsOverlay from "../ControlsOverlay";

const Gallerychnage = ({ image }) => {
  const [activeImage, setActiveImage] = useState(image[0]);
  const [texture, setTexture] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    setIsLoading(true);
    loader.load(
      activeImage?.src || activeImage,
      (loadedTexture) => {
        setTexture(loadedTexture);
        setIsLoading(false);
      },
      undefined,
      (err) => {
        console.error("Texture loading failed:", err);
        setIsLoading(false);
      }
    );
  }, [activeImage]);

  if (isLoading || !texture) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Canvas>
        <OrbitControls minDistance={50} maxDistance={400} />
        <mesh>
          <sphereGeometry args={[500, 60, 40]} />
          <meshBasicMaterial map={texture} side={THREE.BackSide} />
        </mesh>
        <ControlsOverlay />
      </Canvas>

      {/* Thumbnails Bar */}
      <div
        style={{
          position: "absolute",
          bottom: 70,
          left: "52%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
          background: "rgba(255, 255, 255, 0.9)",
          padding: "8px 16px",
          borderRadius: "12px",
          zIndex: 20,
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        {image.map((img, idx) => (
          <img
            key={idx}
            src={img?.src || img}
            alt={`thumb-${idx}`}
            onClick={() => setActiveImage(img)}
            style={{
              height: "50px",
              width: "auto",
              cursor: "pointer",
              border:
                img === activeImage
                  ? "2px solid #476C9B"
                  : "2px solid transparent",
              borderRadius: "6px",
              objectFit: "cover",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallerychnage;
