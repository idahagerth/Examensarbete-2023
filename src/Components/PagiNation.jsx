import Pagination from "react-bootstrap/Pagination";

function PagiNation({ setPage, page }) {
  return (
    <div>
      <Pagination size="lg">
        <Pagination.First onClick={() => setPage(1)} />
        <Pagination.Prev
          onClick={() => {
            page === 1 ? setPage(1) : setPage(page - 1);
          }}
        />
        <Pagination.Item active={1 === page} key={1} onClick={() => setPage(1)}>
          1
        </Pagination.Item>
        <Pagination.Item active={2 === page} key={2} onClick={() => setPage(2)}>
          2
        </Pagination.Item>
        <Pagination.Item active={3 === page} key={3} onClick={() => setPage(3)}>
          3
        </Pagination.Item>
        <Pagination.Item active={4 === page} key={4} onClick={() => setPage(4)}>
          4
        </Pagination.Item>
        <Pagination.Item active={5 === page} key={5} onClick={() => setPage(5)}>
          5
        </Pagination.Item>
        <Pagination.Item active={6 === page} key={6} onClick={() => setPage(6)}>
          6
        </Pagination.Item>
        <Pagination.Item active={7 === page} key={7} onClick={() => setPage(7)}>
          7
        </Pagination.Item>
        <Pagination.Item active={8 === page} key={8} onClick={() => setPage(8)}>
          8
        </Pagination.Item>
        <Pagination.Item active={9 === page} key={9} onClick={() => setPage(9)}>
          9
        </Pagination.Item>
        <Pagination.Next
          onClick={() => {
            page === 9 ? setPage(9) : setPage(page + 1);
          }}
        />
        <Pagination.Last onClick={() => setPage(9)} />
      </Pagination>
    </div>
  );
}

export default PagiNation;
