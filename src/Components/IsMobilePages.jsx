import { HiArrowUturnRight, HiArrowUturnLeft } from "react-icons/hi2";

function IsMobilePages({ page, setPage }) {
  return (
    <div style={{ marginTop: "200px" }}>
      <a
        style={{ float: "right", paddingLeft: "170px" }}
        href="#"
        onClick={() => {
          page === 9 ? setPage(9) : setPage(page + 1);
        }}
      >
        <HiArrowUturnRight size={50} color="#f4e285" />
      </a>
      <a
        style={{ float: "left", paddingRight: "50px" }}
        href="#"
        onClick={() => {
          page === 1 ? setPage(1) : setPage(page - 1);
        }}
      >
        <HiArrowUturnLeft size={50} color="#f4e285" />
      </a>
    </div>
  );
}

export default IsMobilePages;
