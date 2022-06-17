import React from "react";

class Info extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count:0,
    };
  }

  buttonPressed(){
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return(
      <div>
        <p>count: {this.state.count}</p>
        <button onClick={() => this.buttonPressed()}>click me</button>
      </div>
    )

    // const title = this.props.title;
    // return (
    //   <div>
    //     <h1>{title}</h1>
    //     <p>Manage your stuffs</p>
    //   </div>
    // );
  }
} 
// function Info(){
// const title ="This is my title.";
//     return (
//       <div>
//         <h1>{title}</h1>
//         <p>Manage your stuffs</p>
//       </div>
//     );
// }
// Info.defaultProps={
//   title: "Default",
// };
export default Info;
