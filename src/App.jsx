import { useEffect, useState } from "react";
import HitList from "./components/hit-list/HitList";
import { getNews } from "./services/news.services";
import styles from "./App.module.css";
import { useGetNews } from "./useGetNews";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { hits, page, totalPage, nextPage, prevPage, loading } = useGetNews();

  return (
    <div className={styles.container}>
      <h1>
        <b>Search Hacker News</b>
      </h1>
      <br />
      <input type="text" className={styles.search} placeholder="REACT" />
      <div className="mr-center d-flex align-items-center gap-3">
        <button className="btn btn-info text-white" onClick={prevPage}>
          Prev
        </button>
        <strong>
          {page} of {totalPage}
        </strong>
        <button className="btn btn-info text-white" onClick={nextPage}>
          Next
        </button>
      </div>
      <br />
      {loading ? (
        <div className={styles.load}>
            <div className="spinner-border text-success" role="status"></div>
        </div>
      ) : (
        <div>
          <br />
          <HitList hits={hits} />
        </div>
      )}
    </div>
  );
}

export default App;
