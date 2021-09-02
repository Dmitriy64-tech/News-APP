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
const [APIkey, setAPIkey] = useState('2bec922d15c94bb3b845024e5e5df4bf')
const [term, setTerm] = useState<string>("")
const [articles, setArticles] = useState<AtrticleType[]>()

  useEffect(() => {
    if (term)
    {
      axios.get(`https://newsapi.org/v2/everything?q=${term}&apiKey=${APIkey}`)
        .then(res => setArticles(res.data.articles))
    }
    else{
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIkey}`)
      .then(res => setArticles(res.data.articles))
    }
    
    
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
