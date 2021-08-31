import './App.css';
import { SearchBar } from './components/SearchBar';
import {useState} from 'react'

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
const [term, setTerm] = useState("")
const [articles, setArticles] = useState<AtrticleType[] | null>(null)


  return (
    <div className="App">
      <SearchBar setArticles={setArticles}/>
      {
        articles?.map((art, index) => <a href={art.url} key={index}>123</a>)
      }
    </div>
  );
}

export default App;
