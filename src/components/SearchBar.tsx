import React from 'react'
import axios from 'axios'



export const SearchBar = (props: any) => {
    const Get = (term:string) =>{
        axios.get(`https://newsapi.org/v2/everything?q=${term}&apiKey=2bec922d15c94bb3b845024e5e5df4bf`)
        .then(res => props.setArticles(res.data.articles))
    }

    return (
        <div>
            <div className="SearchBar">
                <input placeholder="search"></input>
                <button onClick={()=>{Get('sex')}}>Search</button>
            </div>
        </div>
    )
}
