import React,{Component} from 'react'

class Welcome extends Component{

    render(){
        const {username} = this.props.match.params;
        console.log(username);
        return(
            <div>
                <h3>ยินดีต้อนรับ {username}</h3>
            </div>
        )
    }
}

export default Welcome;