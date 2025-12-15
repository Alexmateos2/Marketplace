import React from 'react'
import { useParams } from 'react-router-dom';
import ProductsPage from '../../Products/layout/ProductsLayout';

const BusquedaPage = () => {
  //Filtrado con mas de 4 coincidencias de productos
  const { search } = useParams();

  return (
    <>

      <ProductsPage search={search} />
    </>
  );
};

export default BusquedaPage;