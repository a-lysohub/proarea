import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBTGs7NF-m9nKsFnfDfbuNaReligMT8Q0w",
    authDomain: "proarea-testtask.firebaseapp.com",
    databaseURL: "https://proarea-testtask-default-rtdb.firebaseio.com",
    projectId: "proarea-testtask",
    storageBucket: "proarea-testtask.appspot.com",
    messagingSenderId: "675443557430",
    appId: "1:675443557430:web:c94fe5baaa34b222054497",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
