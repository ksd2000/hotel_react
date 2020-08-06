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
        <div>О компании</div>
        <div>FAQ</div>
      </div>
      <div className="footer_column">
        <div>Для владельцев</div>
        <div>FAQ</div>
        <div>Отзывы</div>
      </div>
      <div className="footer_column">
        <div>О компании</div>
        <div>FAQ</div>
        <div>Отзывы</div>
        <div>Путеводитель</div>
        <div>Контакты</div>
        <div>Политика конфидециальности</div>
      </div >
        
        
        
    </div>
  );
}

export default Footer;