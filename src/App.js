import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import LatestNews from "./Pages/LatestNews";
import Footer from "./Components/Footer";

function App() {
  const [articles, setArticles] = useState([]);

  function api() {

    axios
      .get(
        "https://www.reddit.com/r/UpliftingNews.json?listing=best&limit=50&timeframe=week"
      )
      .then((res) => {
        /*for (let i = 0; i < num; i++) {
          setArray((array) => [...array, res.data.data.children[i]]);
          //console.log(articles[i]);
        }*/
        setArticles(res.data.data.children);
      });
  }

  useEffect(() => {
    api();
    
  }, []);

  let num = 6;
  const [array, setArray] = useState([]);

  useEffect(() => {
 
  }, [articles]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home articles={articles} />} />
          <Route path="/latest" element={<LatestNews />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
