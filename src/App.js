import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

// Chatbot theme
const theme = {
  background: "#f5f8fb",
  fontFamily: "Arial",
  headerBgColor: "#007bff",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#007bff",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

// Chatbot conversation steps
const steps = [
  {
    id: "1",
    message: "Hello! I'm your AI assistant. What's your name?",
    trigger: "askName",
  },
  {
    id: "askName",
    user: true,
    trigger: "greetUser",
  },
  {
    id: "greetUser",
    message: "Nice to meet you, {previousValue}! How can I assist you today?",
    trigger: "helpOptions",
  },
  {
    id: "helpOptions",
    options: [
      { value: "info", label: "Tell me about this chatbot", trigger: "aboutChatbot" },
      { value: "exit", label: "Just saying hi!", trigger: "goodbye" },
    ],
  },
  {
    id: "aboutChatbot",
    message: "I'm a chatbot built with React! Soon, I’ll be connected to AgentVerse.",
    end: true,
  },
  {
    id: "goodbye",
    message: "Okay! Have a great day! 😊",
    end: true,
  },
];

// Main App component
const App = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} />
  </ThemeProvider>
);

export default App;
