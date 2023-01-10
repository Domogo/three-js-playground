import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Chest } from "./components/chest";

function App() {
  return (
    <Canvas id="test">
      <pointLight position={[2, 8, 20]} />
      <ambientLight />
      <Chest position={[0, -1, 1]} />
    </Canvas>
  );
}

export default App;
