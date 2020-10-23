import React, { useReducer } from 'react';

let reducer = (state, action) => {
  switch (action.type) {
    case "actualizarUsuario":
      return { ...state, usuario: action.payload };
    // actualizar Año
    default:
      return;
  }
};

const initialState = (usuario) => (
  {
    categoria: "",
    usuario: usuario
  }
)

const VentasContext = React.createContext(initialState);

function VentasProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState(props.usuario));

  return (
    <VentasContext.Provider value={{ state, dispatch }}>
      {props.children}
    </VentasContext.Provider>
  );
}
export { VentasContext, VentasProvider };