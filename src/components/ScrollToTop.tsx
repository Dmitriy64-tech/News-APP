import React from 'react'
import './ScrollToTop.css'
export const ScrollToTop = () => {
    return (
        <div >
            <button className ="ScrollToTopBTN" onClick = {(e)=>{
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }}>To Top</button>
        </div>
    )
}
