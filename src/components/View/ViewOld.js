import React from 'react';

class ViewOld extends React.Component {
  constructor(props){
    super()
    this.state = {
      count: 0
    }
  }
  
  render(props) {

    return (
      <div className="viewOld">
        <div>{this.state.count} найдено</div>
        <h2>Просмотренные объекты</h2>
      </div>
    )
  }
}
export default ViewOld;