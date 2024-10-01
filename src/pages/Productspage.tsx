import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, CardActionArea, TextField, Container, CardMedia } from '@mui/material';
import MedicineImage from '../assets/images/icons8-medicine-80.png';

interface Product {
    id: number;
    name: string;
    price: number;
}

const dummyProducts: { [key: number]: Product[] } = {
    1: [
        { id: 1, name: 'Aspirin', price: 5.99 },
        { id: 2, name: 'Tylenol', price: 7.99 },
        { id: 3, name: 'Advil', price: 6.99 },
        { id: 4, name: 'Paracetamol', price: 3.99 },

    ],
    2: [
        { id: 4, name: 'Cough Syrup', price: 8.99 },
        { id: 5, name: 'Vitamin C', price: 9.99 },
        { id: 6, name: 'Ibuprofen', price: 4.99 },
    ],
    3: [
        { id: 7, name: 'Antibiotics', price: 12.99 },
        { id: 8, name: 'Antihistamine', price: 11.99 },
        { id: 9, name: 'Pain Reliever', price: 10.99 },
    ],
    4: [
        { id: 10, name: 'Vitamins', price: 15.99 },
        { id: 11, name: 'Supplements', price: 14.99 },
        { id: 12, name: 'Minerals', price: 13.99 },
    ],
    // Add more dummy products for other distributors as needed
};

const Productspage: React.FC = () => {
    const { distributorId } = useParams<{ distributorId: string }>();
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (distributorId) {
            const id = parseInt(distributorId, 10);
            setProducts(dummyProducts[id] || []);
        }
    }, [distributorId]);

    const handleProductClick = (productId: number) => {
        navigate(`/product/${productId}`); // Navigate to the product details page
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <h2>Ordering from Big Pharma Distributors {`{${products.length}}`}</h2>
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Search for a medicine..."
                value={searchTerm}
                onChange={handleSearch}
                sx={{ 
                mb: 3,
                backgroundColor: '#fff',
                borderRadius: '20px',

             }}
            />
            {filteredProducts.length > 0 ? (
                <Grid container spacing={3}>
                    {filteredProducts.map(product => (
                        <Grid item xs={12} sm={4} key={product.id}>
                            <Card
                                sx={{
                                    backgroundColor: '#283342',
                                    color: '#fff',
                                    borderRadius: '15px',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={MedicineImage}
                                    alt="Medicine"
                                    sx={{
                                        objectFit: 'contain',
                                        margin: 'auto',
                                        width: '100%',
                                        
                                    }}
                                />
                                <CardActionArea onClick={() => handleProductClick(product.id)}>
                                    <CardContent>
                                        {/* add an image */}
                                        
                                        <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                                            {product.name}
                                        </Typography>
                                        <Typography variant="body2" color="white" sx={{ textAlign: 'center' }}>
                                            Price: KES: {product.price.toFixed(2)}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <p>No products available</p>
            )}
        </Container>
    );
};

export default Productspage;
