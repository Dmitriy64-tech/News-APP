import React from 'react'

type PropsType =
{
    setTempCategory: (temp:string) => void
}

export const CategorySelection = (props: PropsType) => {
    return (
        <>
            <input type='text' className="CategorySelection" list="categories" onChange={(e) => {
               props.setTempCategory(e.currentTarget.value)
            }}></input>
            <datalist id="categories">
                <option value="business"></option>
                <option value="entertainment"></option>
                <option value="general"></option>
                <option value="science"></option>
                <option value="sports"></option>
                <option value="technology"></option>
            </datalist>
        </>
    )
}
