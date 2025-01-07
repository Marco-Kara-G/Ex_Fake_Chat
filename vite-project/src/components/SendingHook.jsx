import { UseChat } from "./UseChat";

export function SendingHook({ actualMessage, onInputChange, error, onSend }) {
  return (
    <div>
      <form action="submit" className="inp-message-form">
        <input
          type="text"
          name="messageBox"
          id="messageBox"
          placeholder="Put your message here..."
          onChange={onInputChange}
          value={actualMessage}
          className="message-inp"
        />
        <button type="submit" onClick={onSend} className="sending-btn">
          <svg
            fill="#000000"
            height="20px"
            width="20px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="-133.12 -133.12 778.24 778.24"
            xml:space="preserve"
            stroke="#000000"
            stroke-width="11.264066000000001"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="35.84021"
            >
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M507.284,248.364L12.35,0.898C8.894-0.826,4.721-0.007,2.153,2.86c-2.56,2.884-2.867,7.125-0.759,10.351l159.07,242.79 L1.393,498.792c-2.108,3.226-1.801,7.467,0.759,10.351c1.664,1.86,4.002,2.859,6.383,2.859c1.289,0,2.594-0.29,3.814-0.896 l494.933-247.467c2.893-1.451,4.719-4.403,4.719-7.637S510.176,249.815,507.284,248.364z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M507.284,248.364L12.35,0.898C8.894-0.826,4.721-0.007,2.153,2.86c-2.56,2.884-2.867,7.125-0.759,10.351l159.07,242.79 L1.393,498.792c-2.108,3.226-1.801,7.467,0.759,10.351c1.664,1.86,4.002,2.859,6.383,2.859c1.289,0,2.594-0.29,3.814-0.896 l494.933-247.467c2.893-1.451,4.719-4.403,4.719-7.637S510.176,249.815,507.284,248.364z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
