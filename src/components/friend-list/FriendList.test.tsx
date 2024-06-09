import { render, screen, fireEvent } from "@testing-library/react";
import { FriendListProps, FriendList } from "./FriendList";

const friends = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

describe("FriendList", () => {
  const defaultProps: FriendListProps = {
    friends,
    onSelectFriend: jest.fn(),
  };

  const setup = (props: Partial<FriendListProps> = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return render(<FriendList {...setupProps} />);
  };

  it("renders the list of friends", () => {
    setup();
    friends.forEach((friend) => {
      expect(screen.getByText(friend.name)).toBeInTheDocument();
    });
  });

  it("calls onSelectFriend when a friend is clicked", () => {
    const handleSelectFriend = jest.fn();
    setup({ onSelectFriend: handleSelectFriend });

    fireEvent.click(screen.getByText("Alice"));

    expect(handleSelectFriend).toHaveBeenCalledWith(friends[0]);
  });
});
