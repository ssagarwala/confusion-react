import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import Dishdetail from './DishdetailComponent';
import { DISHES } from './shared/dishes';


class Main extends Component {

        constructor(props){
          super(props);
          this.state = {
            dishes : DISHES
          };
        }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
             <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
          </div>        
        </Navbar>      
        <Menu dishes={this.state.dishes} />
        <Dishdetail dish={} />
      </div>
    );
  }
}

export default App;
