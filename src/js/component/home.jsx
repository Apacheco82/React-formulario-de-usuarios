import React, {useState} from "react";

//components
import Form from "./form.jsx";
import Users from "./users.jsx";

const Home = () => {

  const [state, setState] = useState([]); //crea un array para meter los usuarios
  const handleSubmit = (newUser) => { //recibe los datos de usuario desde el form 
    setState([...state, newUser]); //añade los datos al array de state haciendo una copia "..."
  };

  return (
    <div className="content-home">
      <div className="content-form">
        <Form handleSubmit={handleSubmit /* llama a la funcion handleSubmit en el form*/ } /> 
      </div>
      <div className="content-users">
		{state.map((user, index)=> <Users key={index} user={user} />)/* se mapea el array de usuarios con una key(index) y el usuario se le pasa como prop*/} 
	  </div>
    </div>
  );
};

export default Home;
