import React, {useState} from 'react';

const Practice = () => {
    const [message, setMessage] = useState(0)
    const [user, setUser] = useState({userName: "John", job: "Frontend dev"})
    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <h1>Messages: {message}</h1>
                        </div>
                        <div className="card-footer">
                            <div className="btn-group">
                                <button className={"btn btn-sm btn-warning"}
                                        onClick={() => setMessage((prev) => prev - 1)}>
                                    Delete
                                </button>
                                <button className={"btn btn-sm btn-primary"}
                                        onClick={() => setMessage((prev) => prev + 1)}>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="card">
                        <div className="card-body">
                            <h1>User: {user.userName} - {user.job}</h1>
                        </div>
                        <div className="card-footer">
                            <div className="btn-group">
                                <button className={"btn btn-sm btn-info"}
                                        onClick={() => setUser((prev) => {
                                            return {
                                                userName: "Doe",
                                                job: "Backend dev"
                                            }
                                        })}>
                                    Change
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Practice;