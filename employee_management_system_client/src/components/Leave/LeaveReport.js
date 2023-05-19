
import React from 'react'
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from 'react-router-dom';
import config from '../../utils/config';

export default class LeaveReport extends React.Component {
   state = {
      leaves: []
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
  

   /**
    * Function for getting lists
    */
   componentDidMount() {
      if(window.sessionStorage.getItem("user_level_id") == "2") {
         axios.get(`${config.api_url}/leaves/all-leaves/`+window.sessionStorage.getItem("user_id"))
         .then(res => {
            const leaves = res.data;
            this.setState({ leaves });
            console.log(leaves);
         })
      } else {
         axios.get(`${config.api_url}/leaves/all-leaves/0`)
            .then(res => {
               const leaves = res.data;
               this.setState({ leaves });
               console.log(leaves);
            })
         }
   }

   /**
    * Function for deleting data
    * @param {*} id 
    */
   deleteData(id) {
      axios.delete(`${config.api_url}/leaves/${id}`)
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
                        <h2 className="pageTitle">Leave Report</h2>
                     </div>
                  </div>
               </div>
            </section>
            <section id="content">
               <div className="container content">
                  <div>
                     <div className="col-md-12">
                        <div>
                           <h2 className='h2c'>All Leave Report  </h2>
                        </div>
                        <br />
                     </div>
                  </div>
                  <div>
                     <div className='add-button btn btn-success'><Link to="/leave-add">Add Leave</Link></div>
                     <table className="table table-striped table-bordered table-hover">
                        <thead className="thead-dark">
                           <tr>
                              <th scope="col">ID</th>
                              <th>Name</th>
                              <th>From Date</th>
                              <th>To Date</th>
                              <th>Days</th>
                              <th>Leave Status</th>
                              <th>Actions</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              this.state.leaves
                                 .map(leave =>
                                    <tr>
                                       <th scope="row">{leave.leave_id}</th>
                                       <td>{leave.user_first_name} {leave.user_last_name}</td>
                                       <td>{leave.leave_from_date}</td>
                                       <td>{leave.leave_to_date}</td>
                                       <td>{leave.leave_total_days}</td>
                                       <td className={leave.leave_status}>{leave.leave_status}</td>
                                       <td>
                                          <Link to={"/leave-add/"+leave.leave_id}>
                                          <span className="glyphicon glyphicon-edit editi"></span>
                                          </Link>&nbsp;&nbsp;
                                          <a onClick={() => this.confirmatioBox(leave.leave_id)} href="#!">
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