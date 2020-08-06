import React from 'react';

class SearchOld extends React.Component {
  constructor(props){
    super()
    this.state = {
      count: 0
    }
  }

  render(props) {
    return (
      <div className="searchOld">
        <div>{this.state.count} найдено</div>
        <h2>Вы недавно искали</h2>
      </div>
    )
  }
}
export default SearchOld;