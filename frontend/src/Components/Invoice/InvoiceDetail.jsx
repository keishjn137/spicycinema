import React from "react";
import "./InvoiceDetail.css";

const InvoiceDetail = ({ data }) => {
  console.log(data)
  return (
    <div className="invoice-detail">
      <h2 className="invoice-title">Chi tiết hóa đơn</h2>
      <div className="invoice-item">
        <div className="item-info">
          <img src={data.movie.url_image_banner} />
          <p>{data.movie.name}</p>
        </div>
      </div>
      <div className="price-details">
        <p>
          Giá vé: <span>{data.movie.price} VNĐ</span>
        </p>
        <p>
          Số lượng: <span>{data.selectedSeatsName.length}</span>
        </p>
        <p>
          Tổng giá vé: <span>{data.movie.price * data.selectedSeatsName.length} VNĐ</span>
        </p>
        <p>
          Thuế: <span>Free</span>
        </p>
      </div>
      <div className="total-amount">
        <p>
          Thành tiền: <span>{data.movie.price * data.selectedSeatsName.length} VNĐ</span>
        </p>
      </div>
    </div>
  );
};

export default InvoiceDetail;
