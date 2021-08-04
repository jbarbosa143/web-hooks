import React, { useState } from 'react';

function HooksArrayFormat(initialState){
    const [value,setValue] = useState(initialState);

    function onChange(e){
        setValue(e.target.value);
    }

    function clearInput(){
        setValue("");
    }

    return [value, onChange , clearInput];
}

function App1(){
    const [userName, userNameOnChange, clearUserNameInput] = HooksArrayFormat("");
    const [email, emailOnChange, clearEmailInput] = HooksArrayFormat("");
    const [password, passwordOnChange, clearPasswordInput] = HooksArrayFormat("");

    function handleOnSubmit(e){
        e.preventDefault();

        clearEmailInput();
        clearPasswordInput();
        clearUserNameInput();
    }

    return(
        <div className="App1">
            <h1>App1</h1>
            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder="User Name" value={userName} onChange={(e) => userNameOnChange(e)}/>
                <br/>
                <input type="email" placeholder="Vaild Email" value={email} onChange={(e) => emailOnChange(e)}/>
                <br/>
                <input type="password" placeholder="password"
                value={password} onChange={(e) => passwordOnChange(e)}/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App1;