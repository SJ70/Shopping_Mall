import { Link, useParams } from 'react-router-dom';
import { IProduct, getProductById } from '../fakeStoreApi/fakeStoreApi';
import { useCallback, useEffect, useState } from 'react';
import '../stylesheets/Product.css';
import { useDispatch } from 'react-redux';
import { Action } from 'redux';
import { addCart } from '../modules/cart';

const Product = () => {
    
    const { productId } = useParams();

    const [product, setProduct] = useState<IProduct>();

    const setProductById = useCallback(async() => {
        setProduct(await getProductById(Number(productId))); 
    }, [productId]);

    useEffect(() => {
        setProductById();
    }, [setProductById])

    const dispatch = useDispatch();

    const onAdd = (id: number) => dispatch(addCart({id: id}) as Action);

    return (
        <div className='product-wrap'>
            <div className='product'>
                <div className='image'>
                    <img alt={product?.title} src={product?.image}></img>
                </div>
                <div className='info'>
                    <p className='category'>{product?.category}</p>
                    <p className='name'>{product?.title}</p>
                    <p className='price'>${product?.price}</p>
                    <p className='description'>{product?.description}</p>
                    <div className='buttons'>
                        <button className='put-in-cart' onClick={() => onAdd(Number(product?.id))}>장바구니에 담기</button>
                        <Link className='to-cart' to='../cart'>장바구니로 이동</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;