
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from 'react-router-dom';
import config from '../../utils/config';
import { withRouter } from "react-router"
import { useSearchParams, useNavigate, useParams } from 'react-router-dom';

const HopitalDetails = () => {

   // Function for edit //
   let { id } = useParams();

   const [userDetails, setData] = useState({});

   useEffect(() => {
      if (id) {
         axios.get(`${config.api_url}/user/${id}`)
            .then(res => {
               console.log(res.data);
               setData(res.data);
            })
      }
   }, []);

   return (
      <section>
         <section id="inner-headline">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <h2 className="pageTitle">Details of {userDetails.user_first_name} {userDetails.user_last_name}</h2>
                  </div>
               </div>
            </div>
         </section>
         <section id="content">
            <div className="container">
               <div className="about">
                  <section className="features">
                     <div className="container">
                        <div>
                           <div>
                              <div>
                                 <h2 className='h2c'>Employee Details</h2>
                              </div>
                              <br />
                           </div>
                        </div>
                        <section className="vh-100">
                        <table class="table table-striped table-bordered" style={{width:"50%"}}>
                        <thead class="thead-dark">
                           <tr>
                              <th scope="col">Column</th>
                              <th scope="col">Data</th>
                           </tr>
                        </thead>
                           <tbody>
                              <tr>
                                 <th class="thead-dark">Name</th>
                                 <td>{userDetails.user_first_name} {userDetails.user_last_name}</td>
                              </tr>
                              <tr>
                                 <th class="thead-dark">Contact</th>
                                 <td>{userDetails.user_mobile}</td>
                              </tr>
                              <tr>
                                 <th class="thead-dark">Email</th>
                                 <td>{userDetails.user_email}</td>
                              </tr>
                              <tr>
                                 <th class="thead-dark">Address</th>
                                 <td>{userDetails.user_address}</td>
                              </tr>
                              <tr>
                                 <th class="thead-dark">City</th>
                                 <td>{userDetails.user_city}</td>
                              </tr>
                              <tr>
                                 <th class="thead-dark">State</th>
                                 <td>{userDetails.user_state}</td>
                              </tr>
                           </tbody>
                           </table>
                        </section>
                     </div>
                  </section>
               </div>
            </div>
         </section>
      </section>
   )
}

export default HopitalDetails;