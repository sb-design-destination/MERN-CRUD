import { Button } from '@mui/material';

const CustomButton = ({ children, onClick, color = 'primary', variant = 'contained', ...props }) => {
    return (
        <Button
            onClick={onClick}
            color={color}
            variant={variant}
            {...props}
            sx={{
                textTransform: 'none',
                borderRadius: '8px',
                padding: '8px 16px',
                fontSize: '16px',
                '&:hover': {
                    boxShadow: 'none',
                },
            }}
        >
            {children}
        </Button>
    );
};

export default CustomButton;
