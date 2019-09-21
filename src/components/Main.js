import React,{Component} from 'react';
import {connect} from 'react-redux'
class Main extends Component {
    
    render() {
        return(<React.Fragment>
            <h1>{`Hello Tiny`}</h1>
       </React.Fragment>)

        }
    }
    function mapStateToProps(state) {
        return {
           
        };
    }
    
    function mapDispatchToProps(dispatch) {
        return {
           
        }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(Main);