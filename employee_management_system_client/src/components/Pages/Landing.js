
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
<div className="home-page">
            <section id="banner">
               <div id="main-slider" className="flexslider">
                  <ul className="slides">
                     <li>
                        <img src="img/slides/1.jpeg" alt="flexslider" style={{height: 400}} /> 
                        <div className="flex-caption">
                           {/* <h3>Employee Administration system</h3>
                           <p>One stop solution for managing all blood banks and invetories</p> */}
                        </div>
                     </li>
                     <li>
                        <img src="img/slides/2.jpeg" alt="flexslider" style={{height: 400}}  /> 
                        <div className="flex-caption">

                        </div>
                     </li>
                  </ul>
               </div>
            </section>
            <section className="jumbobox">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <div>
                           <h1>Employee Administration system</h1>
                           <p>Employee administration that uses coaching to motivate and build trust with workers can unlock enormous human potential. Yet, communication tactics alone may fall short in the face of multi-generational workforces, rising numbers of freelance workers and complex regulations. Technology, whether it’s workforce administration software or a human capital administration solution, can often help business leaders maintain productivity more effectively in rapidly changing environments.</p>
                           <p>Employee administration is the process by which employers ensure workers perform their jobs to the best of their abilities so as to achieve business goals. It typically entails building and maintaining healthy relationships with employees, as well as monitoring their daily labor and measuring progress. In this way, employers can identify opportunities for improvement and recognize achievements.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section id="content">
               <div className="container">
                  <div className="row">
                     <div className="skill-home">
                        <div className="skill-home-solid clearfix">
                           <div className="col-md-3 text-center">
                              <div className="box">
                                 <span className="icons c1"><i className="icon-settings icons"></i></span> 
                                 <div className="box-area">
                                    <h3>Employee Administration</h3>
                                    <p>Employee administration that uses coaching to motivate and build trust with workers can unlock enormous human potential. Yet, communication tactics alone may fall short in the face of multi-generational workforces, rising numbers of freelance workers and complex regulations.</p>
                                    <p><a href="#">Learn More</a></p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-3 text-center">
                              <div className="box">
                                 <span className="icons c2"><i className="icon-login icons"></i></span> 
                                 <div className="box-area">
                                    <h3>Salary Administration</h3>
                                    <p>Employee administration that uses coaching to motivate and build trust with workers can unlock enormous human potential. Yet, communication tactics alone may fall short in the face of multi-generational workforces, rising numbers of freelance workers and complex regulations.</p>
                                    <p><a href="#">Learn More</a></p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-3 text-center">
                              <div className="box">
                                 <span className="icons c3"><i className="icon-user icons"></i></span> 
                                 <div className="box-area">
                                    <h3>Leave Administration</h3>
                                    <p>Employee administration that uses coaching to motivate and build trust with workers can unlock enormous human potential. Yet, communication tactics alone may fall short in the face of multi-generational workforces, rising numbers of freelance workers and complex regulations.</p>
                                    <p><a href="#">Learn More</a></p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-3 text-center">
                              <div className="box">
                                 <span className="icons c4"><i className="icon-home icons"></i></span> 
                                 <div className="box-area">
                                    <h3>Login  Administration</h3>
                                    <p>Employee administration that uses coaching to motivate and build trust with workers can unlock enormous human potential. Yet, communication tactics alone may fall short in the face of multi-generational workforces, rising numbers of freelance workers and complex regulations.</p>
                                    <p><a href="#">Learn More</a></p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
         </section> 
         <section className="aboutUs">
            <div className="container">
               <div className="row">
                  <div className="col-md-6"><img src="img/home.jpeg" className="img-center" alt="" /></div>
                  <div className="col-md-6">
                     <div>
                        <h2>About Employee Administration system</h2>
                           <p>Employee administration that uses coaching to motivate and build trust with workers can unlock enormous human potential. Yet, communication tactics alone may fall short in the face of multi-generational workforces, rising numbers of freelance workers and complex regulations. Technology, whether it’s workforce administration software or a human capital administration solution, can often help business leaders maintain productivity more effectively in rapidly changing environments.</p>
                           <p>Employee administration is the process by which employers ensure workers perform their jobs to the best of their abilities so as to achieve business goals. It typically entails building and maintaining healthy relationships with employees, as well as monitoring their daily labor and measuring progress. In this way, employers can identify opportunities for improvement and recognize achievements.</p>
                     </div>
                     <br/>
                  </div>
               </div>
            </div>
         </section>
   </div>
    <a href="#" className="scrollup"><i className="fa fa-angle-up active"></i></a>
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
