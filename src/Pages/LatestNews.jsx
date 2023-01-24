import { motion } from "framer-motion";
import { BsLink45Deg } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function LatestNews({ newArticles, isMobile }) {
  return (
    <div style={{ backgroundColor: "#a4ac86", height: isMobile ? "230vh" : "130vh" }}>
      <motion.div
        initial={{ x: "+100%", opacity: 0 }}
        animate={{ x: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeIn",
          type: "spring",
        }}
      >
        <h1 className="h1">Latest Good News</h1>
      </motion.div>
      <motion.div
        initial={{ x: "+100%", opacity: 0 }}
        animate={{ x: 1, opacity: 1 }}
        transition={{
          duration: 5,
          ease: "easeIn",
          type: "spring",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: isMobile ? "340px" : "80%",
              paddingTop: "9%",
            }}
          >
            <Row xs={1} md={4} className="g-4">
              {newArticles.map((item, index) => {
                let timeStamp = item.data.created_utc;
                let date = new Date(timeStamp * 1000);
                return (
                  <Col key={index}>
                    <Card
                      style={{
                        border: "none",
                        backgroundColor: "#a4ac86",
                        width: isMobile ? "340px" : "250px",
                      }}
                    >
                      <div>
                      <Card.Img  style={{width: isMobile ? "50%" : null}} variant="top" src={item.data.thumbnail} />
                      </div>
                      <Card.Body>
                        <div style={{ width: "100%" }}>
                          <p
                            style={{
                              fontFamily: "Kaisei Opti', serif",
                              fontSize: "25px",
                              textAlign: "left",
                              color: "#f4f3ee",
                            }}
                          >
                            {'"' + item.data.title + '"'}
                            <a
                              target="_blank"
                              style={{ paddingLeft: "5px" }}
                              href={item.data.url_overridden_by_dest}
                            >
                              {<BsLink45Deg size={20} color="#f4e285" />}
                            </a>
                            <span
                              style={{
                                display: "inline-reverse",
                                paddingLeft: "5px",
                                fontSize: "15px",
                                color: "#333d29",
                              }}
                            >
                              {date.toLocaleTimeString("sv-SE")}
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default LatestNews;
