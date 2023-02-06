import React from "react";

export default props => {
    const  {min,max} = props
    const randomInt = Math.floor(Math.random() * (max - min) + min);
    return (
            <div>Número aleatório foi: <strong>{randomInt}</strong></div>
       
    )
}
