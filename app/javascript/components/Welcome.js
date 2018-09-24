import React, {Component} from 'react';
import Login from "./Login";
import SignUp from "./SignUp";
import Edit from "./Edit";
import PropTypes from "prop-types"

class Welcome extends Component {
  getDefaultProps() {
    return {
      page: 'Login'
    };
  }

  changePage(newPage) {
   this.setState({
    page: newPage
   })
  }

  render() {
    switch(this.state.page) {
     case 'Login':
      return <Login changePage={this.changePage}/>
     case 'SignUp':
      return <Signup changePage={this.changePage}/>
     case 'Edit':
      return <Edit changePage={this.changePage}/>
    }
   }
 }

//     return (
//       <React.Fragment>
//         Greeting: {this.props.greeting}
//       </React.Fragment>
//     );
//   }
// }
//
// Welcome.propTypes = {
//   greeting: PropTypes.string
// };



 export default Welcome
