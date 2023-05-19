import React,{Fragment} from 'react'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
//import { logout } from '../../actions/auth';
import { LOGOUT } from '../../actions/types';


const Landing = ({isAuthenticated}) => {
return (
<footer>
   <div id="sub-footer">
      <div className="container">
         <div className="row">
            <div className="col-lg-6">
               <div className="copyright">
                  <p>
                     <span>&copy; Employee Administration system</span>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
</footer>
)
}
Landing.propTypes={
isAuthenticated:PropTypes.bool
}
const mapStateToProps =state=>
 ({
isAuthenticated:state.auth.isAuthenticated
 })

export default connect(mapStateToProps)(Landing);
