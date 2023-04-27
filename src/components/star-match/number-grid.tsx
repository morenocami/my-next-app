import { NumberBlock } from "./number-block";

export const NumberGrid = ({ numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9] }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 10,
      }}
    >
      {numbers.map((num) => (
        <NumberBlock key={`num-block-${num}`} value={num} />
      ))}
    </div>
  );
};
