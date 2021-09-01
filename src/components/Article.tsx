import { AtrticleType } from '../App'
import "./Article.css"

type PropsType ={
    article : AtrticleType
}

export const Article = (props: PropsType) => {
    return (
        <div className="Article">
            <h2>{props.article.title}</h2>
            <img alt="" className="ArticleImg" src={props.article.urlToImage}></img>
            <p className="Content">{props.article.content}</p>
            <div>Sourse: {props.article.source.name}</div>
            <div>Author: {props.article.author}</div>
            <a href={props.article.url}>Link</a>
        </div>
    )
}
