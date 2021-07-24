import React, { Component } from 'react'

export class UserItem extends Component {

        // we can get the same result without using constructor here


    // constructor(){
    //     super();
    //     console.log(123);
       //   this.state   // write state here
    // }

    // state = {
    //     id : 'id',
    //     login:'FrazShabbir',
    //     avatar_url: 'https://avatars.githubusercontent.com/u/54416107?v=4',
    //     html_url : 'https://github.com/FrazShabbir'
    // }

    render() {
        const {login, avatar_url, html_url} = this.props.user;
        return (
            
            <div className='card text-center'>
                <img src={avatar_url} alt={login} className='round-img' style={{width:'60px'}}/>
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className='btn btn-dark btn-sm my-1' > More</a>
                </div>
            </div>
        )
    }
}

export default UserItem
