import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async test component", () => {
  test("Renders list of items", async () => {
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");

    expect(listItemElements).not.toHaveLength(0);
  });

  test("Renders list of items with mocks", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: "p1",
          title: "First post",
        },
      ],
    });
    
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");

    expect(listItemElements).not.toHaveLength(0);
  });
});
