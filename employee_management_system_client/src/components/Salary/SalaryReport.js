
import React from 'react'
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from 'react-router-dom';
import config from '../../utils/config';

export default class SalaryReport extends React.Component {
   state = {
      salarys: []
   }
   
   /**
    * Confirmation Dialogue Implementation
    */
   confirmatioBox = (id) => {
      confirmAlert({
        title: 'Confirm to delete',
        message: 'Are you sure to delete this record ?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => this.deleteData(id)
          },
          {
            label: 'No'
          }
        ]
      });
    }

    download_slip = (salary_slip) => {
      window.location.replace('http://127.0.0.1:8080/api/v1/salaries/salary_slip/'+salary_slip);
    };
  

   /**
    * Function for getting lists
    */
   componentDidMount() {
      if(window.sessionStorage.getItem("user_level_id") == "2") {
      axios.get(`${config.api_url}/salaries/all-salaries/`+window.sessionStorage.getItem("user_id"))
         .then(res => {
            const salarys = res.data;
            this.setState({ salarys });
            console.log(salarys);
         })
      } else {
      axios.get(`${config.api_url}/salaries/all-salaries/0`)
         .then(res => {
            const salarys = res.data;
            this.setState({ salarys });
            console.log(salarys);
         })
      } 
   }

   /**
    * Function for deleting data
    * @param {*} id 
    */
   deleteData(id) {
      axios.delete(`${config.api_url}/salaries/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.componentDidMount();
      })
   }

   render() {
      return (
         <section>
            <section id="inner-headline">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <h2 className="pageTitle">Salary Report</h2>
                     </div>
                  </div>
               </div>
            </section>
            <section id="content">
               <div className="container content">
                  <div>
                     <div className="col-md-12">
                        <div>
                           <h2 className='h2c'>All Salary Report  </h2>
                        </div>
                        <br />
                     </div>
                  </div>
                  <div>
                  <div className='add-button btn btn-success'><Link to="/salary-add">Add Salary</Link></div>
                     <table className="table table-striped table-bordered table-hover">
                        <thead className="thead-dark">
                           <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Customer Name</th>
                              <th scope="col">Month</th>
                              <th>Total Paid Days</th>
                              <th>Basic</th>
                              <th>HRA</th>
                              <th>Total</th>
                              <th scope="col">Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              this.state.salarys
                                 .map(salary =>
                                    <tr>
                                       <th scope="row">{salary.salary_id}</th>
                                       <td>{salary.user_first_name} {salary.user_last_name}</td>
                                       <td>{salary.month_name}</td>
                                       <td>{salary.salary_working_days} Days</td>
                                       <td>{salary.salary_basic}</td>
                                       <td>{salary.salary_hra}</td>
                                       <td>{salary.salary_total}</td>
                                       <td>
                                          <Link to={"/salary-add/"+salary.salary_id}>
                                          <span className="glyphicon glyphicon-edit editi"></span>
                                          </Link>&nbsp;&nbsp;
                                          <a onClick={() => this.download_slip(salary.salary_slip)} href="#!">
                                             <span className="glyphicon glyphicon-download-alt"></span>
                                          </a>&nbsp;&nbsp; 
                                          <a onClick={() => this.confirmatioBox(salary.salary_id)} href="#!">
                                             <span className="glyphicon glyphicon-trash deletei"></span>
                                          </a>
                                       </td>
                                    </tr>
                                 )
                           }
                        </tbody>
                     </table>
                  </div>
               </div>
            </section>
         </section>
      )
   }
}