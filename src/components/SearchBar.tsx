import { useState } from 'react'
import { CategorySelection } from './CategorySelection'
import './SearchBar.css'


type PropsType = {
    setTerm: (term: string) => void
    term: string
    setCategory: (temp:string) => void
}

export const SearchBar = (props: PropsType) => {
    const [tempTerm, setTempTerm] = useState<string>('')
    const [tempCategory, setTempCategory] = useState<string>('')

    return (
        <>
            <input type='text' className="Search" placeholder="Search" value={tempTerm} onChange={(e) => {
                setTempTerm(e.currentTarget.value)
            }}></input>
                <CategorySelection setTempCategory={setTempCategory}/> 
            <button className="SearchButton" onClick={() => {
                props.setTerm(tempTerm)
                setTempTerm('')
                props.setCategory(tempCategory)
                setTempCategory('')
            }}>Search</button>
        </>
    )
}
