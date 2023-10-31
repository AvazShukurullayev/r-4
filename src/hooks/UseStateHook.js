import React, {useState} from 'react';

const UseStateHook = () => {
    const [count, setCount] = useState(0)
    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-6 text-center">
                    <div className="card">
                        <div className="card-header">
                            <h2>Counter</h2>
                        </div>
                        <div className="card-body">
                            <h1>{count}</h1>
                        </div>
                        <div className="card-footer">
                            <div className="btn-group">
                                <button className={"btn btn-sm btn-danger"}
                                        onClick={() => setCount((prev) => prev - 1)}>Subtract
                                </button>
                                <button className={"btn btn-sm btn-info"} onClick={() => setCount(0)}>Reset</button>
                                <button className={"btn btn-sm btn-success"}
                                        onClick={() => setCount((prev) => prev + 1)}>Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseStateHook;