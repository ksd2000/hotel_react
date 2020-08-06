import React from 'react';
import Foto4 from './images/fot4.png';
import Foto5 from './images/fot5.png';
import Foto6 from './images/fot6.png';
import Foto7 from './images/fot7.png';

class Collections extends React.Component {
  
  render(props) {

    return (
        <div className="collections">
          <p className="">Сборник коллекций</p>
          <h2>Коллекции</h2>
          <div className="collections_column">
            <div>
              <img src={Foto4} alt='logo' />
              <p>Villas fo ......</p>
            </div>
            <div>
              <img src={Foto5} alt='logo' />
              <p>Villas fo ......</p>
            </div>
          </div>
          <div className="collections_column">
            <div>
              <img src={Foto6} alt='logo' />
              <p>Villas fo ......</p>
            </div>
            <div>
              <img src={Foto7} alt='logo' />
              <p>Villas fo ......</p>
            </div>
          </div>
          <div className="collections_column">
            <div>
              <img src={Foto4} alt='logo' />
              <p>Villas fo ......</p>
            </div>
            <div>
              <img src={Foto5} alt='logo' />
              <p>Villas fo ......</p>
            </div>
          </div>
        </div>
    )
  }
}
export default Collections;