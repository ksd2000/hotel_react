import React from 'react';
import HotelInfo from './HotelInfo.js';
import hotelsData from './hotelsData.js';

class Recommendation extends React.Component {
  constructor(props){
    super()
    this.state = {
      count: 27
    }
  }

  render(props) {
    const hotelComponents = hotelsData.map(hotel =>
      <HotelInfo date={hotel} key={hotel.id} />)
      console.log(hotelComponents)
    return (
      <div className="recommendation">
        <div className="recommendation_header">
          <div>{this.state.count} найдено</div>
          <h2>Рекомендованные</h2>
        </div>
        <div className="recommendation-hotel">
          {hotelComponents}
    </div>
      </div>
    )
  }
}
export default Recommendation;