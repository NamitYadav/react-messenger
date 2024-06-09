import { FC, FormEvent, useState } from "react";
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

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        sx={{
          wordWrap: "break-word",
          overflowWrap: "break-word",
          whiteSpace: "pre-wrap",
        }}
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
      <form onSubmit={handleSendMessage}>
        <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={1}>
          <TextField
            fullWidth
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            label="Type a message"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </Box>
      </form>
    </Box>
  );
};
