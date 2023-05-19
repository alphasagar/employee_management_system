
import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import  PropTypes  from 'prop-types';


const Landing = ({isAuthenticated}) => {
    if(isAuthenticated){
        return <Navigate to ='/Dashboard'/> 
    }
return (
<section>
<section id="inner-headline">
   <div className="container">
      <div className="row">
         <div className="col-lg-12">
            <h2 className="pageTitle">About Employee Administration system</h2>
         </div>
      </div>
   </div>
</section>
<section id="content">
   <div className="container">
      <div className="about">
         <section className="features">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div>
                        <h2>About Employee Administration system</h2>
                           <p>Employee administration that uses coaching to motivate and build trust with workers can unlock enormous human potential. Yet, communication tactics alone may fall short in the face of multi-generational workforces, rising numbers of freelance workers and complex regulations. Technology, whether it’s workforce administration software or a human capital administration solution, can often help business leaders maintain productivity more effectively in rapidly changing environments.</p>
                           <p>Employee administration is the process by which employers ensure workers perform their jobs to the best of their abilities so as to achieve business goals. It typically entails building and maintaining healthy relationships with employees, as well as monitoring their daily labor and measuring progress. In this way, employers can identify opportunities for improvement and recognize achievements.</p>
                      </div>
                     <br/>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6">
                     <div className="features-item">
                        <div className="features">
                           <div className="icon">
                              <i className="icon-map icons"></i>
                           </div>
                           <div className="features-content">
                              <h3>Employee Administration system</h3>
                              <p>Employee administration that uses coaching to motivate and build trust with workers can unlock enormous human potential. </p>
                           </div>
                        </div>
                        <div className="features">
                           <div className="icon">
                              <i className="icon-envelope-open icons"></i>
                           </div>
                           <div className="features-content">
                              <h3>Salary Administration System</h3>
                              <p>Employee administration that uses coaching to motivate and build trust with workers can unlock enormous human potential. </p>
                           </div>
                        </div>
                        <div className="features">
                           <div className="icon">
                              <i className="icon-badge icons"></i>
                           </div>
                           <div className="features-content">
                              <h3>Leave Administration System</h3>
                              <p>Employee administration that uses coaching to motivate and build trust with workers can unlock enormous human potential. </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <img className="img-responsive" src="img/home.jpeg" alt="" />
                  </div>
               </div>
            </div>
         </section>
      </div>
   </div>
</section>
</section>
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
