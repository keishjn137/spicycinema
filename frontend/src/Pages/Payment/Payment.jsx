import React from 'react';
import InvoiceDetail from '../../Components/Invoice/InvoiceDetail';
import PaymentMethod from '../../Components/Payment/PaymentMethod';
import './Payment.css'
import { useLocation } from 'react-router-dom';


const Payment = () => {
    const location = useLocation();
    const data = location.state;

    return (
        <div className='payment'>
            <InvoiceDetail data={data} />
            <PaymentMethod />
        </div>
    );
};

export default Payment;