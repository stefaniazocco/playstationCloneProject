import { handleSignIn } from "../../chat/SignIn";
import "./chatButton.scss";

export function ChatButton({ open, onClose }) {
  function tog() {
    if (open === false) {
      onClose(true);
      handleSignIn()
    }

  }

  return (
    <button className="chat-button" onClick={() => tog()}  >
      CHAT WITH US
    </button>
  );
}
