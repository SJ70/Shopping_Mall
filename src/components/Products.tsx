import { useCallback, useEffect, useState } from 'react';
import { Category, IProduct, categoriesTitle, getProductsByCategory } from '../fakeStoreApi/fakeStoreApi';
import { Link, useParams } from 'react-router-dom';
import '../stylesheets/Products.css';

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
            <p className='title'>Products</p>
            <ul className='categories'>
                {Object.entries(categoriesTitle).map(([category, title], idx) => (
                    <li className={(category === categoryId ? 'selected ' : '') + 'category'} key={category}>
                        <Link to={'../products/' + category}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
            <p className='products-count'>Showing: {products.length} items</p>
            <ul className='products'>
                {products.map((product, idx) => (
                    <Link to={'../product/' + product.id} className='product' key={product.id}>
                        <img alt={product.title} src={product.image}></img>
                        <p className='name'>{product.title}</p>
                        <div className='product-inner-div'>
                            <button className='cart'>장바구니에 담기</button>
                            <p className='price'>$ {product.price}</p>
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default Products;