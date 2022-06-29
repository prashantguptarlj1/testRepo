import React, { Component } from "react";

export default class Search extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      arr: ["a", "aa", "and", "b", "bcd"],
      returned: null,
    };
  }
  handleSearch = (e) => {
    if (e.target.value) {
      const iterated = this.state.arr.filter((element) => {
        if (element[0] == e.target.value) {
          return element;
        } else {
          return false;
        }
      });
      this.setState({ returned: iterated });
    }else{
        this.setState({ returned: null });
    }

    // console.log(e.target.value);
  };
  render() {
    // const {data} = this.props
    this.state.returned && console.log(this.state.returned);
    return (
      <div>
      {/* {this.props.data.name} */}
        <input type="text" onChange={this.handleSearch} />
        <ul>
          {this.state.returned &&
            this.state.returned.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
        </ul>
      </div>
    );
  }
}
