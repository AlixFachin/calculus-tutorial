import { Mafs, Theme, Coordinates, Point } from "mafs";

export const InvertLimitGraph = ({functionType} : {functionType : 'limit' | 'nolimit' | 'infinity'} ) => {
  const NUMBER_POINTS = 10;
  
  const arithmetic_converge = (x: number) => (2*(0.8)**(x+1));
  const arithmetic_diverge = (x: number) => (2*(1.2)**(x+1));
  const arithmetic_nolimit = (x: number) => (2*(-1)**(x+1));
  
  const function_lookup = {
    limit: arithmetic_converge,
    nolimit: arithmetic_nolimit,
    infinity: arithmetic_diverge
  }

  const viewBox_lookup = {
    limit: {x: [0,10], y: [0,2]},
    nolimit: {x: [0,10], y: [-2,2]},
    infinity: {x: [0,10], y: [0,15]}
  } as Record<'limit' | 'nolimit' | 'infinity', {x: [number, number], y: [number, number]}>

  const f = function_lookup[functionType];

  const points = Array.from({ length: NUMBER_POINTS }, (_, i) => {
    return [i+1, f(i+1)] as [number, number];
  });


  console.log(points);
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex items-center flex-col justify-center w-[90%]">
        <Mafs viewBox={ viewBox_lookup[functionType] } >
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
