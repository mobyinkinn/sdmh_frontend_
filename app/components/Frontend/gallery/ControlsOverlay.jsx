// import { useThree } from "@react-three/fiber";
// import { Html } from "@react-three/drei";
// import React, { useEffect, useState } from "react";
// import { IconButton, Box } from "@mui/material";
// import ZoomInIcon from "@mui/icons-material/ZoomIn";
// import ZoomOutIcon from "@mui/icons-material/ZoomOut";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import RestartAltIcon from "@mui/icons-material/RestartAlt";

// const ControlsOverlay = () => {
//   const { camera } = useThree();
//   const [minZoom, setMinZoom] = useState(300); // cap zoom out
//   const [maxZoom, setMaxZoom] = useState(700); // optional cap for zoom in

//   useEffect(() => {
//     camera.position.set(0, 0, 500);
//     camera.lookAt(0, 0, 0);
//     camera.updateProjectionMatrix();
//   }, [camera]);

//   const zoomIn = () => {
//     if (camera.position.z > minZoom) {
//       camera.position.z -= 10;
//       camera.updateProjectionMatrix();
//     }
//   };

//   const zoomOut = () => {
//     if (camera.position.z < maxZoom) {
//       camera.position.z += 10;
//       camera.updateProjectionMatrix();
//     }
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
//     <Html position={[0, 0, 0]} fullscreen>
//       <Box
//         sx={{
//           position: "absolute",
//           bottom: 20,
//           left: "50%",
//           transform: "translateX(-50%)",
//           background: "rgba(255, 255, 255, 0.9)",
//           borderRadius: "12px",
//           padding: "8px 16px",
//           display: "flex",
//           gap: 1,
//           zIndex: 999,
//           boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
//         }}
//       >
//         <IconButton onClick={zoomIn}>
//           <ZoomInIcon />
//         </IconButton>
//         <IconButton onClick={zoomOut}>
//           <ZoomOutIcon />
//         </IconButton>
//         <IconButton onClick={moveUp}>
//           <ArrowUpwardIcon />
//         </IconButton>
//         <IconButton onClick={moveDown}>
//           <ArrowDownwardIcon />
//         </IconButton>
//         <IconButton onClick={resetCamera}>
//           <RestartAltIcon />
//         </IconButton>
//       </Box>
//     </Html>
//   );
// };

// export default ControlsOverlay;



// import { useThree } from "@react-three/fiber";
// import { Html } from "@react-three/drei";
// import React, { useEffect, useState } from "react";
// import { IconButton, Box } from "@mui/material";
// import ZoomInIcon from "@mui/icons-material/ZoomIn";
// import ZoomOutIcon from "@mui/icons-material/ZoomOut";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import RestartAltIcon from "@mui/icons-material/RestartAlt";

// const ControlsOverlay = () => {
//   const { camera } = useThree();
//   const [minZoom, setMinZoom] = useState(300); // cap zoom out
//   const [maxZoom, setMaxZoom] = useState(700); // optional cap for zoom in

//   useEffect(() => {
//     camera.position.set(0, 0, 500);
//     camera.lookAt(0, 0, 0);
//     camera.updateProjectionMatrix();
//   }, [camera]);

//   const zoomIn = () => {
//     if (camera.position.z > minZoom) {
//       camera.position.z -= 10;
//       camera.updateProjectionMatrix();
//     }
//   };

//   const zoomOut = () => {
//     if (camera.position.z < maxZoom) {
//       camera.position.z += 10;
//       camera.updateProjectionMatrix();
//     }
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
//     <Html position={[0, 0, 0]} fullscreen>
//       <Box
//         sx={{
//           position: "absolute",
//           bottom: 20,
//           left: "50%",
//           transform: "translateX(-50%)",
//           background: "rgba(255, 255, 255, 0.9)",
//           borderRadius: "12px",
//           padding: "8px 16px",
//           display: "flex",
//           gap: 1,
//           zIndex: 999,
//           boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
//         }}
//       >
//         <IconButton onClick={zoomIn}>
//           <ZoomInIcon />
//         </IconButton>
//         <IconButton onClick={zoomOut}>
//           <ZoomOutIcon />
//         </IconButton>
//         <IconButton onClick={moveUp}>
//           <ArrowUpwardIcon />
//         </IconButton>
//         <IconButton onClick={moveDown}>
//           <ArrowDownwardIcon />
//         </IconButton>
//         <IconButton onClick={resetCamera}>
//           <RestartAltIcon />
//         </IconButton>
//       </Box>
//     </Html>
//   );
// };

// export default ControlsOverlay;


import { useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import { IconButton, Box } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const ControlsOverlay = () => {
  const { camera } = useThree();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [minZoom] = useState(300);
  const [maxZoom] = useState(700);
  const [angle, setAngle] = useState(0);
  const radius = 500; // keep same as initial z-pos of camera

  useEffect(() => {
    camera.position.set(0, 0, 500);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera]);

  const zoomIn = () => {
    if (camera.position.z > minZoom) {
      camera.position.z -= 10;
      camera.updateProjectionMatrix();
    }
  };

  const zoomOut = () => {
    if (camera.position.z < maxZoom) {
      camera.position.z += 10;
      camera.updateProjectionMatrix();
    }
  };
  const turnLeft = () => {
    const newAngle = angle - Math.PI / 18; // 10 degrees
    setAngle(newAngle);
    camera.position.x = radius * Math.sin(newAngle);
    camera.position.z = radius * Math.cos(newAngle);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  };

  const turnRight = () => {
    const newAngle = angle + Math.PI / 18;
    setAngle(newAngle);
    camera.position.x = radius * Math.sin(newAngle);
    camera.position.z = radius * Math.cos(newAngle);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  };


  const moveUp = () => {
    camera.position.y += 5;
    camera.updateProjectionMatrix();
  };

  const moveDown = () => {
    camera.position.y -= 5;
    camera.updateProjectionMatrix();
  };

  const resetCamera = () => {
    camera.position.set(0, 0, 500);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  };

  const toggleFullscreen = () => {
    const viewer = document.fullscreenElement || document.documentElement;
    if (!document.fullscreenElement) {
      viewer.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };

  return (
    <Html position={[0, 0, 0]}>
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translate3d(-130px, 325px, 0px)",
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: "12px",
          padding: "8px 16px",
          display: "flex",
          gap: 1,
          zIndex: 10, // important to stay below close button
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        <IconButton onClick={zoomIn}>
          <ZoomInIcon />
        </IconButton>
        <IconButton onClick={zoomOut}>
          <ZoomOutIcon />
        </IconButton>
        <IconButton onClick={moveUp}>
          <ArrowUpwardIcon />
        </IconButton>
        <IconButton onClick={moveDown}>
          <ArrowDownwardIcon />
        </IconButton>
        <IconButton onClick={turnLeft}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton onClick={turnRight}>
          <ArrowForwardIcon />
        </IconButton>
        <IconButton onClick={resetCamera}>
          <RestartAltIcon />
        </IconButton>
        <IconButton onClick={toggleFullscreen}>
          {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
        </IconButton>
      </Box>
    </Html>
  );
};

export default ControlsOverlay;
