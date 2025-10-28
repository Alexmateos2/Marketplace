import React from 'react'
import { useParams } from 'react-router-dom';
import ProductsPage from '../../Products/layout/ProductsLayout';

const BusquedaPage = () => {

  const {search} = useParams();

  return (
    <>

      <ProductsPage search={search} />
    </>
  );
};

export default BusquedaPage;