import { AppBar, Toolbar, Typography } from '@mui/material';
import CustomButton from './customButton';
import { useState } from 'react';
import AddUser from '../pages/addUser';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <AppBar position="static" sx={{ marginBottom: 2 }}>
                <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h6">CRUD Application</Typography>
                    <CustomButton onClick={() => setIsOpen(true)}>
                        Add
                    </CustomButton>
                </Toolbar>
            </AppBar>
            {
                isOpen && <AddUser isOpen={isOpen} onClose={() => setIsOpen(false)} />
            }
        </>

    );
};

export default Header;
