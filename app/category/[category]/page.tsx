import ProductsGrid from '@/app/components/ProductsGrid';
import { products } from '@/app/api/products/productsData';

const CategoryPage = ({ params }: { params: { category: string } }) => {
    const filteredProducts = products.filter(
      (product) => product.category === params.category
    );

    return (
      <div>
        <p className='capitalize font-semibold px-4 pt-4 text-sm'>Home {">"} { params.category }</p>
            <ProductsGrid data={filteredProducts} />
      </div>
      
  )
}

export default CategoryPage
