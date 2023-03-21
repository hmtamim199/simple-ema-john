
import { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getStoredCart,  } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([])

  useEffect(() =>{
    
    fetch('products.json')
    .then(res=>res.json())
    .then(data =>{
      
      setProducts(data)})
  },[])
  useEffect( () =>{
    
    const storedCart = getStoredCart()
    const savedCart = [];
    for(const id in storedCart){
     const addedProduct = products.find(product=> product.id === id);
     if(addedProduct){
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
     }
    }
    setCart(savedCart);
  },[products])
  
  const [cart, setCart] = useState([]);
  const clearCart = () =>{
    setCart([]);
    deleteShoppingCart();
  }
   

  const handleAddToCart = (selectedProduct) =>{
    console.log(selectedProduct)
    let newCart = [];
    const exist = cart.find(product => product.id === selectedProduct.id);
    if(!exist){
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct]
    }
    else{
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exist.quantity = exist.quantity +1;
      newCart = [...rest, exist];
    }
    setCart(newCart)
    addToDb(selectedProduct.id)
  }
  return (
    <div className='shop'>
      <div className="product-container">
        {
          products.map(product =><Product 
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            ></Product>)
        }
      </div>
      <div className="cart-container">
        <Cart 
        clearCart={clearCart}
        cart={cart}></Cart>
       
       </div>
    </div>
  );
};

export default Shop;