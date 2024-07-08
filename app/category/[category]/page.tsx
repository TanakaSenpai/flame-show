import ProductsGrid from '@/app/components/ProductsGrid';
import React, { useEffect } from 'react'
import { products } from '@/app/api/products/productsData';

const CategoryPage = ({ params }: { params: { category: string } }) => {
    const filteredProducts = products.filter(
      (product) => product.category === params.category
    );

    return (
      <div>
            <ProductsGrid data={filteredProducts} />
      </div>
      
  )
}

export default CategoryPage
