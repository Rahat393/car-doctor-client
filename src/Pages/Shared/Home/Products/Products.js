import React from 'react';
import img1 from '../../../../assets/images/products/1.png'
import img2 from '../../../../assets/images/products/2.png'
import img3 from '../../../../assets/images/products/3.png'
import img4 from '../../../../assets/images/products/4.png'
import img5 from '../../../../assets/images/products/5.png'
import img6 from '../../../../assets/images/products/6.png'
import ProductsCard from './ProductsCard';

const Products = () => {
  const products = [
    {
      id: 1,
      image: img1,
      name : 'Car Engine Plug',
      price: '20.00'

    },
    {
      id: 2,
      image: img2,
      name : 'Car Air Filter',
      price: '20.00'

    },
    {
      id: 3,
      image: img3,
      name : 'Cools Led Light',
      price: '20.00'

    },
    {
      id: 4,
      image: img4,
      name : 'Cools Led Light',
      price: '20.00'

    },
    {
      id: 5,
      image: img5,
      name : 'Cools Led Light',
      price: '20.00'

    },
    {
      id: 6,
      image: img6,
      name : 'Cools Led Light',
      price: '20.00'

    },
  ]
  return (
    <div className='mt-16'>
      <h3 className='text-primary text-xl font-bold text-center'>Popular Products</h3>
      <h3 className='  text-5xl font-semibold text-center'>Browse Our Products</h3>
      <h3 className=' text-sm mt-4   text-center'>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </h3>

      <div className='grid   md:grid-cols-2 lg:grid-cols-3'>
      {
        products.map(product => <ProductsCard
        key={product.id}
        product={product}
        ></ProductsCard>)
      }
      </div>
    </div>
  );
};

export default Products;