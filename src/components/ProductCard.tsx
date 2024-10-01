import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ProductCard: React.FC<{ product: any }> = ({ product }) => {
    return (
        <Card
            sx={{
                backgroundColor: '#1e1e2f',
                color: '#fff',
                borderRadius: '15px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '200px',
                margin: 2,
            }}
        >
            <Typography variant="h6">{product.brand}</Typography>
            <Typography>Quantity: {product.quantity} pc</Typography>
            <Typography>Selling Price: {product.price} KES</Typography>
            {/* You can add an image here if needed */}
            <img src={product.imageUrl} alt={product.brand} style={{ width: '50px', height: '50px' }} />
        </Card>
    );
};

export default ProductCard;
