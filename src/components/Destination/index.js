import React, { Component } from "react";
import Slider from "react-slick";
import Foto1 from './images/fot1.jpg';
import Foto2 from './images/fot2.jpg';
import Foto3 from './images/fot3.jpg';

export default class Destination extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div  className="destination">
        <Slider {...settings}>
          <div>
            <div className="destination_cart">
              <img className="destination_img" src={Foto1} alt='logo' />
              <h3>Париж, Франция</h3>
            </div>
          </div>
          <div>
            <div className="destination_cart">
              <img className="destination_img" src={Foto2} alt='logo' />
              <h3>Париж, Франция</h3>
            </div>
          </div>
          <div>
            <div className="destination_cart">
              <img className="destination_img" src={Foto3} alt='logo' />
              <h3>Париж, Франция</h3>
            </div>
          </div>
          <div>
            <div className="destination_cart">
              <img className="destination_img" src={Foto2} alt='logo' />
              <h3>Париж, Франция</h3>
            </div>
          </div>
        </Slider>
        <button className="destination_btn">Все направления</button>
      </div>
    );
  }
}