import { useCallback, useEffect, useState } from 'react';
import { Category, IProduct, categoriesTitle, getProductsByCategory } from '../fakeStoreApi/fakeStoreApi';
import { Link, useParams } from 'react-router-dom';
import '../stylesheets/Products.css';
import { useDispatch } from 'react-redux';
import { addCart } from '../modules/cart';
import { Action } from 'redux';

const Products = () => {

    const { categoryId } = useParams();

    const [products, setProducts] = useState<IProduct[]>([]);

    const setProductsByCategory = useCallback(async() => {
        setProducts(await getProductsByCategory(categoryId as Category)); 
    }, [categoryId]);

    useEffect(() => {
        setProductsByCategory();
    }, [setProductsByCategory]);

    const dispatch = useDispatch();

    const onAdd = (id: number) => dispatch(addCart({id: id}) as Action);

    const handleOnAdd = (id: number) => {
        onAdd(id);
    }

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
                    <div className='product' key={product.id}>
                        <Link className='product-image-div' to={'../product/' + product.id}>
                            <img alt={product.title} src={product.image}></img>
                            <p className='name'>{product.title}</p>
                        </Link>
                        <div className='product-inner-div'>
                            <button className='cart' onClick={() => handleOnAdd(Number(product?.id))}>장바구니에 담기</button>
                            <p className='price'>$ {product.price}</p>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Products;