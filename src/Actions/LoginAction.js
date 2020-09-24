import { Facebook, Instagram, Youtube } from "react-feather";

export const setUsername = name =>{
    return {
        type: 'SET_USERNAME',
        payload : name
    };
}

export const setPassword = Password =>{
    return {
        type : 'SET_PASSWORD',
        payload : Password
    }
}


//-----signup

export const setFirstName = FirstName =>{
    return {
        type : 'SET_FIRSTNAME',
        payload : FirstName
    }
}

export const setLastName = LastName =>{
    return {
        type : 'SET_LASTNAME',
        payload : LastName
    }
}

export const setEmail = Email =>{
    return {
        type : 'SET_EMAIL',
        payload :Email
    }
}

export const setGender = Gender =>{
    return {
        type : 'SET_GENDER',
        payload : Gender
    }
}

export const setSPassword = Password =>{
    return {
        type : 'SET_PASSWORD',
        payload : Password
    }
}

export const setCpassword = Cpassword =>{
    return {
        type : 'SET_CPASSWORD',
        payload : Cpassword
    }
}



//---Change Password---

export const setOldPassword = OldPassword =>{
    return {
        type : 'SET_OLDPASSWORD',
        payload : OldPassword
    }
}

export const setNewPassword = NewPassword =>{
    return {
        type : 'SET_NEWPASSWORD',
        payload : NewPassword
    }
}

export const setConfirmNewPassword = ConfirmNewPassword =>{
    return {
        type : 'SET_CONFIRMNEWPASSWORD',
        payload : ConfirmNewPassword
    }
}