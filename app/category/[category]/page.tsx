import ProductsGrid from '@/app/components/ProductsGrid';
import React, { useEffect } from 'react'

const CategoryPage = async ({ params }: { params: { category: string } }) => {
    const res = await fetch("http://localhost:3000/api/products");
    const products = await res.json();
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
