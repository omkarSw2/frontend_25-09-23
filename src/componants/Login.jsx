import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [text, setText] = useState("");

  const handleclick = async () => {
    const obj = { email, password: pass };
    console.log(obj);
    const ans = await axios.post(
      "https://shiny-fox-top-hat.cyclic.cloud/users/login",
      obj
    );
    console.log(ans);

    setText(ans.data.msg);
    const token = ans.data.token;
    localStorage.setItem("token", token);
  };
  return (
    <div>
      <p>{text}</p>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button type="submit" onClick={handleclick}>
        submit
      </button>
    </div>
  );
};

export default Login;
