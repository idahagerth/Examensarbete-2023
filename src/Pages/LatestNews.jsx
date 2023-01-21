import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";


function LatestNews({ newArticles }) {
  return (
    <div style={{ backgroundColor: "#f4f3ee", height: "110vh" }}>
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

      <div style={{display:"flex",flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center"}}>
      {newArticles.map((item, index) => {
        let timeStamp = item.data.created_utc;
        let date = new Date(timeStamp * 1000);
        return (

          <div>
            <p
              style={{
                fontFamily: "DM Serif Display, serif",
                fontSize: "170%",
                fontStyle: "italic",
                textAlign: "left",
              }}
            >
            {index +1 +" . "}
              {item.data.title}
            </p>
            <p>{date.toLocaleDateString("en-GB")}</p>
            <p>{date.toLocaleTimeString("sv-SE")}</p>
            <a
              target="_blank"
              style={{ float: "right" }}
              href={item.data.url_overridden_by_dest}
            >
              {<FiExternalLink size={25} color="#f4e285" />}
            </a>
            
          </div>
          
        );
      })}
      </div>
    </div>
  );
}

export default LatestNews;
