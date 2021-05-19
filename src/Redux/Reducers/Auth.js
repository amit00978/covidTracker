import {get, set} from "../../Utills/Crypto";
import Moment from 'moment'

const AuthActions={
    Login:"Auth_Login",
	Change:"Auth_Office",
	Logout:"Auth_Logout",
	Config:"Auth_Config"
}

let emptyState={
    authenticated:false,
    force:false,
    config:{},
	office:{

	},
    lastLogin:undefined
}

const initialState= () =>{
    const loggedIn = get("loggedin");
	const config = get("config")?get("config"):{};
	const office = get("office")?get("office"):undefined;
    if(loggedIn && loggedIn ==="yes"){
        return{
            ...emptyState,authenticated:true,name:get("name"),lastLogin:Moment(get("lastlogin")),config,office
        }
    }else
        return emptyState;
}


export const auth = (state=initialState(),action)=>{
    let data = action.data;
    switch (action.type){
        case AuthActions.Logout:
            return initialState();
		case AuthActions.Login:
			return{
				...initialState(),authenticated:true,
				name:data.name,
				lastLogin:data.login,
				office:{
					id:"__allOffice",
					name:"All Offices",
					description:data.companyName
				}
			}
		case AuthActions.Config:
			set("config",data)
			set("name",data.companyName)
			let mState = initialState();
			if(!mState.office){
				set("office",data.offices && data.offices.length>0 ?data.offices[0]:undefined)
				mState = {...mState,office:data.offices && data.offices.length>0 ?data.offices[0]:undefined}
			}
			return{
				...mState,config:data
			}
		case AuthActions.Change:
			set("office",data)
			return{
				...initialState(),office:data
			}
        default:
            return state;
    }
}

export {
    AuthActions
}