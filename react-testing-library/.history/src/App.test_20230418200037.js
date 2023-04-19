import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("shows 6 products by default", async () => {
  render(<App />);

  const headings = await screen.findAllByRole("heading");
  expect(headings).toHaveLength(6);
});

test("clicking on thke button loads 6 mkore products", async () => {
  render(<App />);

  const button = await screen.findByRole("button", {
    name: /load more/i
  });
  await user.click(button);

  await waitFor(async () => {
    const headings = await screen.findAllByRole("heading");
    expect(headings).toHaveLength(12);
  });
});
