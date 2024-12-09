import React from 'react';
import InvoiceDetail from '../../Components/Invoice/InvoiceDetail';
import PaymentMethod from '../../Components/Payment/PaymentMethod';
import './Payment.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { Createbill } from '../../services/billService';
import { useSelector } from 'react-redux';


const Payment = () => {
  const convertToDatetimeFormat = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const isoDate = "2024-12-07T12:00:00.000Z";
  const formattedDate = convertToDatetimeFormat(isoDate);
  console.log(formattedDate);


  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;
  console.log(data)
  const movie = data.movie.name;
  const branch = data.placeChoice;
  const showtime = convertToDatetimeFormat(data.showTime.showtime);
  const seat = String(data.selectedSeatsName || '')

  const user = useSelector((state) => {
    try {
      return state.user.userInfo.userInfo?.[0]?.id;
    } catch (e) {
      console.error(e);
      return null;
    }
  });
  console.log(user)

  const handlePayment = async () => {

    try {

      await Createbill(user, movie, branch, showtime, seat);
      alert("Tạo thành công");
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };



  return (
    <div className='payment'>
      <InvoiceDetail data={data} />
      <PaymentMethod handlePayment={handlePayment} />
    </div>
  );
};

export default Payment;