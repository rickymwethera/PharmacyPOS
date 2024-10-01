import React, { useRef, useState,  } from 'react';
import { useCart } from '../context/CartContext';
import { Button, List, ListItem, Typography, IconButton, Box, Card, FormControl, InputLabel, Select, MenuItem, TextField, SelectChangeEvent, CardMedia } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Autocomplete, LoadScript } from '@react-google-maps/api';
import {Snackbar, Alert} from '@mui/material';
import MedicineImage from '../assets/images/icons8-medicine-80.png'

const Cart = () => {
    const { items, removeItem } = useCart();
    const [paymentMethod, setPaymentMethod] = useState('Cash');
    const [deliveryLocation, setDeliveryLocation] = useState('');
    const getTotalPrice = () => items.reduce((total, item) => total + item.price * item.quantity, 0);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

    const handlePaymentChange = (event: SelectChangeEvent) => {
        setPaymentMethod(event.target.value as string);
    };

    const handlePlaceChanged = () => {
        if (autocompleteRef.current) {
            const place = autocompleteRef.current.getPlace();
            if (place && place.formatted_address) {
                setDeliveryLocation(place.formatted_address);
            }
        }
    };

    const handleCheckout = () => {
        setSnackbarMessage('Your order is being processed');
        setSnackbarOpen(true);

        setTimeout(() => {
            setSnackbarMessage("Your order has been placed successfully");
        }, 3000);
    }

    return (
        // <LoadScript 
        // googleMapsApiKey="YOUR_ACTUAL_GOOGLE_MAPS_API_KEY"
        // libraries={['places']}
        // onLoad={() => console.log('Google Maps script loaded successfully')}
        // onError={(e) => console.error('Error loading Google Maps script:', e)}
        // >
            <Box sx={{ display: 'flex', flexDirection: 'row', padding: 2 }}>
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h4" gutterBottom>Your Cart</Typography>
                    <List>
                        
                        {items.length > 0 ? items.map((item) => (
                            <Card key={item.id} sx={{ 
                                p: 2, 
                                mb: 2,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                border: '1px solid #ccc',
                                borderRadius: 5,
                                backgroundColor: '#f9f9f9'
                                
                                }}>
                            <ListItem key={item.id} sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
                                {/* add an image */}
                              
                                <Typography>{item.name} x {item.quantity}</Typography>
                                <Typography>KES: {(item.price * item.quantity).toFixed(2)}</Typography>
                                <IconButton onClick={() => removeItem(item.id)} color="error">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem>
                            </Card>
                        )) : <Typography>Your cart is empty</Typography>}
                        
                    </List>
                </Box>
                <Box sx={{ width: 400, ml: 2, border: '1px solid #ccc', padding: 2, color: 'white', backgroundColor: "#283342", borderRadius: 4 }}>
                    <Typography variant="h6">Total Cost: KES: {getTotalPrice().toFixed(2)}</Typography>
                    <FormControl fullWidth sx={{ 
                        mt: 2,
                        color: 'white',
                        '& .MuiInputLabel-root': {
                            color: 'white',
                        },
                         }}>
                        <InputLabel id="payment-method-label">Payment Method</InputLabel>
                        <Select
                            labelId="payment-method-label"
                            id="payment-method"
                            value={paymentMethod}
                            label="Payment Method"
                            onChange={handlePaymentChange}
                            sx={{ color: 'white' }}
                        >
                            <MenuItem value="Cash">Cash</MenuItem>
                            <MenuItem value="Mpesa">Mpesa</MenuItem>
                            <MenuItem value="Credit">Credit Card</MenuItem>
                            <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
                        </Select>
                    </FormControl>
                    {/* <Autocomplete
                        // onLoad={(autocomplete) => { autocompleteRef.current = autocomplete; }}
                        // onPlaceChanged={handlePlaceChanged}
                    >
                        <TextField
                            fullWidth
                            label="Delivery Location"
                            value={deliveryLocation}
                            onChange={(e) => setDeliveryLocation(e.target.value)}
                            variant="outlined"
                            sx={{ mt: 2 }}
                        />
                    </Autocomplete> */}
                    <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleCheckout} >Checkout</Button>
                    <Snackbar
                        open={snackbarOpen}
                        autoHideDuration={6000}
                        onClose={() => setSnackbarOpen(false)}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    >
                        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
                            {snackbarMessage}
                        </Alert>
                    </Snackbar>

                </Box>
            </Box>
        // </LoadScript>
    );
};

export default Cart;