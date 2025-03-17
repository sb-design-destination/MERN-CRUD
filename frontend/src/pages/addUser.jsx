import { useState } from 'react';
import { createUser } from '../services/userServices';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';
import { Dialog, DialogContent, DialogTitle, Box, Typography } from '@mui/material';

const AddUser = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        stock: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); // Clear error on typing
    };

    // ✅ Validation Function
    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.price) newErrors.price = 'Price is required';
        if (!formData.description.trim()) newErrors.description = 'Description is required';
        if (!formData.stock) newErrors.stock = 'Stock is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Form is valid if no errors
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                await createUser(formData);
                setFormData({ name: '', price: '', description: '', stock: '' });
                onClose(); // Close dialog after successful submission
            } catch (err) {
                console.error('Error creating user:', err);
            }
        }
    };

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
            PaperProps={{
                sx: {
                    borderRadius: 3,
                    padding: 2,
                    boxShadow: 3,
                },
            }}
        >
            <DialogTitle
                sx={{
                    backgroundColor: '#f5f5f5',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    textAlign: 'center',
                }}
            >
                Add New Product
            </DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        padding: 2,
                    }}
                >
                    {/* ✅ Name Field */}
                    <CustomInput
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        label="Name"
                        fullWidth
                    />
                    {errors.name && (
                        <Typography color="error" sx={{ fontSize: '0.875rem' }}>
                            {errors.name}
                        </Typography>
                    )}

                    {/* ✅ Price Field */}
                    <CustomInput
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        label="Price"
                        fullWidth
                        type="number"
                    />
                    {errors.price && (
                        <Typography color="error" sx={{ fontSize: '0.875rem' }}>
                            {errors.price}
                        </Typography>
                    )}

                    {/* ✅ Description Field */}
                    <CustomInput
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        label="Description"
                        fullWidth
                        multiline
                        rows={3}
                    />
                    {errors.description && (
                        <Typography color="error" sx={{ fontSize: '0.875rem' }}>
                            {errors.description}
                        </Typography>
                    )}

                    {/* ✅ Stock Field */}
                    <CustomInput
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        label="Stock"
                        fullWidth
                        type="number"
                    />
                    {errors.stock && (
                        <Typography color="error" sx={{ fontSize: '0.875rem' }}>
                            {errors.stock}
                        </Typography>
                    )}

                    {/* ✅ Button Section */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: 2,
                            marginTop: 2,
                        }}
                    >
                        <CustomButton onClick={onClose} color="secondary">
                            Cancel
                        </CustomButton>
                        <CustomButton type="submit" color="primary">
                            Add User
                        </CustomButton>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default AddUser;
