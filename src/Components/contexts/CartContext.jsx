import {createContext, useState, useEffect} from 'react'

export const CartContext = createContext({});
export function CartContextProvider({children}) {
    const localStorage = typeof window !== "undefined" ? window.localStorage : null;
    const [cartProduct, setCartProduct] = useState([]);
    useEffect(() => {
        if(cartProduct?.length > 0) {
            localStorage?.setItem('cart', JSON.stringify(cartProduct));
        }
    },[cartProduct]);
    useEffect(() => {
        if(localStorage && localStorage.getItem('cart')) {
            setCartProduct(JSON.parse(localStorage.getItem('cart')));
        }
    },[]);
    function addProduct(productId){
        setCartProduct(prev => [...prev,productId]);
    }
    function removeProduct(productId){
        setCartProduct(prev => {
            const pos = prev.indexOf(productId);
            if( pos !== -1){
                return prev.filter((value,index) => index !== pos);
            }
            return prev;
        });
    }
    function clearCart(){
        setCartProduct([]);
    } 
    return (
        <CartContext.Provider value={{cartProduct,setCartProduct,addProduct,removeProduct,clearCart}}>
            {children}
        </CartContext.Provider>
    );
}
