import React, {useEffect, useState} from 'react';

const UseEffectHook = () => {
    const [country, setCountry] = useState("Tashkent")

    /* // componentDidMount
     useEffect(() => {
         console.log("componentDidMount")
     }, [])

     // componentDidUpdate
     useEffect(() => {
         console.log("componentDidUpdate => ", country)
     }, [country])

     // componentWillUnmount
     useEffect(() => {
         console.log("componentWillUnmount")

         return () => console.log("delete")
     }, [])*/

    useEffect(() => {
        console.log("componentDidMount")
        console.log("componentDidUpdate => ", country)
        return () => console.log("componentWillUnmount")
    }, [country]);

    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-6">
                    <div className="card text-center">
                        <div className="card-header">
                            <h3>Choose your country</h3>
                        </div>
                        <div className="card-body"><h1>{country}</h1></div>
                        <div className="card-footer">
                            <div className="btn-group">
                                <button className={"btn btn-sm btn-info"}
                                        onClick={() => setCountry("Tashkent")}>
                                    Uzbekistan
                                </button>
                                <button className={"btn btn-sm btn-warning"}
                                        onClick={() => setCountry("Washington")}>
                                    USA
                                </button>
                                <button className={"btn btn-sm btn-primary"}
                                        onClick={() => setCountry("Moscow")}>
                                    Russia
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UseEffectHook;