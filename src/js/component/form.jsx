import React, {useState} from "react";

const initialState = { //se crea aquí el objeto vacío porque solo lo vamos a usar en form
  nombre: "",
  apellido: "",
  edad: "",
  puesto: "",
};

const Form = ({handleSubmit}) => { //se le pasa handleSubmit commo prop para poderlo usar en home
  const [user, setUser] = useState(initialState); //se usa useState del objeto initialState para crear un usuario vacío

  const handleChange = (e) => { 
    const value = e.target.value //se obtiene el valor del input
    const name = e.target.name //se obtiene el nombre del campo del input
    setUser({...user, [name]: value}) //se añade el valor al campo de nombre de input haciendo una copia del objeto
  };
  const sendData = (e) => {
    e.preventDefault()
    handleSubmit(user) //se usa desde home la funcion handleSubmit que envía el usuario completo
    setUser(initialState) //se vacía de nuevo el objeto
  };

  return (
    <form onChange={handleChange /* funcion que recoge los cambios en el input */} onSubmit={sendData /* se envian los datos */}>
      <p>Add new user</p>
      <input name="nombre" type="text" value={user.nombre/* se recoge la key nombre del obj user */} />
      <input name="apellido" type="text" value={user.apellido} />
      <input name="edad" type="number" value={user.edad} />
      <input name="puesto" type="text" value={user.puesto} />
      <input className="btn btn-success" type="submit" value="Save" />
    </form>
  );
};

export default Form
