import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Notiflix from "notiflix";

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            Password: '',
            EmailRegex :  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        }
    }

    componentDidMount(){
        const script = document.createElement("script");
        script.src = "assets/js/pages/form-wizard.init.js";
        script.async = true;
        document.body.appendChild(script);

        // var login=localStorage.getItem('LoginDetail');
        // var details=JSON.parse(login)
        // if(details!=null){
        //     this.props.history.push('./dashboard')
        // } 

    }

    onPost = () =>{
        // console.log(this.props.LoginCred.Username)
        // console.log( this.props.LoginCred.Password)
        // Notiflix.Loading.Dots('');
        // PostApiCall.postRequest ({
        //     email : this.props.LoginCred.Username.trim(),
        //     password : this.props.LoginCred.Password.trim()
        // },"AuthanticateAdmin").then((LoginCovid) =>
        // LoginCovid.json().then(obj => {

        //     if(LoginCovid.status == 200 || LoginCovid.status == 201){

        //         localStorage.setItem('OldPassword',JSON.stringify(this.props.LoginCred.Password))
        //          localStorage.setItem('LoginDetail',JSON.stringify(obj.data))   

        //         Notiflix.Loading.Remove()
        //         window.location.href = `${process.env.PUBLIC_URL}/dashboard`
                
        //     }else{
        //         Notiflix.Loading.Remove()
        //       Notiflix.Notify.Failure('Login Failure.')
        //     }
        // })
        // )
    }


     
    // onLogInButtonClicked = () =>{

    //     if (this.props.LoginCred.Username != '') {
    //         if (this.state.EmailRegex.test(this.props.LoginCred.Username)) {
    //             if (this.props.LoginCred.Password != '') {
    //             //    this.onPost();
    //             } else { Notiflix.Notify.Failure('Please Enter Password'); }
    //         } else { Notiflix.Notify.Failure('Please Enter Correct Email Address'); }
    //     }else {Notiflix.Notify.Failure('Please Enter Email or Mobile');} 
    // }

    SignupButtonClicked = () =>{
        window.location.href = `${process.env.PUBLIC_URL}/`
    }

    // handleNameChange = event =>{
    //     this.props.setUsername(event.target.value)
    // }

    

    render() {
        return (
            <div className="App">
                <div class="account-pages my-5">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-6">
                                <div class="card logincard">
                                    <div class="card-body p-0">
                                        <div class="row">
                                            <div class="col-md-12 p-5">
                                                <div class="mx-auto mb-5">
                                                    <a href="index.html">
                                                        {/* <img src="assets/images/logo.png" alt="Eguru logo" style={{ width: '29%' }} /> */}
                                                    </a>
                                                </div>
                                                <p class="text-muted mt-1 mb-4">Enter your Details
                                                SignUp</p>

                                                <form onSubmit={(e) => {
                                                    e.preventDefault()
                                                }} class="authentication-form">
                                                    <div class="form-group">
                                                        <label class="form-control-label">First Name</label>
                                                        <div class="input-group input-group-merge">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">
                                                                    {/* <i class="icon-dual" data-feather="phone"></i> */}
                                                                    <i dangerouslySetInnerHTML={{ __html: window.feather.icons.phone.toSvg() }}></i>
                                                                </span>
                                                            </div>
                                                            <input type="text" class="form-control" id="email" 
                                                            // maxLength ="10"
                                                            
                                                             placeholder="Enter Your First Name"></input>
                                                        </div>
                                                    </div>
                                                    <div class="form-group mt-4">
                                                        <label class="form-control-label">Last Name</label>
                                                        <div class="input-group input-group-merge">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">
                                                                    {/* <i class="icon-dual" data-feather="lock"></i> */}
                                                                    <i dangerouslySetInnerHTML={{ __html: window.feather.icons.lock.toSvg() }}></i>
                                                                </span>
                                                            </div>
                                                            <input type="password" class="form-control" id="password" 
                                                            // value={this.props.LoginCred.Password}
                                                            // onChange={this.handlePasswordChange.bind(this)}
                                                            placeholder="Enter Your Last Name"></input>
                                                        </div>
                                                    </div>

                                                    <div class="form-group mt-4">
                                                        <label class="form-control-label">Email</label>
                                                        <div class="input-group input-group-merge">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">
                                                                    {/* <i class="icon-dual" data-feather="lock"></i> */}
                                                                    <i dangerouslySetInnerHTML={{ __html: window.feather.icons.lock.toSvg() }}></i>
                                                                </span>
                                                            </div>
                                                            <input type="password" class="form-control" id="password" 
                                                            // value={this.props.LoginCred.Password}
                                                            // onChange={this.handlePasswordChange.bind(this)}
                                                            placeholder="Enter Your Email"></input>
                                                        </div>
                                                    </div>

                                                    <div class="form-group mt-4">
                                                        <label class="form-control-label">Gender</label>
                                                        <div class="input-group input-group-merge">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">
                                                                    {/* <i class="icon-dual" data-feather="lock"></i> */}
                                                                    <i dangerouslySetInnerHTML={{ __html: window.feather.icons.lock.toSvg() }}></i>
                                                                </span>
                                                            </div>
                                                            <select type="password" class="form-control" id="password" 
                                                            
                                                            placeholder="Enter Your Gender">
                                                                <option value="A">...</option>
                                                                <option value="A">Male</option>
                                                            <option value="B">Female</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="form-group mt-4">
                                                        <label class="form-control-label">Password</label>
                                                        <div class="input-group input-group-merge">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">
                                                                    {/* <i class="icon-dual" data-feather="lock"></i> */}
                                                                    <i dangerouslySetInnerHTML={{ __html: window.feather.icons.lock.toSvg() }}></i>
                                                                </span>
                                                            </div>
                                                            <input type="password" class="form-control" id="password" 
                                                            // value={this.props.LoginCred.Password}
                                                            // onChange={this.handlePasswordChange.bind(this)}
                                                            placeholder="Enter Your Password"></input>
                                                        </div>
                                                    </div>

                                                    <div class="form-group mt-4">
                                                        <label class="form-control-label">Confirm Password</label>
                                                        <div class="input-group input-group-merge">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">
                                                                    {/* <i class="icon-dual" data-feather="lock"></i> */}
                                                                    <i dangerouslySetInnerHTML={{ __html: window.feather.icons.lock.toSvg() }}></i>
                                                                </span>
                                                            </div>
                                                            <input type="password" class="form-control" id="password" 
                                                            // value={this.props.LoginCred.Password}
                                                            // onChange={this.handlePasswordChange.bind(this)}
                                                            placeholder="Confirm Your Password"></input>
                                                        </div>
                                                    </div>
                                                    <div class="form-group mb-0 text-center loginbtn">
                                                        <button class="btn btn-primary btn-block" type="submit"
                                                        onClick={this.SignupButtonClicked.bind(this)}> Signup </button>
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
        );
    }
}

// function mapStateToProps(state){
//     return{
//         LoginCred : state.login,
//     }
// }


export default SignUp;