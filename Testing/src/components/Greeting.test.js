import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Test component", () => {
  test("Renders Hello world test", () => {
    //Arrange
    render(<Greeting />);
    //Act

    //Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("Renders text before button is clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act

    //Assert
    const unchangedTextElement = screen.getByText("Without changes");
    expect(unchangedTextElement).toBeInTheDocument();
  });
  test("Renders text after button is clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const changedTextElement = screen.getByText("text has been changed", {
      exact: false,
    });
    expect(changedTextElement).toBeInTheDocument();
  });
  test("Hide previous text after button is clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const changedTextElement = screen.getByText("Without changes", {
      exact: false,
    });
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    expect(changedTextElement).not.toBeInTheDocument();
  });
  test("Another way: Hide previous text after button is clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const changedTextElement = screen.queryByText("Without changes", {
      exact: false,
    });
    expect(changedTextElement).toBeNull();
  });
});
