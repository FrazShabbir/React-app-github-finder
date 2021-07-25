import React, { Component } from 'react'
import UserItem from './UserItem'
export class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'FrazShabbir',
                avatar_url: 'https://avatars.githubusercontent.com/u/54416107?v=4',
                html_url: 'https://github.com/FrazShabbir'
            },
            {
                id: '2',
                login: 'defunkt',
                avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
                html_url: 'https://github.com/defunkt'
            },
            {
                id: '3',
                login: 'pjhyett',
                avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
                html_url: 'https://github.com/pjhyett'
            }
        ]
    }
    render() {
        return (
            <>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </>
        )
    }
}

// const userStyle={
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
// gridGap:'1rem'
// }
export default Users
