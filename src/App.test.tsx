import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  const setup = () => {
    return render(<App />);
  };

  it("renders the app with friends list and chat window", () => {
    setup();
    expect(
      screen.getByText("Select a friend to start chatting")
    ).toBeInTheDocument();
  });

  it("selects a friend and displays chat window", () => {
    setup();
    fireEvent.click(screen.getByText("Alice"));
    expect(screen.getByTestId("friend-1")).toBeInTheDocument();
  });
});
