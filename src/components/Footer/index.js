import React from 'react';
import Logo from './images/Logo.png';

function Footer() {
  return (
    <div className="footer clearfix">
      <img className="footer_img" src={Logo} width="10%" height="auto" alt='logo' />
      <button className="footer_btn">Забронировать виллу</button>
      <div className="footer_social">
        <i className="fa fa-facebook" aria-hidden="true"></i>
        <i className="fa fa-vk" aria-hidden="true"></i>
        <i className="fa fa-instagram" aria-hidden="true"></i>
      </div>
      

      <div className="footer_column">
        <a href="/">О компании</a>
        <a href="/">FAQ</a>
      </div>
      <div className="footer_column">
        <a href="/">Для владельцев</a>
        <a href="/">FAQ</a>
        <a href="/">Отзывы</a>
      </div>
      <div className="footer_column">
        <a href="/">О компании</a>
        <a href="/">FAQ</a>
        <a href="/">Отзывы</a>
        <a href="/">Путеводитель</a>
        <a href="/">Контакты</a>
        <a href="/">Политика конфидециальности</a>
      </div >
        
        
        
    </div>
  );
}

export default Footer;