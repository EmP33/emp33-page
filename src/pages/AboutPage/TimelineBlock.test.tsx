import { render, screen } from "@testing-library/react";
import TimelineBlock from "./TimelineBlock";

const resourceEl = {
  id: 1,
  category: "Tools",
  title: "Example",
  description: "Example description",
  link: "htttps://google.com",
};

describe("<TimelineBlock />", () => {
  render(
    <TimelineBlock
      direction="left"
      year={2020}
      title="Example"
      description="Example Description"
    />
  );
  const Timeline = screen.getByText("Example");

  it("renders TimelineBlock properly", () => {
    expect(Timeline).toBeInTheDocument();
  });
});
