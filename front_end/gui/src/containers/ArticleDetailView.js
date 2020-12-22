import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'antd';


const ArticleDetail = (props) => {
    const [article, setArticle] = useState({})

    useEffect(() => {
        const articleID = props.match.params.articleID
        axios.get(`http://127.0.0.1:8000/api/articles/${articleID}/`)
            .then(res => {
                setArticle(res.data)
            })
    }, [props.match.params.articleID]);

    return (
        <Card title={article.title}>
            <p>{article.content}</p>
        </Card>
    )
}
export default ArticleDetail;


/* class ArticleList extends React.Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/articles/')
            .then(res => {
                this.setState({
                    articles: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        return (
            <Articles data={this.state.articles} />
        )
    }
}

export default ArticleList; */