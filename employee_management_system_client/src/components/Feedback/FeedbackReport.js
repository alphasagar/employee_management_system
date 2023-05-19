
import React from 'react'
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from 'react-router-dom';
import config from '../../utils/config';

export default class FeedbackReport extends React.Component {
   state = {
      feedbacks: []
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
      axios.get(`${config.api_url}/feedback`)
         .then(res => {
            const feedbacks = res.data;
            this.setState({ feedbacks });
            console.log(feedbacks);
         })
   }

   /**
    * Function for deleting data
    * @param {*} id 
    */
   deleteData(id) {
      axios.delete(`${config.api_url}/feedback/${id}`)
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
                        <h2 className="pageTitle">Feedback Report</h2>
                     </div>
                  </div>
               </div>
            </section>
            <section id="content">
               <div className="container content">
                  <div>
                     <div className="col-md-12">
                        <div>
                           <h2 className='h2c'>All Feedback Report  </h2>
                        </div>
                        <br />
                     </div>
                  </div>
                  <div>
                     <table className="table table-striped table-bordered table-hover">
                        <thead className="thead-dark">
                           <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Name</th>
                              <th scope="col">Email</th>
                              <th scope="col">Rating</th>
                              <th scope="col">Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              this.state.feedbacks
                                 .map(feedback =>
                                    <tr>
                                       <th scope="row">{feedback.feedback_id}</th>
                                       <td>{feedback.feedback_name}</td>
                                       <td>{feedback.feedback_email}</td>
                                       <td>{feedback.feedback_rating} Star</td>
                                       <td>
                                          <Link to={"/feedback-details/"+feedback.feedback_id}>
                                          <span className="glyphicon glyphicon-share sharei"></span>
                                          </Link>&nbsp;&nbsp;
                                          <a onClick={() => this.confirmatioBox(feedback.feedback_id)} href="#!">
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