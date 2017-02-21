import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
        };
    this.addItem = this.addItem.bind(this);
  }
    addItem() {
      console.log('hello')
  }


   render() {
      return (
         <div className="app">
            <div className="main">Med<span style={{color: 'rgb(95,150,223)'}}>i</span>tate
            </div>
            <p>
              Work. Meditation. Simplified
            </p>
            <div className="button-list">
            <ul className="button-list-ul">
              <li className="button-list-li"><Link to="/breath" style={{ textDecoration: 'none', color: 'white' }}>Breath</Link></li>
              <li className="button-list-li"><Link to="/intention" style={{ textDecoration: 'none', color: 'white' }}>Sound</Link></li>
              <li className="button-list-li"><Link to="/heart" style={{ textDecoration: 'none', color: 'white' }}>Heart</Link></li>
            </ul>
            </div>
       </div>
      );
   }
}

export default App;

