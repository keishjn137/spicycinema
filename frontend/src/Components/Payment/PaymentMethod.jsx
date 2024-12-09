import React, { useState } from "react";
import "./PaymentMethod.css";
import VisaIcon from "../../asset/images/visa.png";
import MastercardIcon from "../../asset/images/mastercard.png";
import PaypalIcon from "../../asset/images/paypal.png";

const PaymentMethod = ({ handlePayment }) => {  
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const handlePaymentClick = () => {
   
    if (!cardName || !cardNumber || !expiryDate || !cvv || !isTermsAccepted) {
      alert("Vui lòng điền đầy đủ thông tin và chấp nhận điều khoản dịch vụ.");
      return;
    }

  
    handlePayment();
  };

  return (
    <div className="payment-form">
      <h2 className="form-title">Hình thức thanh toán</h2>

      <div className="payment-options">
        <button className="payment-btn active">
          <img src={VisaIcon} alt="Visa" className="payment-icon" />
        </button>
        <button className="payment-btn">
          <img src={MastercardIcon} alt="Mastercard" className="payment-icon" />
        </button>
        <button className="payment-btn">
          <img src={PaypalIcon} alt="PayPal" className="payment-icon" />
        </button>
      </div>

      <form className="form-fields">
        <div className="form-content">
          <div className="form-row">
            <label>Tên thẻ</label>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label>Số thẻ</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className="form-row-inline">
            <div className="form-group">
              <label>Ngày hết hạn</label>
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={isTermsAccepted}
              onChange={(e) => setIsTermsAccepted(e.target.checked)}
            />
            <span>
              Để thanh toán, bạn cần chấp thuận <a href="#">điều khoản dịch vụ</a> <br /> của chúng tôi
            </span>
          </label>

          <button
            type="button"
            className="submit-btn"
            onClick={handlePaymentClick} 
          >
            Thanh toán
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentMethod;
