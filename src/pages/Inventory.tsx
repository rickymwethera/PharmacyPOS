import React, { ChangeEvent, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Box, Button, Card, CardContent, Typography, Grid, IconButton, Dialog, DialogActions, DialogContent,
    DialogTitle, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

// Starting with some dummy data for inventory items
const initialInventory = [
    { id: 1, name: 'Aspirin', quantity: 100, price: '5.99' },
    { id: 2, name: 'Tylenol', quantity: 50, price: '7.99' },
];

const InventoryPage = () => {
    const [inventory, setInventory] = useState(initialInventory);
    const [openDialog, setOpenDialog] = useState(false);
    const [newItem, setNewItem] = useState({ name: '', quantity: '', price: '' });

    const handleOpenDialog = () => setOpenDialog(true);
    const handleCloseDialog = () => setOpenDialog(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = e.target;
        setNewItem(prev => ({ ...prev, [name]: value }));
    };

    const handleAddItem = () => {
        // Ensure quantity is parsed as a number before setting the state
        const newItemWithId = {
            ...newItem,
            id: inventory.length + 1,
            quantity: parseInt(newItem.quantity, 10) // Parse the quantity as an integer
        };
    
        setInventory(prevInventory => [...prevInventory, newItemWithId]);
        setNewItem({ name: '', quantity: '', price: '' }); // Reset the dialog inputs
        handleCloseDialog();
    };

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
                {/* Existing Grid and Table Code */}
                <Button startIcon={<AddIcon />} variant="contained" onClick={handleOpenDialog}>
                    Add New Item
                </Button>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {initialInventory.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell component="th" scope="row">{item.name}</TableCell>
                                        <TableCell align="right">{item.quantity}</TableCell>
                                        <TableCell align="right">{item.price}</TableCell>
                                        <TableCell align="right">
                                            <IconButton component={RouterLink} to={`/edit/${item.id}`}>
                                                <EditIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

                <Dialog open={openDialog} onClose={handleCloseDialog}>
                    <DialogTitle>Add New Inventory Item</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            name="name"
                            label="Item Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={newItem.name}
                            onChange={handleInputChange}
                        />
                        <TextField
                            margin="dense"
                            id="quantity"
                            name="quantity"
                            label="Quantity"
                            type="number"
                            fullWidth
                            variant="standard"
                            value={newItem.quantity}
                            onChange={handleInputChange}
                        />
                        <TextField
                            margin="dense"
                            id="price"
                            name="price"
                            label="Price"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={newItem.price}
                            onChange={handleInputChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog}>Cancel</Button>
                        <Button onClick={handleAddItem}>Add</Button>
                    </DialogActions>
                </Dialog>
            </Grid>
            {/* Rest of the existing code */}
        </Box>
    );
};

export default InventoryPage;
