import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/header';

const PaymentFailedPage = () => {
    const pageStyle = {
        minHeight: '100vh',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        padding: '1rem'
    };
    
    const cardStyle = {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '2rem',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    };
    
    const xmarkContainerStyle = {
        width: '80px',
        height: '80px',
        backgroundColor: '#ffebee',  // Màu đỏ nhạt
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        marginBottom: '2rem'
    };
    
    const titleStyle = {
        textAlign: 'center',
        fontSize: '28px',
        fontWeight: '600',
        color: '#333',
        marginBottom: '2rem'
    };
    
    const infoRowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        padding: '0.25rem 0'
    };
    
    const infoLabelStyle = {
        color: '#666'
    };
    
    const infoValueStyle = {
        color: '#333',
        fontWeight: '500'
    };
    
    const buttonStyle = {
        backgroundColor: '#d32f2f',  // Màu đỏ đậm
        border: 'none',
        padding: '0.75rem 2rem',
        borderRadius: '25px',
        fontSize: '16px',
        marginTop: '1.5rem',
        width: 'auto'
    };
    
    return (
        <div>
            <Header/>
            <div style={pageStyle}>
                <Container>
                    <div style={cardStyle}>
                        <div style={xmarkContainerStyle}>
                            <X size={40} color="#d32f2f" strokeWidth={2.5} />
                        </div>

                        <div style={titleStyle}>
                            Payment
                            <br />
                            Failed!
                        </div>

                        <div style={infoRowStyle}>
                            <span style={infoLabelStyle}>Service Code:</span>
                            <span style={infoValueStyle}>SRV123456</span>
                        </div>

                        <div style={infoRowStyle}>
                            <span style={infoLabelStyle}>Error Message:</span>
                            <span style={infoValueStyle}>Transaction Declined</span>
                        </div>

                        <div className="text-center">
                            <Link to=''>
                                <Button style={buttonStyle}>
                                    Try Again
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default PaymentFailedPage;