import './App.css';
import './components/SearchBar.css'
import axios from 'axios'
import { SearchBar } from './components/SearchBar';
import {useState, useEffect} from 'react'
import { Article } from './components/Article';

type SourceType={
  id: string
  name: string
}
export type AtrticleType ={
  source: SourceType
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}


const App = () => {
const [term, setTerm] = useState<string>("")
const [articles, setArticles] = useState<AtrticleType[]>()

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=${term}&apiKey=2bec922d15c94bb3b845024e5e5df4bf`)
        .then(res => setArticles(res.data.articles))
    
  },[term])

  return (
    <div className="App">
      <div className="SearchBar"><SearchBar setTerm={setTerm} term={term}/></div>
      
      {
        articles?.map((art, index) => <div key={index} className='ArticleWrapper'><Article article={art}/></div>)
      }
    </div>
  );
}

export default App;
