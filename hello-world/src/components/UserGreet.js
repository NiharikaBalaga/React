import React, { Component } from "react";

class UserGreet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
//1.
    // return (
    //     <div>
    //     <div>Hey Neha!</div>
    //     <div>Hey Manoj!</div>
    //     </div>
    // )

//2.
      if(this.state.isLoggedIn){
          return( <div>Hey Neha!</div>)
      }
      else{
          return(<div>Hey Manoj!</div>)
      }

 //3.     
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Hey Neha!</div>;
    // } else {
    //   message = <div>Hey Manoj!</div>;
    // }
    // return <div>{message}</div>;
//4.
    // return (
    //     this.state.isLoggedIn ?
    //     <div > Hey Neha! </div> :
    //     <div > Hey Manoj! </div>
    // )

    
  }
}

export default UserGreet;
