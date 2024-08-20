import { useState } from "react";

let initialShapes = [
  { id: 0, type: "circle", x: 50, y: 100 },
  { id: 1, type: "square", x: 150, y: 100 },
  { id: 2, type: "circle", x: 250, y: 100 },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick() {
    const nextShapes = shapes.map((shape) => {
      if (shape.type !== "circle") {
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 20,
        };
      }
    });
    setShapes(nextShapes);
  }

  return (
    <>
      <button
        className="outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0 hover:bg-blue-700"
        onClick={handleClick}
      >
        Move Circles Down
      </button>
      {shapes.map((shape) => {
        return (
          <div
            key={shape.id}
            style={{
              background: "purple",
              position: "absolute",
              left: shape.x,
              top: shape.y,
              borderRadius: shape.type === "circle" ? "50%" : "",
              width: 20,
              height: 20,
            }}
          />
        );
      })}
    </>
  );
}
