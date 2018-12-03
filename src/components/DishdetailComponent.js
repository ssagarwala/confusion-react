import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText,  CardTitle } from 'reactstrap';

class Dishdetail extends Component{


    render(){
        if(this.props.dish != null){
                return(
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                                <CardBody>
                                    <CardTitle> {this.props.dish.name} </CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div> 
                        
                 
                );
        }
        else
        return (
                <div></div>
        )

    }
}
export default Dishdetail;