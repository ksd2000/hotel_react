import React from 'react';

function HotelInfo(props) {
  return (
    

        <div className="hotelInfo">
          <div className="hotelInfo_market">
            <img className="hotelInfo_img" src={props.date.img} alt="фото" />
            <div className="hotelInfo_name">{props.date.name}</div>
            <div className="hotelInfo_region"><i className="fa fa-map-marker" aria-hidden="true"></i> {props.date.region}</div>
            <button className="hotelInfo_btn">Вилла</button>
          <div className="hotelInfo_info">
            <div><i className="fa fa-user-plus" aria-hidden="true"></i> {props.date.housing}</div>
            <div><i className="fa fa-bed" aria-hidden="true"></i> {props.date.services}</div>
            <div><i className="fa fa-bath" aria-hidden="true"></i> {props.date.pool}</div>
            <div><i className="fa fa-object-group" aria-hidden="true"></i> {props.date.area}</div>
            <div>{props.date.beach}</div>
          </div>
          <div className="hotelInfo_date">
            <div className="hotelInfo_period">{props.date.period}</div>
            <div className="hotelInfo_price">от {props.date.price} $/day</div>
          </div>
          </div>
        </div>
    
  );
}

export default HotelInfo;