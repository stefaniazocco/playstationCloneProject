import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ScrollTop } from "./components/elements/Scroll";
import { store } from "./redux/store";

export function Root(){
    
    return (
        <BrowserRouter>
            <ScrollTop />
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    )
}