
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
            <h2 className="pageTitle">Feedback Form</h2>
         </div>
      </div>
   </div>
</section>
<section id="content">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div>
               <h2>Write your Feedback about the website</h2>
               Write your valuable feedback about the webiste leave
            </div>
            <br />
         </div>
      </div>
      <div className="row">
         <div className="col-md-5">
         <form class="form-feedback feedback_form"  ngNativeValidate  method="post" id="contactForm">
          <div class="row">
              <div class="col-12">
                  <div class="form-group">
                      <textarea  required
                      class="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" placeholder=" message"></textarea>
                  </div>
              </div>
              <div class="col-sm-6">
                  <div class="form-group">
                      <input required
                     class="form-control valid" name="name" id="name" type="text" placeholder="Enter your name" />
                  </div>
              </div>
              <div class="col-sm-6">
                  <div class="form-group">
                      <input required
                      class="form-control valid" name="email" id="email" type="email" placeholder="Email" />
                  </div>
              </div>
              <div class="col-12">
                  <div class="form-group">
                      <select name="feedback_rating" required class="form-control valid">
                        <option value="" selected>Select Rating</option>
                        <option value="1">1 Star</option>
                        <option value="1">2 Star</option>
                        <option value="1">3 Star</option>
                        <option value="1">4 Star</option>
                        <option value="1">5 Star</option>
                      </select>
                  </div>
              </div>
          </div>
          <div class="form-group mt-3">
              <button type="submit" class="button button-contactForm boxed-btn">Submit Feedback</button>
          </div>
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
