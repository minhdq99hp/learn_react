import {UPDATE} from '../actions/type';

const initialState = null;

const userListReducer = (state=initialState, action) => {
    switch(action.type){
        case UPDATE:{
            fetch('http://www.json-generator.com/api/json/get/cpVFyeDkXS?indent=2')
                .then(response => {
                    if(response.status !== 200){
                        console.log("Something's wrong. Status code: " + response.status);
                        return state;
                    }

                    response.json().then(data => {
                        console.log("OK");
                        return {...state, userList: data};
                    });
                })
                .catch(err => {
                    console.log('Fetch Error: ', err);
                    return state;
                });
            break;
        }
        default:
            return state;
    }
};

export default userListReducer;