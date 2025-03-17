import useFetchData from '../customhook/userDataFetch';
import Loader from '../components/loader';
import CustomButton from '../components/customButton';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { deleteUser } from '../services/userServices';

const Home = () => {
    const { data, loading, error, refresh } = useFetchData('http://localhost:5000/product/GETALLPRODUCT');

    if (loading) return <Loader />;
    if (error) return <div>Error: {error}</div>;

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            refresh();
        } catch (error) {
            console.error('Failed to delete product:', error.message);
        }
    };

    // ✅ Handle Edit
    const handleEdit = (id) => {
        console.log('Edit:', id);
    };

    return (
        <>
            {/* ✅ Styled TableContainer */}
            <TableContainer
                component={Paper}
                sx={{
                    marginTop: 3,
                    boxShadow: 3,
                    borderRadius: 2,
                    overflow: 'hidden',
                }}
            >
                <Table>
                    {/* ✅ Styled Table Head */}
                    <TableHead sx={{ backgroundColor: 'black' }}>
                        <TableRow>
                            {['Name', 'Description', 'Price', 'Stock', 'Actions'].map((heading) => (
                                <TableCell
                                    key={heading}
                                    sx={{
                                        fontWeight: 'bold',
                                        color: 'white',
                                        textAlign: 'center',
                                        padding: '12px',
                                    }}
                                >
                                    {heading}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    {/* ✅ Styled Table Body */}
                    <TableBody>
                        {data?.data?.map((user, index) => (
                            <TableRow
                                key={user._id}
                                sx={{
                                    backgroundColor: index % 2 === 0 ? '#fafafa' : '#ffffff',
                                    '&:hover': { backgroundColor: '#f1f1f1' },
                                    transition: 'background-color 0.2s ease',
                                }}
                            >
                                {/* ✅ Data Cells */}
                                <TableCell sx={{ textAlign: 'center', padding: '12px' }}>
                                    {user.name}
                                </TableCell>
                                <TableCell sx={{ textAlign: 'center', padding: '12px' }}>
                                    {user.description}
                                </TableCell>
                                <TableCell sx={{ textAlign: 'center', padding: '12px' }}>
                                    ₹{user.price}
                                </TableCell>
                                <TableCell sx={{ textAlign: 'center', padding: '12px' }}>
                                    {user.stock}
                                </TableCell>

                                {/* ✅ Action Buttons */}
                                <TableCell sx={{ textAlign: 'center', padding: '12px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                                        <CustomButton
                                            color="error"
                                            onClick={() => handleDelete(user._id)}
                                            sx={{
                                                backgroundColor: '#ff4d4f',
                                                '&:hover': { backgroundColor: '#ff7875' },
                                                fontSize: '0.875rem',
                                                padding: '6px 16px',
                                                borderRadius: '8px',
                                            }}
                                        >
                                            Delete
                                        </CustomButton>

                                        <CustomButton
                                            color="primary"
                                            onClick={() => handleEdit(user._id)}
                                            sx={{
                                                backgroundColor: '#1890ff',
                                                '&:hover': { backgroundColor: '#40a9ff' },
                                                fontSize: '0.875rem',
                                                padding: '6px 16px',
                                                borderRadius: '8px',
                                            }}
                                        >
                                            Edit
                                        </CustomButton>
                                    </div>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Home;
