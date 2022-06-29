import React, { Component } from "react";

export default class Pagenation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      ContentCount: 44,
      perPage: 21
    };
  }

  componentDidMount(){
    this.setState({
        page: this.state.page + 1
    })
  }

  handleLeft = () => {
    
    this.setState({
        page: this.state.page - 1
    })
    if(document.getElementById('btnr').disabled == true){
        document.getElementById('btnr').disabled = false
    }
  };

  handleRight = () => {
    if(this.state.page + 1 > Math.ceil(this.state.ContentCount/this.state.perPage)){ 
        document.getElementById('btnr').disabled = true
    }else{
        this.setState({
        page: this.state.page + 1
    })
    }
    
    // console.log(this.state.page, Math.ceil(this.state.ContentCount/this.state.perPage), this.state.ContentCount, this.state.perPage)
  };

  componentDidUpdate(){
    console.log(this.state.page, Math.ceil(this.state.ContentCount/this.state.perPage), this.state.ContentCount, this.state.perPage)
  }

  render() {
    return (
      <div>
        <button disabled = {this.state.page <=1} onClick={this.handleLeft}>left</button>
        <button id='btnr' onClick={this.handleRight}>Right</button>
      </div>
    );
  }
}
