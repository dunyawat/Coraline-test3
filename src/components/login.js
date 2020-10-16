import React,{Component} from 'react';

class Login extends Component{

    constructor(){
        super();
        this.state = {
            err: ''
        };
    }

    login(e){
        e.preventDefault();
        var username = e.target.elements.username.value;
        var password = e.target.elements.password.value;

        if(password == 'P@$$W0RD'){
            this.props.history.push('/welcome/' + username);
        }else{
            this.setState({
                err:'กรุณาตรวจสอบข้อมูลให้ถูกต้อง'
            });
        }

    }

   render(){
     return(
        <div>
            <h3>Login</h3>
            <span style={{backgroundColor:"red",color:"white"}}>{this.state.err == '' ? '' : this.state.err }</span>
            <form method="post" onSubmit={this.login.bind(this)}>
                Username <input type="text" name="username" />
                <br />
                Password <input type="password" name="password" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
     )
  }
}

export default Login;