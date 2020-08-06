import React from 'react';
import SearchOld from './SearchOld.js';
import ViewOld from './ViewOld.js';
import Recommendation from './Recommendation.js';

class View extends React.Component {
  
  render(props) {

    return (
        <div className="">
            <SearchOld />
            <ViewOld />
            <Recommendation />
        </div>
    )
  }
}
export default View;