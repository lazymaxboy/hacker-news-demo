import { useEffect, useState } from "react";
import { getNews } from "./services/news.services";

export const useGetNews = () => {
    const [hits, setHits] = useState([]);
    const [query, setQuery] = useState("React");
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getNews({ query, page }).then(({ hits, nbPages }) => {
            setTotalPage(nbPages);
            setHits(hits);
            setLoading(false);
        });
    }, [query, page, getNews]);

    const nextPage = () => setPage(page + 1);

    const prevPage = () => {
        if (page === 0) return;
        else setPage(page - 1);
    };

    return { hits, page, totalPage, nextPage, prevPage, loading };
};
