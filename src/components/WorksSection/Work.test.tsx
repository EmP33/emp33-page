import { render, screen, fireEvent } from "@testing-library/react";
import Work from "./Work";
import { BrowserRouter as Router } from "react-router-dom";

const workEl = {
  id: 1,
  title: "Project",
  description: "Example Description",
  image: "https://example-img.com",
  ghlink: "https://example-gh.com",
  link: "https://example-link.com",
  topics: ["react", "typescript"],
};

describe("<Work />", () => {
  render(
    <Router>
      <Work work={workEl} />
    </Router>
  );
  const work = screen.getByTestId(workEl.id);

  it("renders Resource properly", () => {
    expect(work).toBeInTheDocument();
  });
  it("should navigate to link on click", () => {
    fireEvent.click(work);
    expect(work).not.toBeInTheDocument();
  });
});
