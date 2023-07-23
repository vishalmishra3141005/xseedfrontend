import Tile from "./Tile";

export default function Content() {
  const additionLinks = [
    [
      "Using place value to add 3-digit numbers: part 1",
      "https://www.youtube.com/watch?v=Wm0zq-NqEFs",
      "Wm0zq-NqEFs",
      "Let's explore adding two 3-digit numbers using place value and carrying. We walk through the process step by step, starting with the ones place, then the tens place, and finally the hundreds place. We emphasize the importance of understanding what carrying means and how it relates to place value. Created by Sal Khan.",
    ],
    [
      "Using place value to add 3-digit numbers: part 2",
      "https://www.youtube.com/watch?v=O9zSHs1TWMM",
      "O9zSHs1TWMM",
      "Learn to use regrouping to add 536+398. Created by Sal Khan."
    ],
    ["Adding 3-digit numbers", 
    "https://www.youtube.com/watch?v=9hM32lsQ4aI",
    "9hM32lsQ4aI",
    "Learn to use regrouping, or carrying to add 709+996, 373+88, and 149+293. Created by Sal Khan."
    ],
  ];

  const subtractionLinks = [
    [
      "Methods for subtracting 3-digit numbers",
      "https://www.youtube.com/watch?v=ZIiZkmaehsU",
      "ZIiZkmaehsU",
      "Subtract 357-156 using place value strategies."
    ],
    [
      "Worked example: Subtracting 3-digit numbers (regrouping twice)",
      "https://www.youtube.com/watch?v=LSaaKau63Gg",
      "LSaaKau63Gg",
      "Sal using regrouping (borrowing) to subtract 913-286. Created by Sal Khan."

    ],
  ];

  return (
    <div className="content-container">
      <Tile title="3-digit addition" videoLink={additionLinks} />
      <Tile title="3-digit subtraction" videoLink={subtractionLinks} />
    </div>
  );
}
