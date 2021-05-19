import {AuthActions} from "../Reducers/Auth";
import Moment from 'moment'
import * as Crypto from "../../Utils/Crypto";
import {post} from "../../Model/Network/Config/Axios";
import {showToast} from "../../Components/Common/Toast/ToastCallback";

export const attemptlogin = (email,password) => {
    return function (dispatch) {
        post('auth/token',{username:email,password},(error,data)=>{
			if(data){
				Crypto.set('token',data.access_token);
				Crypto.set('refresh_token',data.refresh_token);
				Crypto.set("lastlogin",Moment().valueOf())
				Crypto.set("loggedin","yes");
				dispatch({
					type:AuthActions.Login,
					data:{
						name:data.name,
						login:Moment()
					}
				})
			}else{
				if(error.data){
					showToast({
						type:'error',
						message:error.data.error
					})
				}else{
					showToast({
						type:'error',
						message:error.message
					})
				}
			}
        })
    }
}
