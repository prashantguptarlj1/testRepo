// import React, { Component } from "react";

// export default class Form extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       age: "",
//     };
//   }

//   handleName = (e) => {
//     this.setState({name: e.target.value})
//   }

//   handleAge = (e) => {
//     this.setState({age: e.target.value})
//   }

//   handleDetails = (e) => {
//     this.setState({[e.target.name]: e.target.value})
//   }

//   submitForm = (e) => {
//     e.preventDefault()
//     console.log(this.state.name, this.state.age)
//   }

//   render() {
//     // console.log(this.state)
//     return (
//       <div>
//         <form onSubmit={this.submitForm}>
//           <div>
//             <label>Name </label>
//             <input type="text" name='name' onChange={this.handleDetails}/>
//           </div>
//           <div>
//             <label>Age </label>
//             <input type="text" name='age' onChange={this.handleDetails}/>
//           </div>
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }


//Form in Functional component

import React from "react";
import { useState } from "react";

export default function Form() {
  const [details, setDetails] = useState({ name: "", address: "" });

  const handleName = (e) => {
    setDetails({ ...details, name: e.target.value });
  };

  const handleAddress = (e) => {
    setDetails({ ...details, address: e.target.value });
  };

  const handleDetails = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(details.name, details.address);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <label>Name </label>
          <input type="text" name='name' onChange={handleDetails} />
        </div>
        <div>
          <label>Address </label>
          <input type="text" name='address' onChange={handleDetails} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}




//Form in class componenet

// import React, { Component } from "react";

// export default class Form extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       age: "",
//     };
//   }

//   handleName = (e) => {
//     this.setState({name: e.target.value})
//   }

//   handleAge = (e) => {
//     this.setState({age: e.target.value})
//   }

//   submitForm = (e) => {
//     e.preventDefault()
//     console.log(this.state.name, this.state.age)
//   }

//   render() {
//     // console.log(this.state)
//     return (
//       <div>
//         <form onSubmit={this.submitForm}>
//           <div>
//             <label>Name </label>
//             <input type="text" onChange={this.handleName}/>
//           </div>
//           <div>
//             <label>Age </label>
//             <input type="text" onChange={this.handleAge}/>
//           </div>
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
