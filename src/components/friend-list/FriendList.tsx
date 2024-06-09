import { List, ListItemButton, ListItemText } from "@mui/material";
import { FC } from "react";
import { Friend } from "../types";

export interface FriendListProps {
  friends: Friend[];
  onSelectFriend: (friend: Friend) => void;
}

export const FriendList: FC<FriendListProps> = ({ friends, onSelectFriend }) => {
  return (
    <List>
      {friends.map((friend) => (
        <ListItemButton key={friend.id} onClick={() => onSelectFriend(friend)} data-testid={`friend-${friend.id}`}>
          <ListItemText primary={friend.name} />
        </ListItemButton>
      ))}
    </List>
  );
};