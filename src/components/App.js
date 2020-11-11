import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends React.Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
        <ol key={"relativeList"} >
            <li key={"relativeList1"}>Sunil Salunkhe</li>
            <li key={"relativeList2"}>Kisan Sathe</li>
            <li key={"relativeList3"}>Kundalik Bhosale</li>
            <li key={"relativeList4"}>Moahn Patil</li>
        </ol>
            </div>
        )
    }
}


export default App;
