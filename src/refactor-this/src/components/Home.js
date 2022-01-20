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
        setPage(pageNo)
        setCategory(cat)
        findImages(cat, pageNo);
    }, [location.search]);

    const findImages = async (categoryName, pageNo) => {
        let urls = [`http://localhost:8888/images?category=${categoryName}${(pageNo !== '') ? '&page=' + (Number(pageNo * 3) - 2) : ''}`,
        `http://localhost:8888/images?category=${categoryName}${(pageNo !== '') ? '&page=' + (Number(pageNo * 3) - 1) : ''}`,
        `http://localhost:8888/images?category=${categoryName}${(pageNo !== '') ? '&page=' + (Number(pageNo * 3)) : ''}`]

        Promise.all(
            urls.map(url =>
                fetch(url)
                    .then(res => res.json())
            )
        ).then(result => {
            setData([].concat(...result))
        });
    }

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
