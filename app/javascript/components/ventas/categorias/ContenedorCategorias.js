import React, { useState, useContext } from "react";
import { VentasContext } from '../../context/VentasContext';
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';
/* import { useApolloClient } from "@apollo/react-hooks"; */
// componentes
/* import BuscadorCompania from '../buscador_compania/BuscadorCompania'; */

// diseños
import Slider from "react-slick";


// import { VariableSizeList as List } from "react-window";
// import AutoSizer from "react-virtualized-auto-sizer";


export default function ContenedorCategorias() {
  const { state, dispatch } = useContext(VentasContext);
  
  const GET_CATEGORIES = gql`
    {
      categories(user: "${state.usuario}") {
        id
        nombre
        descripcion
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_CATEGORIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const settings = {
    infinite: false,
    className: "slider center variable-width",
    variableWidth: true,
    slidesToShow: 1,    
  }

  const asignCategory = (nombre) => {
    client.writeData({data: {categoria: nombre }})
  }

  return (
    <div>
      <Slider {...settings}>
        {data.categories.map(category => (
          <div key={category.id} className="indigo white-text text-center">
            <button onClick={() => asignCategory(category.nombre)} className="btn btn-sm btn-block btn-blue">{category.nombre}</button>
          </div>
        ))}
      </Slider>
    </div>
  )
} 