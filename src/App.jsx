import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "./axios"

function App() {
  //my application load first time wrok or not thats why we r using useEffect.
  //passing state
  const [myData, setMyData] = useState([]);
  const [myError, setMyError] = useState(false);

  ///note:- using promises
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setMyData(res.data))
  //     .catch((err)=> setMyError(err.message))
  // },[]);

  //note:- using async and await
  const getApiData = async () => {
    try {
      const res = await axios.get("/posts");
      setMyData(res.data);
    } catch (error) {
      setMyError(error.message);
    }
  };
  useEffect(() => {
    getApiData();
  });

  return (
    <>
      <h1>Axios Practice</h1>
      {myError !== "" && <h3>{myError}</h3>}
      <div className="grid">
        {myData.map((post) => {
          const { id, title, body } = post;
          return (
            <div className="card" key={id}>
              <h3>{title.slice(0, 18).toUpperCase()}</h3>
              <p>{body.slice(0, 150)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
