import React from "react";

const Dog = ({ name, age, src, facts }) => {
    return (
        <div className={name}>
            <h1> Name: { name }</h1>
            <img src={src} height="250" width="450" />
            <h2> Age: { age } </h2>
            <div>
                {facts.map((fact, index) => <p>Fact {index + 1}: {fact}</p>)}
            </div>
        </div>
    )
}

export default Dog