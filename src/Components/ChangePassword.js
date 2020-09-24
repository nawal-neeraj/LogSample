import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notiflix from "notiflix";
import PostApiCall from '../Api'
import moment from 'moment';
import {
    setOldPassword,
    setNewPassword,
    setConfirmNewPassword
} from '../Actions/LoginAction'



class ChangePassword extends Component {
    constructor(props){
        super(props)
        this.state={
           
            OldPassword:'',
            LoginDetail:[],

           
        }
    }

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "/assets/js/pages/form-wizard.init.js";
        script.async = true;
        document.body.appendChild(script);
             
    //      var Oldpassword=localStorage.getItem('OldPassword');
    //     var passdetails=JSON.parse(Oldpassword) 

    //       var login=localStorage.getItem('LoginDetail');
    //     var details=JSON.parse(login)
    //     // console.log(passdetails)
    //     console.log(details[0])
    //     if(details!=null){
    //         this.setState({
    //             OldPassword:passdetails,
    //             LoginDetail:details[0]
    //         })   
    //   }
    }

    onPost = () =>{
        Notiflix.Loading.Dots('Please wait...');

        // var login=localStorage.getItem('LoginDetail');
        // var details=JSON.parse(login)
      
        // PostApiCall.postRequest ({
        //     adminid : details[0].fld_adminid,
        //     password : this.props.Chngpswrd.ConfirmNewPassword,
        //     salt :details[0].fld_salt,
        //     updatedby : details[0].fld_adminid,
        //     updatedon : moment().format('lll')

        // },"ChangeAdminPassword").then((resultChange) =>
        // resultChange.json().then(objPassC => {
        //     if(resultChange.status == 200 || resultChange.status == 201){
        //     Notiflix.Loading.Remove()
        //                     Notiflix.Notify.Success('Password Successfully updated')
        //                     localStorage.removeItem('LoginDetail')
        //                         window.location.href='/'
        //     }else{
        //       Notiflix.Loading.Remove();
        //       Notiflix.Notify.Failure('something went wrong, try again later')
        //     }
        // })
        // )
    }

    handleOldPassword = event => {
        this.props.setOldPassword(event.target.value)
    }

    handleNewPassword = event => {
        this.props.setNewPassword(event.target.value)
    }

    handleConfirmNewPassword = event => {
        this.props.setConfirmNewPassword(event.target.value)
    }

    handleSubmit = () =>{
        if(this.props.Chngpswrd.OldPassword!= ''){
            if(this.props.Chngpswrd.OldPassword==this.state.OldPassword){
            if(this.props.Chngpswrd.NewPassword!=''){
                if(this.props.Chngpswrd.ConfirmNewPassword !=''){
                    if(this.props.Chngpswrd.NewPassword==this.props.Chngpswrd.ConfirmNewPassword){
                  

                    console.log(this.props.ChngPaswrd)
                }
                else{
                    Notiflix.Notify.Failure('New Password and Confirm Password do not match'); 
                }
            }
            else{
                Notiflix.Notify.Failure('Confirm Password Cannot be empty'); 
            }

            }
            else{
                Notiflix.Notify.Failure('New Password Cannot be empty'); 
            }

        }
        else{
            Notiflix.Notify.Failure('Incorrect Old Password');
          }

    }
        else{
            Notiflix.Notify.Failure('old Password Cannot be empty');
          }
    }


    render() {
        return (
            <div className="App">
                <div class="content-page">
                    <div class="content">
                        <div class="container-fluid">
                            <div class="row page-title">
                                <div class="col-md-12">
                                    <nav aria-label="breadcrumb" class="float-right mt-1">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                                            <li class="breadcrumb-item"><a href="#">Change Password</a></li>
                                        </ol>
                                    </nav>
                                    <h4 class="mb-1 mt-0">Change Password</h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="toast fade show" role="alert" aria-live="assertive"
                                                aria-atomic="true" data-toggle="toast">
                                                <div class="toast-header">
                                                    <strong class="mr-auto">Reset Password</strong>
                                                </div>
                                                <div class="toast-body">
                                                    <form class="needs-validation" onSubmit={(e)=>{
                                                        e.preventDefault()
                                                    }}>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <div class="form-group mb-3">
                                                                    <label for="validationCustom01">Old Password*</label>
                                                                    <input type="Password" class="form-control" id="validationCustom01"
                                                                        value={this.props.Chngpswrd.OldPassword}
                                                                        onChange={this.handleOldPassword.bind(this)} ></input>
                                                                   
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group mb-3">
                                                                    <label for="validationCustom01">New Password*</label>
                                                                    <input type="Password" class="form-control" id="validationCustom01"
                                                                        value={this.props.Chngpswrd.NewPassword}
                                                                        onChange={this.handleNewPassword.bind(this)}></input>
                                                                    
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-group mb-3">
                                                                    <label for="validationCustom01">Confirm New Password*</label>
                                                                    <input type="Password" class="form-control" id="validationCustom01"
                                                                        value={this.props.Chngpswrd.ConfirmNewPassword}
                                                                        onChange={this.handleConfirmNewPassword.bind(this)}></input>
                                                                   
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button class="btn btn-success" style={{ float: 'right', marginBottom: '9px' }}
                                                             onClick = {this.handleSubmit.bind(this)}> Submit</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        Chngpswrd: state.ChngPaswrd,
    }
}

export default connect(mapStateToProps, {
    setOldPassword,
    setNewPassword,
    setConfirmNewPassword
})(ChangePassword);









