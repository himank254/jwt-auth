import React from 'react';
import axios from 'axios';

const App = () => {
    let name, password

    const submitHandler = (event) => {
        event.preventDefault()
        const userdata = {
            name: name.value,
            password: password.value
        }

        axios.post(`http://localhost:5000/login`, userdata )
            .then(res => {
                alert("Token received in console log")
        console.log(res);
      }).catch(e => 
          console.log(e.response.data.error)
      )
    }


  return (
      <div className = "ui container">
          <form className="ui form" onSubmit={submitHandler}>

                <div className="field">
                    <label>Enter Username</label>
                    <input type = "text" ref = {(input) => name = input} />
                </div>

                <div className="field">
                    <label>Enter Password</label>
                    <input type = "text" ref = {(input) => password = input} />
                </div>

                <button className="ui button" type="submit">Login</button>

            </form>
      </div>
    
  );
};

export default App;
