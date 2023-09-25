import React, { useState } from "react";
import axios from "axios";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [gender, setGender] = useState("");
  const [text, setText] = useState("");
  const handleclick = async () => {
    const obj = {
      name,
      email,
      password: pass,
      gender,
    };
    const ans = await axios.post(
      "https://shiny-fox-top-hat.cyclic.cloud/users/register",
      obj
    );
    console.log(ans);
    setText(ans.data.msg);

    console.log(obj);
  };

  return (
    <div>
      <p>{text}</p>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <select
        name="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button type="submit" onClick={handleclick}>
        submit
      </button>
    </div>
  );
};

export default Signup;
