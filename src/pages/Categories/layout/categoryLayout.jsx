import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsPage from '../../Products/layout/ProductsLayout.jsx';

const CategoryPage = () => {

  const {category} = useParams();

  return (
    <>

      <ProductsPage category={category} />
    </>
  );
};

export default CategoryPage;
