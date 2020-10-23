import React, {useContext, useEffect} from "react";
import { VentasContext, VentasProvider } from '../context/VentasContext';
import { ApolloClient } from 'apollo-client';
import { HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloLink, concat } from 'apollo-link';

import ContenedorCategorias from './categorias/ContenedorCategorias'
import ContenedorProductos from './productos/ContenedorProductos'

const httpLink = new HttpLink({ uri: '/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').getAttribute('content'),
    },
  });
  return forward(operation);
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache,
  resolvers: {}
})

cache.writeData({
  data: {
    categoria: ''
  }
});

client.onResetStore(() => cache.writeData({
  data: {
    categoria: ''
  }
}));

function ContenedorVentas({usuario}) {
  
  return (
    <VentasProvider usuario={usuario}>
      <ApolloProvider client={client}>
      
        <div className="row">
          <div className="col-12">
            <ContenedorCategorias />
          </div>
        </div>

        <div className="row mt-4 white">
          <div className="col-12">
            <ContenedorProductos />
          </div>
        </div>

      </ApolloProvider>
    </VentasProvider>
  )
}

export default ContenedorVentas;