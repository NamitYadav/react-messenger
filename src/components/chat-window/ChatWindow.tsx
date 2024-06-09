import { FC, useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Message } from "../types";

export interface ChatWindowProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
}

export const ChatWindow: FC<ChatWindowProps> = ({
  messages,
  onSendMessage,
}) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  return (
    <Box>
      <Box
        my={2}
        p={2}
        height={400}
        overflow="auto"
        border={1}
        borderRadius={2}
        borderColor="grey.300"
      >
        {messages.map((message, index) => (
          <Typography
            key={index}
            align={message.sender === "You" ? "right" : "left"}
          >
            <strong>{message.sender}:</strong> {message.text}
          </Typography>
        ))}
      </Box>
      <Box display="flex">
        <TextField
          fullWidth
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          label="Type a message"
          variant="outlined"
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </Box>
    </Box>
  );
};
