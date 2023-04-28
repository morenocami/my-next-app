import { useState } from "react";
import { NumberBlock } from "./number-block";

const initalBlockStates = [
  { value: 1, selected: false, notInPlay: false },
  { value: 2, selected: false, notInPlay: false },
  { value: 3, selected: false, notInPlay: false },
  { value: 4, selected: false, notInPlay: false },
  { value: 5, selected: false, notInPlay: false },
  { value: 6, selected: false, notInPlay: false },
  { value: 7, selected: false, notInPlay: false },
  { value: 8, selected: false, notInPlay: false },
  { value: 9, selected: false, notInPlay: false },
];

export const NumberGrid = ({
  answer = 0,
  nextQuestion = (x: number[]) => {},
}) => {
  const [numberBlocks, setNumberBlocks] = useState(initalBlockStates);

  const checkAnswer = (response: number) => {
    numberBlocks.forEach((block) => {
      if (block.value === response) {
        block.selected = !block.selected;
      }
    });
    setNumberBlocks([...numberBlocks]);

    const possibleAnswer = numberBlocks
      .map((x) => (x.selected && !x.notInPlay ? x.value : 0))
      .reduce((a, b) => a + b);

    if (possibleAnswer == answer) {
      numberBlocks.forEach((block) => {
        if (block.selected) {
          block.notInPlay = true;
        }
      });
      setNumberBlocks([...numberBlocks]);
      const remaining = numberBlocks
        .map((x) => (x.selected ? 0 : x.value))
        .filter((x) => x);
      nextQuestion(remaining);
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 15,
      }}
    >
      {numberBlocks.map(({ value, selected, notInPlay }) => (
        <NumberBlock
          key={`num-block-${value}`}
          value={value}
          selected={selected}
          notInPlay={notInPlay}
          selectAnswer={checkAnswer}
        />
      ))}
    </div>
  );
};
