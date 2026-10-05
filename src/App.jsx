import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import CartItem from "./components/CartItem";

function App() {
    // Product data
    const products = [
        {
            id: 1,
            name: "AMD Ryzen 7 7800X3D",
            price: 349.99,
            image: "https://placehold.co/600x400/cc0000/ffffff?text=AMD+Ryzen+7+7800X3D",
            description: "High-performance gaming CPU with 8 cores and 16 threads."
        },
        {
            id: 2,
            name: "NVIDIA GeForce RTX 4070",
            price: 549.99,
            image: "https://placehold.co/600x400/00aa44/ffffff?text=NVIDIA+GeForce+RTX+4070",
            description: "Powerful graphics card for gaming and high-quality PC performance."
        },
        {
            id: 3,
            name: "Corsair Vengeance 32GB DDR5",
            price: 89.99,
            image: "https://placehold.co/600x400/333333/ffffff?text=Corsair+Vengeance+32GB",
            description: "32GB DDR5 memory kit designed for modern gaming and productivity PCs."
        },
        {
            id: 4,
            name: "Samsung 990 Pro 2TB SSD",
            price: 159.99,
            image: "https://placehold.co/600x400/0066cc/ffffff?text=Samsung+990+Pro+2TB",
            description: "Fast 2TB NVMe SSD for quick loading times and file transfers."
        },
        {
            id: 5,
            name: "ASUS TUF Gaming B650",
            price: 179.99,
            image: "https://placehold.co/600x400/663399/ffffff?text=ASUS+TUF+B650",
            description: "Reliable AM5 motherboard with features for modern gaming PCs."
        },
        {
            id: 6,
            name: "Corsair RM850x Power Supply",
            price: 129.99,
            image: "https://placehold.co/600x400/555555/ffffff?text=Corsair+RM850x",
            description: "850W power supply designed to provide reliable power for high-performance PCs."
        }
    ];

    const [cart, setCart] = useState([]); 
    
    const addToCart = (product) => { 
        setCart([...cart, product]);
     }; 
     
     const removeFromCart = (indexToRemove) => { 
        setCart(
            cart.filter((_, index) => index !== indexToRemove)
        );
    }; 
    
    const cartTotal = cart.reduce(
        (total, product) => total + product.price, 
        0
    ); 
    
    return (
    <div className="app"> 
    <Header
    storeName="PC Component Store" 
    cartCount={cart.length} 
    /> 
    <Hero 
    title="Build Your Dream PC" 
    subtitle="Find the right components to create YOUR dream PC." 
    ctaText="Shop Components" 
    /> 
    
    <div className="main-content"> 
        <h2>Featured Products</h2> 
        
        <div className="product-list"> 
            {products.map((product) => (
                <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart} />
            ))} 
            </div> 
                <div className="cart"> 
                    <h2>Shopping Cart</h2> 
                    
                    <p>Items in cart: {cart.length}</p> 
                    
                    {cart.length === 0 ? (
                        <p>Your cart is empty!</p>
                    ) : (
                        <div> 
                            {cart.map((product, index) => (
                                <CartItem 
                                key={`${product.id}-${index}`} 
                                product={product} 
                                onRemove={() => removeFromCart(index)} 
                                />
                            ))} 
                            
                            <div className="cart-total"> 
                                <h3>Total: ${cartTotal.toFixed(2)}</h3> 
                            </div> 
                        </div>
                        )} 
                    </div> 
                </div> 
                
                <Footer 
                storeName="PC Component Store" 
                address="123 Computer Lane, Tech City, SC 29000" 
                phone="(555) 123-4567" 
                email="support@pccomponentstore.com" 
            /> 
        </div>
    );
}

export default App;
