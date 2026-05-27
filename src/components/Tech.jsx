import { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

import { Ball } from "./canvas/Ball";
import CanvasLoader from "./Loader";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Spacing between ball centers in world units.
const SPACING = 7;
// Ball diameter (radius 2.75 * 2) plus padding for the Float bob/rotation.
const BALL_EXTENT = 7;

// Fits the orthographic camera so the whole grid is visible at any canvas
// size — recomputes on resize and when the column count changes.
const FitCamera = ({ columns, rows }) => {
  const camera = useThree((state) => state.camera);
  const size = useThree((state) => state.size);

  useEffect(() => {
    const gridW = (columns - 1) * SPACING + BALL_EXTENT;
    const gridH = (rows - 1) * SPACING + BALL_EXTENT;
    camera.zoom = Math.min(size.width / gridW, size.height / gridH);
    camera.updateProjectionMatrix();
  }, [camera, size.width, size.height, columns, rows]);

  return null;
};

const TechBalls = ({ columns, rows }) => {
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      {technologies.map((technology, index) => {
        const col = index % columns;
        const row = Math.floor(index / columns);
        // Center each (possibly partial) row horizontally.
        const ballsInRow =
          row === rows - 1 && technologies.length % columns !== 0
            ? technologies.length % columns
            : columns;
        const x = (col - (ballsInRow - 1) / 2) * SPACING;
        const y = ((rows - 1) / 2 - row) * SPACING;

        return (
          <Ball
            key={technology.name}
            imgUrl={technology.icon}
            position={[x, y, 0]}
          />
        );
      })}
    </>
  );
};

const Tech = () => {
  const [columns, setColumns] = useState(5);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const apply = (matches) => setColumns(matches ? 3 : 5);

    apply(mediaQuery.matches);
    const handler = (e) => apply(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const rows = Math.ceil(technologies.length / columns);
  // Canvas height scales with the number of rows so balls stay a sane size.
  const cellSize = columns <= 3 ? 110 : 140;

  return (
    <div className="w-full" style={{ height: rows * cellSize }}>
      <Canvas orthographic dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<CanvasLoader />}>
          <FitCamera columns={columns} rows={rows} />
          <TechBalls columns={columns} rows={rows} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default SectionWrapper(Tech, "");
