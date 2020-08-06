import React from 'react';

class SiteManagement extends React.Component {
  constructor(props){
    super()
    this.state = {
      telefon: ['+7(495) 580-80-46',2,3],
      unit: ['USD','РУБ'],
      language: ['Eng','Ru']
    }
  }

  render() {
    return (
      <div className="header-menu">
        <div className="header-menu__right header-menu__lang">
          <select>{this.state.language.map((language, idx) => <option key={idx}>{language}</option>)}</select>
        </div>
        <button className="header-menu__right header-menu_btn">Войти</button>
        <div className="header-menu__right header-menu__unit">
          <select>{this.state.unit.map((unit, idx) => <option key={idx}>{unit}</option>)}</select>
        </div>
        <div className="header-menu__right header-menu__faq">FAQ</div>
        <div className="header-menu__right header-menu__tlf">
          <select>{this.state.telefon.map((telefon, idx) => <option key={idx}>{telefon}</option>)}</select>
        </div>
      </div>
    )
  }
}
export default SiteManagement;