import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Images from "./Images";
import Pagination from "./Pagination";
import loadings from "../images/loading.gif"
export default function Home() {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState();
    const location = useLocation();

    useEffect(() => {
        const search = location.search;
        const cat = new URLSearchParams(search).get("category");
        const pageNo = new URLSearchParams(search).get("page") || 1;
        let check = [{ category: "nature", name: "nature_1", url: "http://localhost:8888/static/images/nature/nature_1.jpeg" },
        { category: "nature", name: "nature_2", url: "http://localhost:8888/static/images/nature/nature_2.jpeg" },
        { category: "nature", name: "nature_3", url: "http://localhost:8888/static/images/nature/nature_3.jpeg" }]
        setPage(pageNo)
        setCategory(cat)
        setData(check)
    }, [location.search]);



    return data.length > 0 ? (
        <>
            <div className="container">
                <div id={category + '-images'} className="row row-cols-3">
                    {data.map((image, index) =>
                        <Images key={index} name={image.name} url={image.url} />
                    )}
                </div>
            </div>
            <Pagination category={category} page={page} />
        </>
    ) : (<center><img src={loadings} alt="loading..." /></center>)
}
