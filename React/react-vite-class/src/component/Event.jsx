import { useState } from "react";

export function Event() {
  function handleClick(name) {
    alert("You Clicked !" + name);
  }
  return (
    <>
      <button
        onClick={() => {
          handleClick("subham");
        }}
      >
        Click Me
      </button>
      <button
        onClick={() => {
          handleClick("deepa");
        }}
      >
        Click Me
      </button>
    </>
  );
}

export function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }
  return (
    <>
      <div>
        <h1>Counter: {count}</h1>

        <button onClick={increase}>Increase</button>

        <button onClick={decrease}>Decrease</button>

        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export function OnchangeEvent() {
  const [name, setName] = useState(" ");

  function handleChange(event) {
    setName(event.target.value);
    // event.target.value gets the current input value.
  }

  return (
    <>
      <div>
        <h1>Enter Your Name</h1>

        <input
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
        />

        <h2>Hello {name}</h2>
      </div>
    </>
  );
}

export function OnSubmitEvent() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {

    event.preventDefault();

    alert(`"Email:", ${mail},  "Password:", ${password} "Login Form Submitted!" ` );
  }

  return (
    <>
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          required
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </>
  );
}

export function OnMouseOverEvent(){
  const [color, setColor] = useState("blue");
  return(<>
    <hr/>
    <button style={{backgroundColor: color, color: "white", marginTop: "20px", padding: "20px"}} 
      onMouseOver={()=>{setColor("green")}}
      onMouseOut={()=>{setColor("orange")}}
      > 
        Over ME 
    </button>
  </>);
}
