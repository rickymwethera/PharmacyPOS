import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container, CardHeader, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const distributors = [
    { id: 1, name: 'Big Pharma Distributors', products: 540, location: 'Westlands'}, 
    { id: 2, name: 'Kylin Distributors', products: 231, location: 'Pangani'},
    { id: 3, name: 'Hama Distributors', products: 0, location: 'Kasarani'},
    { id: 4, name: 'Leech Distributors', products: 0, location: 'Ruiru'},
];

const OrderProducts: React.FC = () => {
    const navigate = useNavigate();

    const handleDistributorClick = (distributorId: number) => {
        navigate(`/products/${distributorId}`);
    };

    return (
        <Container 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '20px auto',
                padding: '20px',
            }}
        >
            <Typography variant="h6" color="#1D242E" sx={{
                textAlign: 'center',
                textTransform: 'uppercase',
                marginBottom: '20px',
            }}>
                            Available Distributors
                            ({distributors.length})
                        </Typography>

            <Grid container spacing={7}>
                {distributors.map(distributor => (
                    <Grid item xs={12} sm={6} key={distributor.id}>
                        <Card 
                            onClick={() => handleDistributorClick(distributor.id)} 
                            style={{ cursor: 'pointer', backgroundColor: '#283342', color: '#fff', borderRadius: '15px', height: '200px', margin: 0, width: '600px' }}     
                        >
                          
                            <CardContent 
                            sx={
                                {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                }
                            }
                            >
                                <Typography gutterBottom variant="h5" component="div">
                                    {distributor.name} 
                                </Typography>
                                <Typography variant="body2" color="white">
                                    Number of Products: {distributor.products}
                                </Typography>
                                <Typography variant="body2" color="white">
                                    Location: {distributor.location}
                                </Typography>
                                {/* Here you can add star ratings if needed */}

                                <Box sx={{ mt: 5, alignContent: 'right' }}>
                                    <Typography variant="body2" color="white">
                                        ⭐⭐⭐⭐⭐
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default OrderProducts;
