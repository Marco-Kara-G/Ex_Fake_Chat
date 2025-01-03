import { SendingHook } from "./SendingHook";
import { UseChat } from "./UseChat";

export function ChatComponent() {
  const { messageList, actualMessage, onInputChange, error, onSend } =
    UseChat();
  return (
    <div>
      <p className="sent-message">Ciao,come stai?</p>
      <p className="received-message">Ehy ciao, tutto bene grazie, tu?</p>
      <p className="sent-message">Molto bene, come stano andando le vacanze?</p>
      <p className="received-message">
        sono stato in montagna e poi al mare, tu? che hai fatto?
      </p>
      {messageList.map((mess, index) => (
        <p
          key={index}
          className={index % 2 === 0 ? "sent-message" : "received-message"}
        >
          {mess}
        </p>
      ))}
      <SendingHook
        actualMessage={actualMessage}
        onInputChange={onInputChange}
        onSend={onSend}
        error={error}
      />
    </div>
  );
}
