import React from 'react'


export const Header = (props) => {
    return (
        <div>            
            <h1>My Reasonably Super Cool Component!</h1>
            <h2>{props.myExtraStuff}</h2>
            <h3>{props.SomeOtherCrap}</h3>
        </div>
    )
}
