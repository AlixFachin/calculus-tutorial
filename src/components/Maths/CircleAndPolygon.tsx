import { Mafs, Theme, Polygon, Circle, Coordinates, useMovablePoint } from "mafs";

export const CircleAndPolygon = () => {
  const MAX_X = 3;
  const MIN_X = 0;
  const X_STEPS = 10;
  const RADIUS = 3;
  const a = [2, 0] as [number, number];
  const b = [-2, 0] as [number, number];
  const c = useMovablePoint([1, 0], { color: Theme.blue, constrain: (point) => {
    return [Math.max(MIN_X, Math.min(MAX_X, point[0])), 0];
}});

  const numberOfPoints = Math.round((c.x - MIN_X) / (MAX_X - MIN_X) * X_STEPS)+3;
  // Create a polygon with the number of points
  const polygonPoints = Array.from({ length: numberOfPoints }, (_, i) => {
    const angle = (i / numberOfPoints) * Math.PI * 2;
    return [RADIUS*Math.cos(angle), RADIUS*Math.sin(angle) ] as [number, number];
  });

  const segmentLength = Math.sin(Math.PI / numberOfPoints) * RADIUS * 2;
  const polygonLength = numberOfPoints * segmentLength;
  const circleLength = 2 * Math.PI * RADIUS;
  const difference = circleLength - polygonLength;

  return (
    <section className="flex flex-col items-center justify-center">
    <p className="text-sm italic">Hint: Drag the blue point across the X axis to change the number of sides</p>
    <div className="flex lg:flex-row lg:justify-stretch items-center flex-col justify-center">
    <Mafs>
      <Coordinates.Cartesian />
      <Polygon points={polygonPoints} color={Theme.blue} />
      <Circle
        center={[0, 0]}
        radius={RADIUS}
        color={Theme.pink}
        fillOpacity={0}
      />
      {c.element}
    </Mafs>
    <div className="bg-amber-300 p-4 rounded-lg shadow-2xl w-full my-2 lg:mx-2">
        <h3 className="text-lg">Computations</h3>
        <p className="text-sm italic">Note: values are rounded at 3 significant digits</p>
        <ul className="my-1">
            <li>Number of points: {numberOfPoints}</li>
            <li>Length of one Segment: {segmentLength.toFixed(3)}</li>
            <li>Polygon length: {(numberOfPoints*segmentLength).toFixed(3)}</li>
            <li>Circle perimeter: {(2* Math.PI*RADIUS).toFixed(3)}</li>
            <li className="font-extrabold">Difference: {difference.toFixed(3)}</li>
        </ul>
        <p>
            Question: What do you think will happen when n becomes very large?
        </p>
        <p>
            An interpretation of this is that when you peel a carrot with a peeler,
            the more angle you apply, the more food you will waste.
            If you peel only a very small section, you will have to peel many times but you will waste a minimum of carrot.
        </p>
    </div>
    </div>
    </section>
  );
};

export default CircleAndPolygon;