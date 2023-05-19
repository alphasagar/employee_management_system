import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useSearchParams, useNavigate, useParams } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import config from '../../utils/config';

const LeaveAdd = ({ setAlert, leave, isAuthenticated }) => {
   const navigate = useNavigate();
   // Function for edit //
   let { id } = useParams();

   const [userDropDown, setuserDropDown] = useState([{
      user_id: '',
      user_name: ''
   }]);

   const [display, setDisplay] = useState(false);


    // Creating FormData Form elements ////
    const [message, setMessage] = useState({
      show_message: false,
      error_type: '',
      msg: ''
    });

    // Creating FormData Form elements ////
    const [formData, setFormData] = useState({
      leave_id: '',
      leave_employee_id: '',
      leave_reason: '',
      leave_description: '',
      leave_from_date: '',
      leave_to_date: '',
      leave_status: '',
      leave_total_days: ''
   });

   useEffect(() => {
      if (id) {
         axios.get(`${config.api_url}/leaves/${id}`)
            .then(res => {
               console.log('Edit Data');
               console.log(res.data)
               setFormData(res.data);
            })
      }

      if(window.sessionStorage.getItem("user_level_id") == "2") {
         formData.leave_status = 'Pending';
         formData.leave_employee_id = window.sessionStorage.getItem("user_id");
         setDisplay('none');
      }

      // Get  User Dropdown
      axios.get(`${config.api_url}/user`)
      .then(res => {
         setuserDropDown(res.data);
      })
  
   }, []);

   // Handlinng Change Event
   const onChange = (e) => {
         setFormData({ ...formData, [e.target.name]: e.target.value });
         // console.log(formData);
         // // Calculate total days ////
         // if(e.target.name == 'leave_from_date' || e.target.name == 'leave_to_date' ) {
         //    console.log(formData);
         //    let from_date = new Date(formData.leave_from_date); 
         //    let to_date = new Date(formData.leave_to_date); 
         //    let differnce_time = to_date.getTime() - from_date.getTime(); 
         //    let total_days = (differnce_time / (1000 * 3600 * 24))+1; //Diference in Days
         //    alert(formData.leave_from_date)
         // }
      }
   

   // Handling Submit
   const onSubmit = async (e) => {
      e.preventDefault();
      // On submit //
      if (id) {
         axios({
            method: 'put',
            url: `${config.api_url}/leaves/${id}`,
            data: formData,
         })
            .then(function (response) {
               //handle success
               console.log("Success  : ");
               console.log(response);
               navigate("/leave-report")
               setMessage({
                  show_message: true,
                  error_type: 'alert-success',
                  msg: 'You have applied for leave !!!'
                });
            })
            .catch(function (response) {
               //handle error
               console.log("Error  : ");
               console.log(response);
            });
      } else {
         axios({
            method: 'post',
            url: `${config.api_url}/leaves`,
            data: formData,
         })
            .then(function (response) {
               //handle success
               console.log("Success  : ");
               console.log(response);
               navigate("/leave-report")
               setMessage({
                  show_message: true,
                  error_type: 'alert-success',
                  msg: 'You have applied for leave !!!'
                });
                setFormData(
                  { 
                     leave_id: '',
                     leave_employee_id: '',
                     leave_reason: '',
                     leave_description: '',
                     leave_from_date: '',
                     leave_to_date: '',
                     leave_status: '',
                     leave_total_days: ''
                  }
                );
            })
            .catch(function (response) {
               //handle error
               console.log("Error  : ");
               console.log(response);
            });
      }
   };

   return (
      <section>
         <section id="inner-headline">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <h2 className="pageTitle">Leave Administration</h2>
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
                                 <h2 className='h2c'>Leave Administration Form</h2>
                              </div>
                              <br />
                           </div>
                        </div>
                        {message.show_message ? (
                           <div className={'alert ' + message.error_type} role="alert">
                              {message.msg}
                           </div>
                        ) : (
                           ''
                        )}
                        <section className="vh-100">
                           <div className="d-flex justify-content-center align-items-center h-100 frmc">
                              <form className="form-horizontal" onSubmit={onSubmit}>
                                 <div className="form-group" style={{display:display}}>
                                    <label className="control-label col-sm-4" htmlFor="email">Select User :</label>
                                    <div className="col-sm-8">
                                    <select name='leave_employee_id' value={formData.leave_employee_id} onChange={e => onChange(e)}  className="form-control">
                                       <option>Select User</option>
                                       {userDropDown.map((option) => (
                                          <option value={option.user_id}>{option.user_first_name} {option.user_last_name}</option>
                                       ))}
                                    </select>
                                    </div>
                                 </div>
                                 <div className="form-group" style={{display:display}}>
                                    <label className="control-label col-sm-4" htmlFor="email">Select Status:</label>
                                    <div className="col-sm-8">
                                       <select name="leave_status" value={formData.leave_status} className="form-control" required onChange={e => onChange(e)} >
                                          <option>Leave Status</option>
                                          <option value='Pending'>Pending</option>
                                          <option value='Approved'>Approved</option>
                                          <option value='Disapproved'>Disapproved</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="email">Reason For Leave:</label>
                                    <div className="col-sm-8">
                                       <input type="text" value={formData.leave_reason} onChange={e => onChange(e)} name="leave_reason" className="form-control" placeholder="Reason For Leave" required />
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="email">From Date:</label>
                                    <div className="col-sm-8">
                                       <input type="date" value={formData.leave_from_date} onChange={e => onChange(e)} name="leave_from_date" className="form-control" placeholder="From Date" required />
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="email">To Date:</label>
                                    <div className="col-sm-8">
                                       <input type="date" value={formData.leave_to_date} onChange={e => onChange(e)} name="leave_to_date" className="form-control" placeholder="To Date" required />
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="email">Total Days:</label>
                                    <div className="col-sm-8">
                                       <input type="text" value={formData.leave_total_days} onChange={e => onChange(e)} name="leave_total_days" className="form-control" placeholder="Total Days" required />
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="email">Description :</label>
                                    <div className="col-sm-8">
                                       <textarea value={formData.leave_description} onChange={e => onChange(e)} name="leave_description" className="form-control" placeholder="Leave Description" required></textarea>
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <div className="col-sm-offset-4 col-sm-8">
                                       <button type="submit" className="btn btn-default">Submit</button>&nbsp;&nbsp;
                                       <button type="reset" className="btn btn-danger">Reset</button>
                                    </div>
                                 </div>
                              </form>
                           </div>
                        </section>
                     </div>
                  </section>
               </div>
            </div>
         </section>
      </section>
   );
};

LeaveAdd.propTypes = {
   setAlert: PropTypes.func.isRequired,
   leave: PropTypes.func.isRequired,
   isAuthenticated: PropTypes.bool

};
const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert })(LeaveAdd);