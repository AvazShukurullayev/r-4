import React from "react"
import UseStateHook from "../hooks/UseStateHook";
import UseEffectHook from "../hooks/UseEffectHook";

export default class App extends React.Component {
    render() {
        return (
            <div className={"app"}>
                <h4 className={"text-danger bg-dark py-3 mb-3 text-center"}>useState counter project</h4>
                <UseStateHook/>
                <h4 className={"text-danger bg-dark py-3 mb-3 text-center"}>useEffect project</h4>
                <UseEffectHook />
            </div>
        );
    }
}