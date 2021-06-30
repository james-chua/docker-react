import { render, screen } from "@testing-library/react";
import ReactDom from "react-dom";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it("renders without crashing", () => {
  const div = documentt.craeteElement("div");
  render(<App />, div);
  ReactDom.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = documentt.craeteElement("div");
  render(<App />, div);
  ReactDom.unmountComponentAtNode(div);
});
