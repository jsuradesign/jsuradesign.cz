import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {NotFound} from "./pages/NotFound";

export class App extends React.Component {

    render():JSX.Element {
        return (
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home name="sdfbtr" />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        );
    }
}
