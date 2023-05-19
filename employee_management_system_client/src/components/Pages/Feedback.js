
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
            <h2 className="pageTitle">Contact Us</h2>
         </div>
      </div>
   </div>
</section>
<section id="content">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div>
               <h2>Get In Touch</h2>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus ovident, doloribus omnis minus temporibus perferendis nesciunt..
            </div>
            <br />
         </div>
      </div>
      <div className="row">
         <div className="col-md-5">
            <form name="sentMessage" id="contactForm">
               <h3>Contact me</h3>
               <div className="control-group">
                  <div className="controls">
                     <input type="text" className="form-control" 
                        placeholder="Full Name" id="name" required
                        data-validation-required-message="Please enter your name" />
                     <p className="help-block"></p>
                  </div>
               </div>
               <div className="control-group">
                  <div className="controls">
                     <input type="email" className="form-control" placeholder="Email" 
                        required
                        data-validation-required-message="Please enter your email" />
                  </div>
               </div>
               <div className="control-group">
                  <div className="controls">
                     <textarea rows="10" cols="100" className="form-control" 
                       placeholder="Message" id="message"></textarea>
                  </div>
               </div>
               <div id="success"> </div>
               <button type="submit" className="btn btn-primary pull-right">Send</button><br />
            </form>
         </div>
         <div className="col-md-offset-1 col-md-6">
            {/* <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
            <div style="overflow:hidden;height:500px;width:600px;">
               <div id="gmap_canvas" style="height:500px;width:600px;"></div>
               <style>#gmap_canvas img{max-width:none!important;background:none!important}</style>
               <a className="google-map-code" href="http://www.trivoo.net" id="get-map-data">trivoo</a>
            </div>
            <script type="text/javascript"> function init_map(){var myOptions = {zoom:14,center:new google.maps.LatLng(40.805478,-73.96522499999998),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(40.805478, -73.96522499999998)});infowindow = new google.maps.InfoWindow({content:"<b>The Breslin</b><br/>2880 Broadway<br/> New York" });google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);</script> */}
         </div>
      </div>
   </div>
</section>
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
