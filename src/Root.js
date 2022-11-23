import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ScrollTop } from "./components/elements/Scroll";

export function Root(){
    return (
        <BrowserRouter>
            <ScrollTop />
            <App />
        </BrowserRouter>
    )
}