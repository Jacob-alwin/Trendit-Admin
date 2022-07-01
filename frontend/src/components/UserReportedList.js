import React from 'react'
import avatar from "../img/avatar.jpg";


const MyReactComponent = (props) => 

<div class="card-body pe-4 ps-4 ">
                <div class="d-flex align-items-center">
                    <div class="user-user-image me-2">
                        <img src={avatar} class="fluid-img" />
                    </div>
                    <div class="user-user-name d-flex flex-column"><b>Pramod T V</b>
                    </div>
                </div>
                <div class="my-3">
                    <p className='m-2 '>Reason :</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
                <div class="d-flex">
                    {/* <div class="form-check mb-2 me-3">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Pending
                    </label>
                    </div> */}
                    <div class="form-check mb-2 p-2 me-3">
                    <button className='btn btn-outline-dark' onClick={props.onClose}>Clear</button>
                        {/* <label class="form-check-label" for="flexRadioDefault3">
                            Clear
                    </label> */}
                    </div>
                    {/* <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                        <label class="form-check-label" for="flexRadioDefault4">
                            Remove Comment
                    </label>
                    </div> */}
                </div>
            </div>


export default class UserReported extends React.Component {

  closeChild = () => {
    this.setState({
      showChild: false
    });
  };
  constructor(...args) {
    super(...args);
    this.state = {
      showChild: true
    };
  }
  render() {
    return (
      <div>
        {this.state.showChild && <MyReactComponent onClose={this.closeChild} />}
      </div>
    );
  }
}
