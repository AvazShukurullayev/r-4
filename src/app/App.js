import React from "react"
import UseStateHook from "../hooks/UseStateHook";
import UseEffectHook from "../hooks/UseEffectHook";
import UseRefHook from "../hooks/UseRefHook";
import Practice from "../practice/Practice";

export default class App extends React.Component {
    render() {
        return (
            <div className={"app"}>
                <h4 className={"text-danger bg-dark py-3 mb-3 text-center"}>useState counter project</h4>
                <UseStateHook/>
                <h4 className={"text-danger bg-dark py-3 my-3 text-center"}>useEffect project</h4>
                <UseEffectHook/>
                <h4 className={"text-danger bg-dark py-3 my-3 text-center"}>useRef project</h4>
                <UseRefHook/>
                <h4 className={"text-danger bg-dark py-3 my-3 text-center"}>useState Recharging project</h4>
                <Practice/>
            </div>
        );
    }
}