import React from "react";
import "./PaymentMethod.css";
import VisaIcon from "../../asset/images/visa.png";
import MastercardIcon from "../../asset/images/mastercard.png";
import PaypalIcon from "../../asset/images/paypal.png";

const PaymentMethod = () => {
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
            <input type="text" />
          </div>
          <div className="form-row">
            <label>Số thẻ</label>
            <input type="text" />
          </div>
          <div className="form-row-inline">
            <div className="form-group">
              <label>Ngày hết hạn</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input type="text" />
            </div>
          </div>

          {/* Nút đồng ý điều khoản */}
          <label className="checkbox-label">
            <input type="checkbox" />
            <span>
              Để thanh toán, bạn cần chấp thuận <a href="#">điều khoản dịch vụ</a> <br /> của chúng tôi
            </span>
          </label>

          {/* Nút thanh toán */}
          <button type="submit" className="submit-btn">
            Thanh toán
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentMethod;
