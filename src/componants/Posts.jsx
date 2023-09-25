import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const token = localStorage.getItem("token");
  const [data, setDate] = useState([]);
  //   console.log(token);
  const datas = async () => {
    const ans = await axios.get(
      "https://shiny-fox-top-hat.cyclic.cloud/posts",
      {
        headers: { Authorization: token },
      }
    );
    console.log(ans.data);
    setDate(ans.data);
    return ans;
  };
  useEffect(() => {
    datas();
  }, []);
  return (
    <div>
      {data.map((data) => (
        <div style={{ border: "2px solid red" }}>
          <p>title : {data.title}</p>
          <p>body : {data.body}</p>
          <p>device : {data.device}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
