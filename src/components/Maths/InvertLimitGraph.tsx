import { useState } from "react";
import { Mafs, Theme, Coordinates, Point } from "mafs";

type GraphVariant = "limit" | "nolimit" | "infinity";

// Defining variants outside the component to avoid re-creation on every render
const arithmetic_converge = (x: number) => 2 * 0.8 ** (x + 1);
const arithmetic_diverge = (x: number) => 2 * 1.2 ** (x + 1);
const arithmetic_nolimit = (x: number) => 2 * (-1) ** (x + 1);

const function_lookup = {
  limit: arithmetic_converge,
  nolimit: arithmetic_nolimit,
  infinity: arithmetic_diverge,
};

const viewBox_lookup = {
  limit: { x: [0, 10], y: [0, 2] },
  nolimit: { x: [0, 10], y: [-2, 2] },
  infinity: { x: [0, 10], y: [0, 15] },
} as Record<
  "limit" | "nolimit" | "infinity",
  { x: [number, number]; y: [number, number] }
>;

const explanation_lookup = {
  limit:
    "The multiplier for this sequence is 0.8. We can see that this sequences gets pretty close to zero as x increases.",
  nolimit:
    "The multiplier for this sequence is -1. We can see that this sequences oscillates, and does not seem to converge.",
  infinity:
    "The multiplier for this sequence is 1.2. We can see that this sequence gets very big very fast.",
};

export const InvertLimitGraph = () => {
  const [currentVariant, setCurrentVariant] = useState<GraphVariant>("limit");

  const NUMBER_POINTS = 100;

  const f = function_lookup[currentVariant];

  const points = Array.from({ length: NUMBER_POINTS }, (_, i) => {
    return [i + 1, f(i + 1)] as [number, number];
  });

  return (
    <section className="flex flex-col items-center justify-center bg-amber-100 p-4 rounded-3xl m-2">
      <p className="text-sm">Choose a type of limit you want to examine</p>
      <div className="flex flex-row items-center justify-center w-full">
        <button
          className="bg-amber-200 p-2 rounded-md m-2"
          onClick={() => setCurrentVariant("limit")}
        >
          Converge
        </button>
        <button
          className="bg-amber-200 p-2 rounded-md m-2"
          onClick={() => setCurrentVariant("nolimit")}
        >
          No Limit
        </button>
        <button
          className="bg-amber-200 p-2 rounded-md m-2"
          onClick={() => setCurrentVariant("infinity")}
        >
          Infinity Limit
        </button>
      </div>
      <p>{explanation_lookup[currentVariant]}</p>
      <div className="flex items-center flex-col justify-center w-[90%]">
        <Mafs viewBox={viewBox_lookup[currentVariant]}>
          <Coordinates.Cartesian />
          {points.map((point, i) => (
            <Point x={point[0]} y={point[1]} key={i} color={Theme.blue} />
          ))}
        </Mafs>
      </div>
    </section>
  );
};

export default InvertLimitGraph;
