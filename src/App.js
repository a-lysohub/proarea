import React from "react";
import HomePage from "./components/HomePage";
import MainPage from "./components/MainPage";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

export default function App(props) {
    
    const [isLoggedIn, setLoggedIn] = React.useState(false);
    const [email, setEmail] = React.useState("");

    const handleLogin = (email) => {
        setEmail(email);
        setLoggedIn(true);
    }
    const handleLogOut = () => {
        setEmail("");
        setLoggedIn(false);
    }
    return (
        <BrowserRouter>
            <Route exact path="/">
                {isLoggedIn ? (
                    <Redirect to="/dashboard" />
                ) : (
                    <HomePage onLogIn={handleLogin} />
                )}
            </Route>
            <Route exact path="/dashboard">
                {isLoggedIn ? (
                    <MainPage email={email} onLogOut={handleLogOut} />
                ) : (
                    <Redirect to="/" />
                )}
            </Route>
        </BrowserRouter>
    );
}
