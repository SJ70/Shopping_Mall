import '../stylesheets/Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { IProductInCart, clearCart, removeCart, setCountCart } from '../modules/cart';
import { useCallback, useEffect, useState } from 'react';
import { getProductById } from '../fakeStoreApi/fakeStoreApi';
import { Action } from 'redux';

interface IProductInfo {
    id: number;
    title: string;
    image: string;
    price: number;
    count: number;
}

const Cart = () => {
    
    const cart: IProductInCart[] = useSelector((state: RootState) => state.cart.list);

    const [products, setProducts] = useState<IProductInfo[]>([]);

    const setProductsByCart = useCallback(async () => {
        const arr: IProductInfo[] = [];
        for (const item of cart) {
            const productInfo = await getProductById(item.id);
            arr.push({
                id: item.id,
                title: productInfo.title,
                image: productInfo.image,
                price: productInfo.price,
                count: item.count,
            });
        }
        setProducts(arr);
    }, [cart]);

    useEffect(() => {
        setProductsByCart();
    }, [setProductsByCart]);

    const dispatch = useDispatch();

    const onClear = () => dispatch(clearCart() as Action);

    const onSetCount = (id: number, count: number) => dispatch(setCountCart({id, count}) as Action);

    const onDelete = (id: number) => dispatch(removeCart({id}) as Action);

    const handleSubmit = () => {
        onClear();
    };

    return (
        <div>
            <p className='title'>장바구니</p>
            <ul className='cart-items'>
                {products.map((product, idx) => (
                    <li className='cart-item' key={product.id}>
                        <div className='cart-item-img'>
                            <img alt={product.title} src={product.image}></img> 
                        </div>
                        <div className='cart-item-info'>
                            <p className='name'>{product.title}</p>
                            <p className='price'>{product.price} x {product.count} = <span className='entire-price'>${product.count * product.price}</span></p>
                        </div>
                        <div className='count-setter'>
                            <button onClick={() => onSetCount(product.id, product.count - 1)}>-</button>
                            <input type='number' value={product.count} onChange={(e) => onSetCount(product.id, Number(e.target.value))}></input>
                            <button onClick={() => onSetCount(product.id, product.count + 1)}>+</button>
                        </div>
                        <button className='delete-btn' onClick={() => onDelete(product.id)}>삭제</button>
                    </li>
                ))}
            </ul>
            <p style={products.length > 0 ? {display: 'none'} : {}}>
                장바구니가 비어있습니다.
            </p>
            <div className='under-bar'>
                <p className='entire-price'>합계: ${products.reduce((a, b) => a + b.price * b.count, 0)}</p>
                <button type='submit' onClick={handleSubmit}>계산하기</button>
            </div>
        </div>
    )
}

export default Cart;