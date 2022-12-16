import { handleSignIn } from "../../chat/SignIn";
import "./chatButton.scss";
import { HiOutlineChatAlt} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function ChatButton({ open, onClose }) {
  const currentUser = useSelector(state =>state.user)
  const user = currentUser.currentUser
  console.log(user)
  const nav= useNavigate()
  function tog() {
    if(!user){
      nav("/login")
    }
    else if (open === false) {
      onClose(true);
      handleSignIn()
    }

  }

  return (
    <button className="chat-button" onClick={() => tog()}  >
      <HiOutlineChatAlt style={{fontSize: 42}} />
    </button>
  );
}
