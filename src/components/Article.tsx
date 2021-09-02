import { AtrticleType } from '../App'
import "./Article.css"

type PropsType ={
    article : AtrticleType
}

export const Article = (props: PropsType) => {
    return (
        <div className="Article">
            <h2 className="Title">{props.article.title}</h2>
            <img alt="" className="ArticleImg" src={props.article.urlToImage}></img>
            <p className="Content">     {props.article.content}</p>
            <div className="Source">Sourse: {props.article.source.name}</div>
            <div className="Author">Author: {props.article.author}</div>
            <div>Published At: {props.article.publishedAt}</div>
            <a className="Link" href={props.article.url}>Link</a>
        </div>
    )
}
