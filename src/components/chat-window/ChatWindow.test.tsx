import { render, screen, fireEvent } from "@testing-library/react";
import { ChatWindow, ChatWindowProps } from "./ChatWindow";

const messages = [
  { text: "Hello", sender: "Alice" },
  { text: "Hi", sender: "You" },
];

describe("ChatWindow", () => {
  const defaultProps: ChatWindowProps = {
    messages,
    onSendMessage: jest.fn(),
  };

  const setup = (props: Partial<ChatWindowProps> = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return render(<ChatWindow {...setupProps} />);
  };

  it("renders the chat window with messages", () => {
    setup();
    messages.forEach((message) => {
      expect(screen.getByText(message.text)).toBeInTheDocument();
    });
  });

  it("sends a new message", () => {
    const handleSendMessage = jest.fn();
    setup({ onSendMessage: handleSendMessage });

    const input = screen.getByLabelText("Type a message");
    fireEvent.change(input, { target: { value: "New message" } });
    fireEvent.click(screen.getByText("Send"));
    
    expect(handleSendMessage).toHaveBeenCalledWith("New message");
  });
});
