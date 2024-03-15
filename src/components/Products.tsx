import { useCallback, useEffect, useState } from 'react';
import { Category, IProduct, categoriesTitle, getProductsByCategory } from '../fakeStoreApi/fakeStoreApi';
import { Link, useParams } from 'react-router-dom';

const Products = () => {

    const { categoryId } = useParams();

    const [products, setProducts] = useState<IProduct[]>([]);

    const setProductsByCategory = useCallback(async() => {
        setProducts(await getProductsByCategory(categoryId as Category)); 
    }, [categoryId]);

    useEffect(() => {
        setProductsByCategory();
    }, [setProductsByCategory]);

    return (
        <div>
            <ul className='categories'>
                {Object.entries(categoriesTitle).map(([category, title], idx) => (
                    <li className={(category === categoryId ? 'selected ' : '') + 'category'} key={category}>
                        <Link to={'../products/'+ category}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='products'>
                <p>Showing: {products.length} items</p>
                {products.map((product, idx) => (
                    <li key={product.id}>
                        <img alt={product.title} src={product.image} width='30px'></img>
                        <p>{product.title}</p>
                        <p>$ {product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Products;