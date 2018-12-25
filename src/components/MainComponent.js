import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//this state obtained here is from redux store.
const mapStateToProps = state =>{
        return {
          //Now these below will be available as props to the main component
            dishes: state.dishes,
            comments: state.comments,
            promotions:state.promotions,
            leaders:state.leaders
        }
}

class Main extends Component {

  constructor(props){
    super(props);
   
  }
 
  render() {
    const HomePage= () =>{
      return(
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotions={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}              
              />
      
      );
    }
    //a function comopoent DishWith Id
    //the menu componet would send three parameters: match,location, history
    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment)=>comment.dishId=== parseInt(match.params.dishId, 10))}
        />
      );

    }

    return (
      <div>
        <Header />
          <Switch>
            <Route path="/home" component={HomePage} />            
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />}/>
            <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />     
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component={Contact} />
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>    

    );
  }
}
//To connect the compoent to the redux store. change the below. 
export default withRouter(connect(mapStateToProps)(Main));

/*
   <Menu dishes={this.state.dishes} 
               onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetail 
                    dish={this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]} />
*/