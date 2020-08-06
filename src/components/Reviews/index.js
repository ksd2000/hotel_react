import React, { Component } from "react";
import Slider from "react-slick";
import Foto from './images/man5.png';

export default class Reviews extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2
    };
    return (
      <div  className="reviews">
        <p >Нас выбирают</p>
        <h2>Отзывы</h2>
        <Slider {...settings}>
          <div>
            <div className="reviews_txt">
              <img className="reviews_img" src={Foto} alt='logo' />
              <h3>Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur</h3>
            </div>
          </div>
          <div>
            <div className="reviews_txt">
              <img className="reviews_img" src={Foto} alt='logo' />
              <h3>Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur</h3>
            </div>
          </div>
          <div>
            <div className="reviews_txt">
              <img className="reviews_img" src={Foto} alt='logo' />
              <h3>Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur</h3>
            </div>
          </div>
          <div>
            <div className="reviews_txt">
              <img className="reviews_img" src={Foto} alt='logo' />
              <h3>Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur</h3>
            </div>
          </div>
          <div>
            <div className="reviews_txt">
              <img className="reviews_img" src={Foto} alt='logo' />
              <h3>Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur</h3>
            </div>
          </div>
          <div>
            <div className="reviews_txt">
              <img className="reviews_img" src={Foto} alt='logo' />
              <h3>Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur Lorem ipsum dolor sit amet, consetecur</h3>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

