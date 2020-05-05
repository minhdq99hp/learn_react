import React from 'react';
import {connect} from 'react-redux';
import {UPDATE} from '../actions/type';

class UserList extends React.Component {
    render(){
        return <div>
            <button onClick={this.props.handleUpdate}>Update</button>
        </div>;
    }
}


const mapStateToProps = state => {
    return {
        data: state.userList
    };
}

const mapDispatchToProps = dispatch => {
    return {
        handleUpdate: () => dispatch({type: UPDATE}),
    };
}

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList);

export default UserListContainer;