import React from 'react';
import {connect} from 'react-redux';
import {UPDATE} from '../actions/type';

class UserList extends React.Component {
    render(){
        console.log(this.props.data);

    const listNames = ["Minh", "Diep", "Loc"].map((d) => <li>{d}</li>);
        return <div>
            <button onClick={this.props.handleUpdate}>Update</button>
            <ul>{this.props.data.map((d) => {
                return <li>{d.name}</li>;
            })}
            </ul>
            <ul>
                {listNames}
            </ul>
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