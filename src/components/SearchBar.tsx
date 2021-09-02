import { useState } from 'react'
import './SearchBar.css'


type PropsType = {
    setTerm: (term: string) => void
    term: string
}

export const SearchBar = (props: PropsType) => {
    const [tempTerm, setTempTerm] = useState<string>('')

    return (
        <>
            <input type='text' className="Search" placeholder="Search" value={tempTerm} onChange={(e) => {
                setTempTerm(e.currentTarget.value)
            }}></input>
            <button className="SearchButton" onClick={() => {
                props.setTerm(tempTerm)
                setTempTerm('')
            }}>Search</button>
        </>
    )
}
