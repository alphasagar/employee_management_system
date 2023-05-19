
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

   const [salaryDetails, setData] = useState({});

   useEffect(() => {
      if (id) {
         axios.get(`${config.api_url}/salary/salary-detaills/${id}`)
            .then(res => {
               console.log(res.data);
               setData(res.data[0]);
            })
      }
   }, []);

   return (
      <section>
         <section id="inner-headline">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <h2 className="pageTitle">Details of Salary</h2>
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
                                 <h2 className='h2c'>Details of Salary ID : {salaryDetails.salary_id}</h2>
                              </div>
                              <br />
                           </div>
                        </div>
                        <section className="vh-100">
                        <table className="table table-striped table-bordered" style={{width:"70%"}}>
                        <thead className="thead-dark">
                           <tr>
                              <th scope="col" style={{width:'30%'}}>Column</th>
                              <th scope="col">Data</th>
                           </tr>
                        </thead>
                           <tbody>
                              <tr>
                                 <th className="thead-dark">Customer Name</th>
                                 <td>{salaryDetails.user_name}</td>
                              </tr>
                              <tr>
                                 <th className="thead-dark">Customer Email</th>
                                 <td className='invetorycf'>{salaryDetails.user_email}</td>
                              </tr>
                              <tr>
                                 <th className="thead-dark">Customer Contact</th>
                                 <td>{salaryDetails.user_mobile}</td>
                              </tr>
                              <tr>
                                 <th className="thead-dark">Leave Requested  For</th>
                                 <td>{salaryDetails.leave_name}</td>
                              </tr>
                              <tr>
                                 <th className="thead-dark">From Address</th>
                                 <td>{salaryDetails.salary_from_address}</td>
                              </tr>
                              <tr>
                                 <th className="thead-dark">To Address</th>
                                 <td>{salaryDetails.salary_to_address}</td>
                              </tr>
                              <tr>
                                 <th className="thead-dark">Shiting Date</th>
                                 <td>{salaryDetails.salary_date_time}</td>
                              </tr>
                              <tr>
                                 <th className="thead-dark">References</th>
                                 <td>{salaryDetails.salary_reference}</td>
                              </tr>
                              <tr>
                                 <th className="thead-dark">Salary Details</th>
                                 <td>{salaryDetails.salary_details}</td>
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