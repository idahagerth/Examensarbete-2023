import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function LatestNews({ newArticles }) {
  return (
    <div style={{ backgroundColor: "#20315a", height: "110vh" }}>
      <motion.div
        initial={{ x: "+100%", opacity: 0 }}
        animate={{ x: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeIn",
          type: "spring",
        }}
      >
        <h1 className="h1">Latest Good News! </h1>
      </motion.div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "80%",
            paddingTop: "9%",
          }}
        >
          <Row xs={1} md={4} className="g-4">
            {newArticles.map((item, index) => {
              let timeStamp = item.data.created_utc;
              let date = new Date(timeStamp * 1000);
              return (
                <Col>
                  <Card
                    style={{
                      border: "none",
                      backgroundColor: "#20315a",
                      width: "250px",
                    }}
                  >
                    <Card.Img variant="top" src={item.data.thumbnail} />
                    <Card.Body>
                      <div style={{ width: "100%" }}>
                        <p
                          style={{
                            fontFamily: "Kaisei Opti', serif",
                            fontSize: "25px",
                            textAlign: "left",
                            color:"#ffffff"
                          }}
                        >
                          {'"'+item.data.title+'"'}
                        </p>

                        <a
                          target="_blank"
                          style={{ paddingLeft: "8px" }}
                          href={item.data.url_overridden_by_dest}
                        >
                          {<FiExternalLink size={25} color="#f4e285" />}
                        </a>

                        <span
                          style={{
                            display: "inline",
                            float: "right",
                            fontSize: "15px",
                            color:"#ffb703"
                          }}
                        >
                          {date.toLocaleTimeString("sv-SE")}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
