import React from "react"
import PropTypes from "prop-types"
class Welcome extends React.Component {
  createReactClass({
  getDefaultProps: function() {
    return {
      page: 'Login'
    };
  }
}

  changePage: function(newPage) {
   this.setState({
    page: newPage
   })
  },

  render () {
    switch(this.state.page) {
     case ‘login’:
      return <Login changePage={this.changePage}/>
     case ‘signup’:
      return <Signup changePage={this.changePage}/>
     case ‘edit’:
      return <Edit changePage={this.changePage}/>
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
