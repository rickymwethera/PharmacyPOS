// context/CartContext.tsx

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the type for a cart item
interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

// Define the CartContextType with the addItem function
interface CartContextType {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: number) => void;
}

// Create a context with a default value
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    // Function to add item to cart
    const addItem = (item: CartItem) => {
        setItems((prevItems) => [...prevItems, item]);
    };

    const removeItem = (id: number) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ items, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};


