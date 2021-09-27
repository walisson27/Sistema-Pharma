import { render, screen } from "@testing-library/react";
import App from "./App";
import { Frente } from "./components/Frente";
import { Nav } from "./components/Nav";
import Front from "./container/Front";

test("renders nav bar", () => {
  render(<Nav />);
  const linkElement = screen.getByText("Pharma");
  expect(linkElement).toBeInTheDocument();
});
