import { useState } from "react";
import { UseFetchAPI } from "./FetchAPI";

export function ChatComponents() {
  const { messages, error, loading, onNewMessage } = UseFetchAPI();

  const [messageList, setMessageList] = useState([]); // Cronologia messaggi
  const [actualMessage, setActualMessage] = useState(""); // Messaggio attuale

  // Funzione per gestire il cambiamento dell'input
  const handleMessageChange = (event) => {
    setActualMessage(event.target.value);
  };

  // Funzione per inviare un messaggio
  const onSending = async (e) => {
    e.preventDefault();

    if (!actualMessage.trim()) return; // Non inviare messaggi vuoti

    // Aggiungi il messaggio dell'utente alla lista
    const userMessage = { from: "user", text: actualMessage };
    setMessageList((prev) => [...prev, userMessage]);

    // Estrai la risposta corrispondente dal backend
    const botResponse =
      messages?.responses?.[actualMessage] || "Risposta non trovata";

    // Aggiungi la risposta del bot alla lista
    const botMessage = { from: "bot", text: botResponse };
    setMessageList((prev) => [...prev, botMessage]);

    // Pulisci l'input
    setActualMessage("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="messageInp"
          id="messageInp"
          value={actualMessage}
          onChange={handleMessageChange}
          placeholder="Scrivi il tuo messaggio"
        />
        <button onClick={onSending} disabled={loading}>
          {loading ? "Invio in corso..." : "Invia Messaggio"}
        </button>
      </div>

      {error && <p>Errore: {error}</p>}

      <div>
        <h3>Chat</h3>
        <div>
          {messageList.map((msg, index) => (
            <div
              key={index}
              style={{ textAlign: msg.from === "user" ? "right" : "left" }}
            >
              <p>
                <strong>{msg.from === "user" ? "Utente" : "Bot"}:</strong>{" "}
                {msg.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
