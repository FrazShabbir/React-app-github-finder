import React, { Component } from 'react'

export class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
    }
    render() {
        const {
            id,
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable

        } = this.props.user;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h1>{id}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default User
