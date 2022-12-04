import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ScrollTop } from "./components/elements/Scroll";
import i18n from './i18n'

export function Root(){
    return (
        <BrowserRouter>
            <ScrollTop />
            <App />
        </BrowserRouter>
    )
}