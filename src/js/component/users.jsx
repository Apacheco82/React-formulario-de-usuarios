import React from "react";

const Users = ({user}) =>{ //recoge desde el home el prop que es el obj user, se hace así porque es un obj anidado

    const {nombre,apellido,edad,puesto} = user // se guardan las propiedades del obj en una const 

    return(
<div className="card card-body">
    <p>Nombre: {nombre /* se llama a las propiedades de la key nombre del obj user */} </p>
    <p>Apellido: {apellido} </p>
    <p>Edad: {edad} </p>
    <p>Puesto: {puesto} </p>
</div>
    )
}

export default Users