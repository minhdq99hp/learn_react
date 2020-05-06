import {UPDATE} from '../actions/type';

const initialState = [];

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
                        console.log(data);
                        return data;
                    });
                })
                .catch(err => {
                    console.log('Fetch Error: ', err);
                    return state;
                });
            return state;
        }
        default:
            return state;
    }
};

export default userListReducer;