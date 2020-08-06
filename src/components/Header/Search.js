import React from 'react';

class Search extends React.Component {
  constructor(props){
    super()
    this.state = {
      region: ['','Англия', 2, 3],
      number: [1, 2, 3, 4, 5, 6, 7, 8],
      personalInfo: {valueRegion: '',           //значения для поисковика
                   dateStart: '',
                   dateEnd: '',
                   valueNumber: ''
                  }
    }
    this.onChangeSelect = this.onChangeSelect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeSelect(event) {                       //запись в state значений для поиска
    this.setState({personalInfo: {
      ...this.state.personalInfo,
      //valueRegion: event.target.value}});
      [event.target.name]: event.target.value}});
  }

  onSubmit(event) {
    event.preventDefault();                     //отправляем форму без перезагрузки страницы
  }

  render(props) {
    console.log(this.state.personalInfo) 
    return (

      <div className="header-search">
        <form onSubmit={this.onSubmit}>
          <div className="header-search_region">
            <label>Регион
              <select className="header-search__transparent" name='valueRegion' onChange={this.onChangeSelect}>{this.state.region.map((region, idx) => <option key={idx} value={region}>{region}</option>)}</select>
            </label>
          </div>
          <div className="header-search_date">
            <label>Дата с
              <input className="header-search__transparent" type="date" name='dateStart' onChange={this.onChangeSelect} />
            </label>
            <label>по
              <input className="header-search__transparent" type="date" name='dateEnd' onChange={this.onChangeSelect} />
            </label>
          </div>
          <div className="header-search_number">
            <label>Число гостей
              <select className="header-search__transparent" name='valueNumber' onChange={this.onChangeSelect}>{this.state.number.map((number, idx) => <option key={idx}>{number}</option>)}</select>
            </label>
          </div>
          <input className="header-search_btn" type="submit" value="Search" />
        </form>  
      </div>
    )
  }
}
export default Search;