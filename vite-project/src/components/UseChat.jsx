import { useState } from "react";

export function UseChat() {
  const [messageList, setMessageList] = useState([]);
  const [actualMessage, setActualMessage] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setActualMessage(event.target.value);
  };
  const handleSendingMessage = (event) => {
    event.preventDefault();
    setError(null);
    if (actualMessage !== "") {
      setMessageList((prevList) => [...prevList, actualMessage]);
    } else {
      setError("Please put a valid message input");
      return;
    }
    setActualMessage("");
  };

  return {
    messageList: messageList,
    actualMessage: actualMessage,
    onInputChange: handleInputChange,
    error: error,
    onSend: handleSendingMessage,
  };
}
