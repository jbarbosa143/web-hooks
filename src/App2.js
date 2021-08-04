import React, { useState } from "react";

function HooksObjectFormat(initialState){
    const [value,setValue] = useState(initialState);

    function onChange(e){
        setValue(e.target.value);
    }

    function clearInput(){
        setValue("");
    }

    return{value,onChange, clearInput }
}

function App2 (){
    const {value : userName, onChange: userNameOnChange, clearInput : clearUserNameInput} = HooksObjectFormat("");
    const {value :email, onChange: emailOnChange, clearInput: clearEmailInput} = HooksObjectFormat("");
    const {value:password, onChange:passwordOnChange, clearInput: clearPasswordInput} = HooksObjectFormat("");

    function handleOnSubmit(e){
        e.preventDefault();
        clearUserNameInput();
        clearPasswordInput();
        clearEmailInput();
    }

    return(
        <div className="App2">
            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder="User Name" value={userName} onChange={userNameOnChange}/>
                <br/>
                <input type="email" placeholder="Email" value={email} onChange={emailOnChange}/>
                <br/>
                <input type="password" placeholder="Password" value={password} onChange={passwordOnChange}/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App2;