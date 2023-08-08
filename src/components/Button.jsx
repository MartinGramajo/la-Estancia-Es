import React from 'react'

export default function Button({button, filter}) {
    return (
        <div className="container d-flex justify-content-center">
             {
                button.map((cat, i)=>{
                    return <button type="button" onClick={()=> filter(cat)} className="btn">{cat}</button>
                })
            }
        </div>
    )
}
