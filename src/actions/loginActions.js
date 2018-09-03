import LoginService from '../services/LoginService';
import Util from '../util/Util';
import * as displayMessageActions from '../actions/displayMessageActions';
import {actionTypes} from './actionTypes';

export function login(username, password) {
 
  return (dispatch) => {
  
    return LoginService.login(username,password).then(result => {
      if(result.status == 200){
        Util.saveUserTokenAndUserToLocalStorage(result.headers['x-auth-token'],result.data);
        dispatch(doLoggin(result.data));
      }else{
        dispatch(displayMessageActions.displayError(result.response.data));
      }
    }).catch(error => {
      throw (error);
    });

  };
   
}

export function checkLogin() {
 
  return (dispatch) => {
  
    return LoginService.checkLogin().then(result => {

      if(result.status==200){
        dispatch(doLoggin(result.data));
      }

    }).catch(error => {
      throw (error);
    });

  };
   
}

export function doLoggin(obj){
  return {
    type: actionTypes.DO_LOGIN,
    obj
  };
}


