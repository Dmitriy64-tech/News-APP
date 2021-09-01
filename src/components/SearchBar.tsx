import {useState, useEffect} from 'react'


type PropsType ={
    setTerm: (term:string) => void 
    term: string
}

export const SearchBar = (props: PropsType) => {
    const [tempTerm, setTempTerm] = useState<string>('')

    return (
        <div>
            <div className="SearchBar">
                <input placeholder="search" value={tempTerm} onChange={(e)=>{
                    setTempTerm(e.currentTarget.value)
                }}></input>
                <button onClick={()=>{props.setTerm(tempTerm)}}>Search</button>
            </div>
        </div>
    )
}
