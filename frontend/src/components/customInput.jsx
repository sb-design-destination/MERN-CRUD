import { TextField } from '@mui/material';

const CustomInput = ({ label, value, onChange, type = 'text', ...props }) => {
    return (
        <TextField
            label={label}
            value={value}
            onChange={onChange}
            type={type}
            fullWidth
            variant="outlined"
            size="small"
            {...props}
            sx={{
                marginBottom: 2,
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderRadius: '8px',
                    },
                },
            }}
        />
    );
};

export default CustomInput;
