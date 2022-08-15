import { render, screen, fireEvent } from "@testing-library/react";
import Resource from "./Resource";

const resourceEl = {
  id: 1,
  category: "Tools",
  title: "Example",
  description: "Example description",
  link: "htttps://google.com",
};

describe("<Resource />", () => {
  render(<Resource resource={resourceEl} />);
  const resource = screen.getByText("Example");

  it("renders Resource properly", () => {
    expect(resource).toBeInTheDocument();
  });
  it("should navigate to link on click", () => {
    fireEvent.click(resource);
    expect(resource).not.toBeInTheDocument();
  });
});
