import React, { Fragment } from 'react'
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types'

const Users = ({ users, loading }) => {
    if (loading) {
        return <Spinner />
    } else {
        return (

            <Fragment>
                <div className="container">
                    <div className="row">
                        {users.map(user => (
                            <UserItem key={user.id} user={user} />
                        ))}
                    </div></div>
            </Fragment>
        )
    }



}


// const userStyle={
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
// gridGap:'1rem'
// }
Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}
export default Users
