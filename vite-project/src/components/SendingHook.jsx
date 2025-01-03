import { UseChat } from "./UseChat";

export function SendingHook({ actualMessage, onInputChange, error, onSend }) {
  return (
    <div>
      <form action="submit">
        <input
          type="text"
          name="messageBox"
          id="messageBox"
          placeholder="Put your message here..."
          onChange={onInputChange}
          value={actualMessage}
        />
        <button type="submit" onClick={onSend}>
          Send
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
