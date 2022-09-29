import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
    const params = useParams(); // get url params
    const [article, setArticle] = useState({}); // object
    const [loading, setLoading] = useState(true); // boolean
    const [notFound, setNotFound] = useState(false); // boolean


    useEffect(function() {
        
        async function getArticle() {
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);

            // if request is not found, set true notFound
            if (!request.ok) {
                return setNotFound(true);
            }

            // get data json
            const response = await request.json();

            document.title = response.title;
            setArticle(response);
            setLoading(false);
        }
        getArticle();
    }, [params]);

    // if article not found, return text
    if (notFound) {
        return <h1>404 Article is not found.</h1>
    }

    return (
        <section className="section">
            {loading ? (
                <i>Loading Article ...</i>
            ) : (
            <article className="article">
                <h1 className="article-title">
                    {article.title}
                </h1>
                <time className="article-time">
                    {new Date(article.publishedAt).toLocaleDateString()}
                </time>
                <img src={article.imageUrl} alt={article.title} className="article-image" />
                <p className="article-summary">
                    {article.summary}
                </p>
                <p className="article-source">
                    Source : <a href={article.url} target="_blank" rel="noreferrer">{article.newsSite}</a>
                </p>
                </article>
            )}
        </section>
    );
}