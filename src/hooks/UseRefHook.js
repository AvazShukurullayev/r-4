import React, {useEffect, useRef} from 'react';

const UseRefHook = () => {
    const usernameRef = useRef(null)
    useEffect(() => {
        usernameRef.current.focus()
    }, []);
    return (
        <div className={"container"}>
            <div className="row">
                <div className="co-6">
                    <form action="">
                        <div>
                            <label htmlFor="username" className={"form-label"}>User name:</label>
                            <input type="text" name="username" className={"form-control"} id="username" placeholder={"John"} ref={usernameRef}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UseRefHook;