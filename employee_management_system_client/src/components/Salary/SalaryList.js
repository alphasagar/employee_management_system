
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from 'react-router-dom';
import config from '../../utils/config';

const HopitalList = () => {

   const [salarys, setData] = useState([]);
   const [search_text, setSearchData] = useState([]);
   const [filteredData, setFilteredData] = useState([]);
   /**
    * Function for getting lists
    */
   useEffect(() => {
      axios.get(`${config.api_url}/salary/salary-report`)
         .then(res => {
            const salarys = res.data;
            setData(salarys);
            setFilteredData(salarys);
            console.log(salarys);
         })
   }, []);

   const reset_search = () => {
      search_text.search_text = '';
      setFilteredData(salarys);
   };

   const search_data = () => {
      const newData = salarys.filter(salary => {
         return salary.bgroup_name.toLowerCase().includes(search_text.search_text.toLowerCase())
         || salary.salary_city.toLowerCase().includes(search_text.search_text.toLowerCase())
         || salary.salary_name.toLowerCase().includes(search_text.search_text.toLowerCase());
       });

      if(search_text.search_text) {
         setFilteredData(newData);
      } else {
         setFilteredData(salarys);
      }
   };

    // Handlinng Change Event
    const onChange = (e) =>
    setSearchData({[e.target.name]: e.target.value });

   return (
      <section>
         <section id="inner-headline">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <h2 className="pageTitle">Salary Inventory</h2>
                  </div>
               </div>
            </div>
         </section>
         <section id="content">
            <div className="container content">
               <div className="row">
                  <div className="col-md-12">
                     <div>
                        <h2>All Salary Inventory Report</h2>
                        These all are available salary salary. Kindly click on the salarys to see the details of it.
                     </div>
                     <br />
                     <form className="form-horizontal search_box">
                        <div className="form-group">
                           <label className="col-sm-2" htmlFor="email">Search Salary:</label>
                           <div className="col-sm-4">
                              <input type="text" onChange={e => onChange(e)} name="search_text" className="form-control" placeholder="Search Salary Group/City/Hospital" required />
                           </div>
                           <div className="col-sm-4">
                              <button type="button" className="btn btn-default" onClick={search_data}>Search</button>&nbsp;&nbsp;
                              <button type="reset" className="btn btn-danger" onClick={reset_search}>Reset</button>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
               <div className="row">
                  {
                     filteredData
                        .map(salary =>
                           <div className="col-sm-4 info-blocks">
                              <i className="icon-info-blocks"><Link to={"/salary-details/" + salary.salary_id}><img src={salary.bgroup_image} width={75} /></Link></i>
                              <div className="info-blocks-in">
                                 <h3><Link to={"/salary-details/" + salary.salary_id}><span style={{color:'red'}}>{salary.bgroup_name}</span> <span style={{color:'green'}}>({salary.salary_quantity} Available)</span></Link></h3>
                                 <p>
                                    <table>
                                       <tr>
                                          <td>Salary Salary : </td>
                                          <td> {salary.salary_name}</td>
                                       </tr>
                                       <tr>
                                          <td>Contact : </td>
                                          <td> {salary.salary_contact}</td>
                                       </tr>
                                       <tr>
                                          <td>Email :</td>
                                          <td>{salary.salary_email}</td>
                                       </tr>
                                       <tr>
                                          <td>City :</td>
                                          <td>{salary.salary_city}</td>
                                       </tr>
                                    </table>
                                 </p>
                              </div>
                           </div>
                        )
                  }
               </div>
            </div>
         </section>
      </section>
   )
}
export default HopitalList;