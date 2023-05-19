import axios from 'axios';

export default class CommonFunction extends Component {

  /**
    * Function for getting dropdown
    * @param {*} id 
    */
   getDropDown(api) {
    axios.delete(`${config.api_url}/common/${id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
      this.componentDidMount();
    })
 }
 
}
 