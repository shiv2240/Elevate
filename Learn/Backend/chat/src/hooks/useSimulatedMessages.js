import { useEffect, useRef, useState } from "react";

const predefinedMessages = [
  "Hello there!",
  "How’s it going?",
  "Did you see the news?",
  "What’s up everyone?",
  "React is awesome!",
  "Just chilling here...",
];

export function useSimulatedMessages(activeRoom) {
  const [messages, setMessages] = useState({ general: [], random: [] });
  const [typing, setTyping] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTyping(true);
      setTimeout(() => {
        const newMessage =
          predefinedMessages[
            Math.floor(Math.random() * predefinedMessages.length)
          ];
        setMessages((prev) => ({
          ...prev,
          [activeRoom]: [
            ...prev[activeRoom],
            { text: newMessage, sender: "Bot" },
          ],
        }));
        setTyping(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [activeRoom]);

  const sendMessage = (text) => {
    setMessages((prev) => ({
      ...prev,
      [activeRoom]: [...prev[activeRoom], { text, sender: "You" }],
    }));
  };

  return { messages: messages[activeRoom], sendMessage, typing };
}
