import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Typography, Card, CardContent, CardActions, TextField, Container, Box, Grid, CardMedia } from '@mui/material';
import { useCart } from '../context/CartContext';
import MedicineImage from '../assets/images/icons8-medicine-80.png';

const dummyProducts: { [key: number]: any } = {
    1: { id: 1, name: 'Aspirin', price: 5.99, description: 'Pain reliever and fever reducer.' },
    2: { id: 2, name: 'Tylenol', price: 7.99, description: 'Pain reliever and a fever reducer.' },
    3: { id: 3, name: 'Advil', price: 6.99, description: 'Nonsteroidal anti-inflammatory drug (NSAID).' },
    4: { id: 4, name: 'Cough Syrup', price: 8.99, description: 'Relieves cough and throat irritation.' },
    5: { id: 5, name: 'Vitamin C', price: 9.99, description: 'Boosts immunity and overall health.' },
    6: { id: 6, name: 'Ibuprofen', price: 4.99, description: 'NSAID used to reduce fever and treat pain.' },
};

const ProductDetails: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const navigate = useNavigate();
    const { addItem } = useCart();
    const product = dummyProducts[Number(productId)];

    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(product.price);

    if (!product) {
        return (
            <Container maxWidth="sm" style={{ marginTop: '20px' }}>
                <Typography variant="h6">Product not found. Please select a valid product.</Typography>
                <Button variant="outlined" color="primary" onClick={() => navigate(-1)}>
                    Go Back
                </Button>
            </Container>
        );
    }

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        const qty = isNaN(value) || value < 1 ? 1 : value;
        setQuantity(qty);
        setTotal(qty * product.price);
    };

    const handleAddToCart = () => {
        addItem({ ...product, quantity });
        navigate('/cart');
    };

    return (
        <Box sx={{ 
            mt: 4,
            bgcolor: '#283342',
            p: 3,
            borderRadius: 3,
            color: 'white',
            boxShadow: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
             

         }}>
                            <Typography variant="h4" sx={{ flex: 1, textAlign: 'center', mb: 3 }}>
                    {product.name}
                </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>

                <Box sx={{ flex: 1, p: 2 }}>
                    <CardMedia
                        component="img"
                        image={MedicineImage}
                        alt={product.name}
                        sx={{ width: '100%', maxHeight: 100, objectFit: 'contain' , mb: 5}}
                    />
                
                
                    <Typography variant="h6" sx={{ textAlign: 'center', mb: 3 }}> 
                        <b>Brand: </b>
                        {product.name}
                        </Typography>
                    <Typography variant="h6" sx={{ textAlign: 'center', mb: 3 }}>
                        <b>Description: </b>
                        {product.description}
                        </Typography>
           

                    <Typography variant="h6" sx={{textAlign: 'center', mb: 2 }}>Price: KES {product.price.toFixed(2)}</Typography>
                    <TextField
                        label="Quantity"
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        InputProps={{ inputProps: { min: 1 } }}
                        sx={{textAlign: 'center', mb: 2, width: '100px' }}
                    />
                    <Typography variant="h6" sx={{textAlign: 'center', mb: 2 }}>Total: KES {total.toFixed(2)}</Typography>
                    <Button variant="contained" color="primary" onClick={handleAddToCart} sx={{ textAlign: 'center', width: '100%', mb: 1 }}>
                        Add to Cart
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={() => navigate(-1)} sx={{ textAlign: 'center', width: '100%' }}>
                        Go Back
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductDetails;
