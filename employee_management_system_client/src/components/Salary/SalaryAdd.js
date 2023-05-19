import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useSearchParams, useNavigate, useParams } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import config from '../../utils/config';

const SalaryAdd = ({ setAlert, salary, isAuthenticated }) => {

   let { url } = `${config.api_url}/save-salaries`;
   const navigate = useNavigate();
   // Function for edit //
   let { id } = useParams();

   const [userDropDown, setuserDropDown] = useState([{
      user_id: '',
      user_name: ''
   }]);

   const [monthDropDown, setMonthDropDown] = useState([{
      salary_id: '',
      salary_name: ''
   }]);

   const [formData, setFormData] = useState({
      salary_employee_id: '',
      salary_month: '',
      salary_working_days: '',
      salary_basic: '',
      salary_hra: '',
      salary_mediclaim: '',
      salary_ta: '',
      salary_da: '',
      salary_reimbursement: '',
      salary_ca: '',
      salary_others: '',
      salary_dpf: '',
      salary_dtax: '',
      salary_desc: '',
      salary_total: '',
      salary_dedc: ''
   });

    // Creating FormData Form elements ////
    const [message, setMessage] = useState({
      show_message: false,
      error_type: '',
      msg: ''
    });

    const [selectedFile, setSelectedFile] = useState();

    // On file select (from the pop up)
   const onFileChange = (e) =>
      setSelectedFile(e.target.files[0]);


   useEffect(() => {
      if (id) {
         axios.get(`${config.api_url}/salaries/${id}`)
            .then(res => {
               console.log('Edit Data');
               console.log(res.data)
               setFormData(res.data);
            })
      }
      // Get  Salary Group Dropdown
      axios.get(`${config.api_url}/user`)
      .then(res => {
         setuserDropDown(res.data);
      })

      // Get  Salary Salary Dropdown
      axios.get(`${config.api_url}/months`)
      .then(res => {
         setMonthDropDown(res.data);
      })
   }, []);

   // Handlinng Change Event
   const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

   // Handling Submit
   const onSubmit = async (e) => {
      e.preventDefault();

       // Fileupload Functionalities
       const fileData = new FormData();
       if(selectedFile){
          fileData.append('salary_slip', selectedFile, selectedFile.name);
          url =  `${config.api_url}/save-salaries`;
       } else {
          url = `${config.api_url}/save-salaries-withoutimage`;
       }
       
       
       // Put data form in FormData
       for (let key in formData) {
          console.log("Insie Iterator"+formData[key])
          fileData.append(key, formData[key]);
       }


      // On submit //
      if (id) {
         console.log(url);
            axios({
               method: "put",
               url: url,
               data: fileData
            })
            .then(function (response) {
               //handle success
               console.log("Success  : ");
               console.log(response);
               navigate("/salary-report")
            })
            .catch(function (response) {
               //handle error
               console.log("Error  : ");
               console.log(response);
            });
      } else {
         console.log("Starting Upload");
         axios({
            method: "post",
            url: url,
            data: fileData
         })
         .then(function (response) {
            //handle success
            console.log("Success  : ");
            console.log(response);
            navigate("/salary-report")
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
                     <h2 className="pageTitle">Salary Entry</h2>
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
                                 <h2 className='h2c'>Salary Entry Form</h2>
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
                           <div className="d-flex justify-content-center align-items-center h-100">
                              <form className="form-horizontal" onSubmit={onSubmit}>
                                 <div className="form-group frm50">
                                    <label className="control-label col-sm-4" htmlFor="email">Select User :</label>
                                    <div className="col-sm-8">
                                    <select name='salary_employee_id' value={formData.salary_employee_id} onChange={e => onChange(e)}  className="form-control">
                                       <option>Select User</option>
                                       {userDropDown.map((option) => (
                                          <option value={option.user_id}>{option.user_first_name} {option.user_last_name}</option>
                                       ))}
                                    </select>
                                    </div>
                                 </div>
                                 <div className="form-group frm50">
                                    <label className="control-label col-sm-4" htmlFor="email">Select Month :</label>
                                    <div className="col-sm-8">
                                    <select name='salary_month' value={formData.salary_month} onChange={e => onChange(e)}  className="form-control">
                                       <option>Select Month</option>
                                       {monthDropDown.map((option) => (
                                          <option value={option.month_id}>{option.month_name}</option>
                                       ))}
                                    </select>
                                    </div>
                                 </div>
                                 <div className="form-group frm50">
                                    <label className="control-label col-sm-4" htmlFor="email">Total Working Days :</label>
                                    <div className="col-sm-8">
                                       <input type="number" value={formData.salary_working_days} onChange={e => onChange(e)} name="salary_working_days" className="form-control" placeholder="Total Working Days" required />
                                    </div>
                                 </div>
                                 <div className="form-group frm50">
                                    <label className="control-label col-sm-4" htmlFor="email">Basic Salary :</label>
                                    <div className="col-sm-8">
                                       <input type="number" value={formData.salary_basic} onChange={e => onChange(e)} name="salary_basic" className="form-control" placeholder="Salary Basic" required />
                                    </div>
                                 </div>
                                 <div className="form-group frm50">
                                    <label className="control-label col-sm-4" htmlFor="email">Total HRA :</label>
                                    <div className="col-sm-8">
                                       <input type="number" value={formData.salary_hra} onChange={e => onChange(e)} name="salary_hra" className="form-control" placeholder="Total HRA" required />
                                    </div>
                                 </div>
                                 <div className="form-group frm50">
                                    <label className="control-label col-sm-4" htmlFor="email">Mediclaim :</label>
                                    <div className="col-sm-8">
                                       <input type="number" value={formData.salary_mediclaim} onChange={e => onChange(e)} name="salary_mediclaim" className="form-control" placeholder="Salary Mediclaim" required />
                                    </div>
                                 </div>
                                 <div className="form-group frm50">
                                    <label className="control-label col-sm-4" htmlFor="email">Travel Allowance :</label>
                                    <div className="col-sm-8">
                                       <input type="number" value={formData.salary_ta} onChange={e => onChange(e)} name="salary_ta" className="form-control" placeholder="Travel Allowance" required />
                                    </div>
                                 </div>
                                 <div className="form-group frm50">
                                    <label className="control-label col-sm-4" htmlFor="email">Dearness Allowance :</label>
                                    <div className="col-sm-8">
                                       <input type="number" value={formData.salary_da} onChange={e => onChange(e)} name="salary_da" className="form-control" placeholder="Total DA" required />
                                    </div>
                                 </div>
                                 <div className="form-group frm50">
                                    <label className="control-label col-sm-4" htmlFor="email">Reimbursement :</label>
                                    <div className="col-sm-8">
                                       <input type="number" value={formData.salary_reimbursement} onChange={e => onChange(e)} name="salary_reimbursement" className="form-control" placeholder="Salary Reimbursement" required />
                                    </div>
                                 </div>
                                 <div className="form-group frm50">
                                    <label className="control-label col-sm-4" htmlFor="email">Conveyance Allowance :</label>
                                    <div className="col-sm-8">
                                       <input type="number" value={formData.salary_ca} onChange={e => onChange(e)} name="salary_ca" className="form-control" placeholder="Salary CA" required />
                                    </div>
                                 </div>
                                 <div className="form-group frm50">
                                    <label className="control-label col-sm-4" htmlFor="email">Others Components :</label>
                                    <div className="col-sm-8">
                                       <input type="number" value={formData.salary_others} onChange={e => onChange(e)} name="salary_others" className="form-control" placeholder="Others Salary" required />
                                    </div>
                                 </div>
                                 <div className="form-group frm50">
                                    <label className="control-label col-sm-4" htmlFor="email">Provident Fund :</label>
                                    <div className="col-sm-8">
                                       <input type="number" value={formData.salary_dpf} onChange={e => onChange(e)} name="salary_dpf" className="form-control" placeholder="Salary DPF" required />
                                    </div>
                                 </div>
                                 <div className="form-group frm50">
                                    <label className="control-label col-sm-4" htmlFor="email">Tax Deduction :</label>
                                    <div className="col-sm-8">
                                       <input type="number" value={formData.salary_dtax} onChange={e => onChange(e)} name="salary_dtax" className="form-control" placeholder="Salary Dtax" required />
                                    </div>
                                 </div>
                                 <div className="form-group frm50">
                                    <label className="control-label col-sm-4" htmlFor="email">Total Deduction :</label>
                                    <div className="col-sm-8">
                                       <input type="number" value={formData.salary_dedc} onChange={e => onChange(e)} name="salary_dedc" className="form-control" placeholder="Total Deduction" required />
                                    </div>
                                 </div>
                                 <div className="form-group frm50">
                                    <label className="control-label col-sm-4" htmlFor="email">Total Salary :</label>
                                    <div className="col-sm-8">
                                       <input type="number" value={formData.salary_total} onChange={e => onChange(e)} name="salary_total" className="form-control" placeholder="Total Salary" required />
                                    </div>
                                 </div>
                                 <div className="form-group frm50">
                                    <label className="control-label col-sm-4" htmlFor="email">Description :</label>
                                    <div className="col-sm-8">
                                       <textarea name="salary_desc" onChange={e => onChange(e)} className="form-control" placeholder="Enter details of Salary" required value={formData.salary_desc}></textarea>
                                    </div>
                                 </div>
                                 <div className="form-group frm50">
                                    <label className="control-label col-sm-4" htmlFor="email">Upload Salary Slip:</label>
                                    <div className="col-sm-8">
                                       <input type="file" value={formData.salary_slip} onChange={e => onFileChange(e)} className="form-control" placeholder="User Image" />
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <div className="col-sm-offset-4 col-sm-8">
                                       <button type="submit" className="btn btn-default">Submit</button>&nbsp;&nbsp;
                                       <button type="reset" className="btn btn-danger">Reset</button>
                                    </div>
                                 </div>
                                 <input type="hidden" value={window.sessionStorage.getItem("user_id")} className="form-control" id="salary_employee_id" name="salary_employee_id" />
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

SalaryAdd.propTypes = {
   setAlert: PropTypes.func.isRequired,
   salary: PropTypes.func.isRequired,
   isAuthenticated: PropTypes.bool

};
const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert })(SalaryAdd);