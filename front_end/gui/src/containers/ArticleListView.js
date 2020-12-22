import React, { useState, useEffect, Fragment } from 'react';
import Articles from '../components/Article';
import axios from 'axios';

const ArticleList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        function getArticles() {
            axios.get('http://127.0.0.1:8000/api/articles/')
                .then(res => {
                    setArticles(res.data)
                })
        }
        getArticles();
    }, []);

    return (
        <Fragment>
            <Articles data={articles} />
        </Fragment>

    )
}
export default ArticleList;

