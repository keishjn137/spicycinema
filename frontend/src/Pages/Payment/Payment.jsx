import React from 'react';
import InvoiceDetail from '../../Components/Invoice/InvoiceDetail';
import PaymentMethod from '../../Components/Payment/PaymentMethod';
import './Payment.css'
import { useLocation } from 'react-router-dom';
import { Createbill } from '../../services/billService';
import { useSelector } from 'react-redux';


const Payment = () => {
    const location = useLocation();
    const data = location.state;
    console.log(data)
    const movie = data.movie.name;
    const branch = data.placeChoice;
    const showtime = data.showTime.showtime
    const seat = data.selectedSeat;
    console.log(seat)

    const user = useSelector((state) => {
    try {
      return state.user.userInfo.userInfo?.[0]?.id;
    } catch (e) {
      console.error(e);
      return null;
    }
  });

    const handlePayment = async()=>{
         
        try {

            await  Createbill(user , movie , branch , showtime , seat);
            alert("Tạo thành công");
            navigate('/');
        } catch (e) {
            console.error(e);
        }
    };

    

    return (
        <div className='payment'>
            <InvoiceDetail data={data} />
            <PaymentMethod handlePayment={handlePayment}/>
        </div>
    );
};

export default Payment;