import { useThree } from "@react-three/fiber";

const ControlsOverlay = () => {
  const { camera } = useThree();

  const zoomIn = () => {
    camera.position.z -= 10; // Adjust zoom
    camera.updateProjectionMatrix(); // Ensure camera updates
  };

  const zoomOut = () => {
    camera.position.z += 10; // Adjust zoom
    camera.updateProjectionMatrix();
  };

  const moveUp = () => {
    camera.position.y += 5; // Move camera up
    camera.updateProjectionMatrix();
  };

  const moveDown = () => {
    camera.position.y -= 5; // Move camera down
    camera.updateProjectionMatrix();
  };

  const resetCamera = () => {
    camera.position.set(0, 0, 500); // Reset to default position
    camera.lookAt(0, 0, 0); // Look at the center
    camera.updateProjectionMatrix();
  };

  return (
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
  );
};

export default ControlsOverlay;
