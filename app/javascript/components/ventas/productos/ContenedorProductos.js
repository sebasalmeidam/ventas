import React, { useState, useContext } from "react";
import { VentasContext } from '../../context/VentasContext';
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';
import { useApolloClient } from "@apollo/react-hooks";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function ContenedorProductos() {
  const { state, dispatch } = useContext(VentasContext);

  const GET_PRODUCTS = gql`
    {
      products(user: "${state.usuario}") {
        id
        nombre
        descripcion
        precio
        imagenesUrl
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (loading) return (
    <div className="row">
      {Array(12).fill().map((item,index) => (
        <div key={index} className="col-4 col-lg-2 px-0 grey lighten-4">
          <div className="card">
            <div className="card-img-top">
              <Skeleton height={100} width={`100%`} />
            </div>
            <div className="card-body white">
              <Skeleton height={80} width={`100%`} />
            </div>
            <div className="rounded-bottom grey lighten-3 text-center pt-3">
              <Skeleton height={20} width={`100%`} />
            </div>
          </div>
        </div>
      ))}      
    </div>
  )
  if (error) { 
    console.log(error) 
    return <p>Error :(</p>;
  }

  return (
    <div className="row">
      {data.products.map(product => {
        
        return (
          <div key={product.id} className="col-4 col-lg-2 px-0 d-flex align-items-stretch">
          <div className="card">
            <img src={product.imagenesUrl[0]} alt={product.nombre} className="card-img-top"/>
            <div className="card-body">
              <p className="card-text">{product.nombre}</p>
            </div>
            <div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
              <ul className="list-unstyled list-inline font-small">
                <li className="list-inline-item pr-2 white-text"><i className="fas fa-dollar-sign pr-1"></i>USD:</li>
                <li className="list-inline-item pr-2"><a href="#" className="white-text">{new Intl.NumberFormat('de-DE', { style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2 }).format(product.precio)}</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}
      )}
    </div>
  )
}
