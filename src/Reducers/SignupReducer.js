const initialState = {
    FirstName : "",
    LastName : "",
    Email : "",
    Gender : "",
    Password : "",
    Cpassword : "",
}

export default (state = initialState, action) =>{
    switch(action.type){
        case 'SET_FIRSTNAME' :
            return{
                ...state,
                FirstName : action.payload
            }
        
        case 'SET_LASTNAME' :
            return {
                ...state,
                LastName : action.payload
            }

        case 'SET_EMAIL' : 
        return {
            ...state,
            Email : action.payload
        }

        case 'SET_GENDER' : 
        return {
            ...state,
            Gender : action.payload
        }

        case 'SET_PASSWORD' : 
        return {
            ...state,
            Password : action.payload
        }

        case 'SET_CPASSWORD' : 
        return {
            ...state,
            Cpassword : action.payload
        }

        default :
        return state;
    }
}