import React from 'react'
import { AtrticleType } from '../App'

type PropsType ={
    article : AtrticleType
}

export const Article = (props: PropsType) => {
    return (
        <div>
            <h2>Title</h2>
            <img src="">Image</img>
            <div>Description</div>
            <div>Content</div>
            <div>Source</div>
            <div>Author</div>
            <a href="">Url</a>

        </div>
    )
}
