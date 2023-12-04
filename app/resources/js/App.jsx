import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from "react-redux";
import {store} from "./src/store/index.js";
import './src/assets/scss/style.scss';
import { BrowserRouter } from "react-router-dom";
import {MainPageApp} from "./src/views/MainPageApp.jsx";
export default function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <MainPageApp/>
                </BrowserRouter>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </Provider>
        </>
    );
}

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
