import { FC, useState } from "react";
import { Container, Grid, Paper, Typography, Box } from "@mui/material";
import { Friend, Message } from "./components/types";
import { FriendList } from "./components/friend-list/FriendList";
import { ChatWindow } from "./components/chat-window/ChatWindow";

const friends: Friend[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const App: FC = () => {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [messages, setMessages] = useState<{ [key: string]: Message[] }>({});

  const handleFriendSelect = (friend: Friend) => {
    setSelectedFriend(friend);
  };

  const handleSendMessage = (message: string) => {
    if (selectedFriend) {
      const friendMessages = messages[selectedFriend.name] || [];
      setMessages({
        ...messages,
        [selectedFriend.name]: [
          ...friendMessages,
          { text: message, sender: "You" },
        ],
      });
    }
  };

  return (
    <Container>
      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        <Grid item xs={3}>
          <Paper elevation={3}>
            <FriendList friends={friends} onSelectFriend={handleFriendSelect} />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper elevation={3}>
            <Box p={2}>
              {selectedFriend ? (
                <>
                  <Typography variant="h6">{selectedFriend.name}</Typography>
                  <ChatWindow
                    messages={messages[selectedFriend.name] || []}
                    onSendMessage={handleSendMessage}
                  />
                </>
              ) : (
                <Typography>Select a friend to start chatting</Typography>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
