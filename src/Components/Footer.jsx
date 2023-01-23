function Footer({ isMobile }) {
  return (
    <div style={{ backgroundColor: "#f4f3ee", paddingBottom: "10px" }}>
      <h2
        style={{
          fontSize: "15px",
          fontWeight: "bolder",
          paddingTop: "15px",
          paddingLeft: isMobile ? "5%" : "85%",
          fontFamily: "Open Sans', sans-serif",
        }}
      >
        Made By Ida Hägerth
      </h2>
    </div>
  );
}

export default Footer;
