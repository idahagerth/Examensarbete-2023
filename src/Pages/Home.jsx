import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { FiExternalLink } from "react-icons/fi";
import PagiNation from "../Components/PagiNation";
import { motion } from "framer-motion";
import IsMobilePages from "../Components/IsMobilePages";

function Home({ isMobile, articles }) {
  const [page, setPage] = useState(1);
  const [showingArticles, setShowingArticles] = useState([]);
  const [startNumb, setStartNumb] = useState(1);

  function paginate(array, page_size, page_number) {
    setStartNumb(page_number === 1 ? 1 : page_number * 6 - 5);

    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  useEffect(() => {
    setShowingArticles(paginate(articles, 6, page));
  }, [page, articles]);

  return (
    <div
      style={{
        backgroundImage: "url('img/hej.gif')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: isMobile ? "top 30px left 60px" : "center top",
        backgroundSize: isMobile ? "70% auto" : "40% auto",
        height: isMobile ? "240vh" : "170vh",
      }}
    >
      <motion.div
        initial={{ x: "+100%", opacity: 0 }}
        animate={{ x: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeIn",
          type: "spring",
        }}
      >
        <h1 style={{ fontSize: isMobile ? "25px" : null }} className="h1">
          Good News Around The World
        </h1>
      </motion.div>

      <motion.div
        initial={{ x: "+100%", opacity: 0 }}
        animate={{ x: 1, opacity: 1 }}
        transition={{
          duration: 5,
          ease: "easeIn",
          type: "spring",
        }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          paddingTop: isMobile ? "35%" : "19%",
          marginBottom: "auto",
        }}
      >
        {showingArticles.map((item, index) => {
          let timeStamp = item.data.created_utc;
          let date = new Date(timeStamp * 1000);

          return (
            <div
              key={index}
              style={{
                flexBasis: isMobile ? "100%" : "30%",
                height: isMobile ? "250px" : "390px",
              }}
            >
              <Card
                style={{
                  backgroundColor: "#20315a",
                  border: "none",
                  color: "#f4f3ee",
                }}
              >
                <Card.Body>
                  <Card.Text
                    style={{
                      fontFamily: "DM Serif Display, serif",
                      fontSize: "170%",
                      fontStyle: "italic",
                      textAlign: "left",
                    }}
                  >
                    <p>
                      <span style={{ color: "#f4e285", fontSize: "40px" }}>
                        {startNumb + index + " . "}
                      </span>
                      {'"' + item.data.title + '"'}
                      <a
                        target="_blank"
                        style={{ float: "right" }}
                        href={item.data.url_overridden_by_dest}
                      >
                        {<FiExternalLink size={25} color="#f4e285" />}
                      </a>
                    </p>
                    <p
                      style={{
                        color: "#ffd972",
                        fontSize: "17px",
                        float: "right",
                      }}
                    >
                      {date.toLocaleDateString("en-GB")}
                    </p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer
                  style={{ backgroundColor: "#20315a", border: "none" }}
                ></Card.Footer>
              </Card>
            </div>
          );
        })}
      </motion.div>
      <div
        style={{
          position: "absolute",
          top: isMobile ? "228vh" : "168vh",
          paddingLeft:isMobile ? "8%": "23%"
        }}
      >
        {isMobile ? (
          <IsMobilePages setPage={setPage} page={page} />
        ) : (
          <PagiNation setPage={setPage} page={page} />
        )}
      </div>
    </div>
  );
}

export default Home;
