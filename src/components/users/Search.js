import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        clearShow: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    onchange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter some text', 'danger');
        }
        else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }

    };
    render() {
        const { clearUsers, clearShow } = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <div className="form-group">
                        <input type="text" name="text" placeholder="Serach User.." className="form-control" value={this.state.text} onChange={this.onchange} />
                        <input type="submit" value="Search" className="btn btn-dark btn-block" />
                    </div>
                </form>
                {clearShow && <button className="btn btn-danger btn-block" onClick={clearUsers} >Clear</button>
                }



            </div>
        )
    }
}

export default Search
