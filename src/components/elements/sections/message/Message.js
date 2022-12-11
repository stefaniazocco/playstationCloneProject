import { useEffect, useState } from "react";
import "./message.scss";
import { IoCloseOutline } from "react-icons/io5";
import { store } from "../../../../redux/store";
import { clearCart } from "../../../../redux/cartActions";


export function useMessage(){
    const [message, setMessage] = useState("");

    function closeMessage(){
        setMessage("")
    }

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
    
        if (query.get("success")) {
          setMessage("Ordine effettuato con successo! Riceverai una mail di conferma.");
          store.dispatch(clearCart())
        }
    
        if (query.get("canceled")) {
          setMessage(
            "Ordine cancellato -- continua il tuo shopping e ritorna al pagamento quando sei pronto."
          );
        }
      }, []);
    return {
        message, closeMessage
    }
}

export const Message = ({ message, closeMessage }) => (
    <section className="message-box">
        <div onClick={closeMessage} className="message-close"><IoCloseOutline style={{fontSize: 20}} /></div>
        <div className="message-script">{message}</div>
    </section>
);