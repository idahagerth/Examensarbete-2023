import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import LatestNews from "./Pages/LatestNews";
import Footer from "./Components/Footer";

function App() {
  const [articles, setArticles] = useState([]);
  const [newArticles, setNewArticles] = useState([]);
  const [isMobile, setIsMobile] = useState(false);



  function api() {
    axios
      .get(
        "https://www.reddit.com/r/UpliftingNews.json?listing=best&limit=50&timeframe=week"
      )
      .then((res) => {
        setArticles(res.data.data.children);
      });
  }

  function Latest() {
    axios
      .get("http://www.reddit.com/r/UpliftingNews/new.json?sort=new&limit=4")
      .then((res) => {
        setNewArticles(res.data.data.children);
      });
  }

  useEffect(() => {
    api();
    Latest();
  }, []);

  let num = 6;
  const [array, setArray] = useState([]);

  useEffect(() => {}, [articles]);


  useEffect(() => {
    return window.addEventListener("resize", () => {
      window.outerWidth < 425 ? setIsMobile(true) : setIsMobile(false);
    });
  }, []);

  useEffect(() => {
    return window.outerWidth < 425 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar isMobile={isMobile} />

        <Routes>
          <Route path="/" element={<Home articles={articles} isMobile={isMobile} />} />
          <Route
            path="/latest"
            element={<LatestNews newArticles={newArticles} isMobile={isMobile} />}
          />
        </Routes>
        <Footer isMobile={isMobile}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
