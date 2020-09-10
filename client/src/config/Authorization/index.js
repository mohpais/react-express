import React, {Component} from 'react'

const GetUser = () => {
    // const fromStorage = JSON.parse(localStorage.getItem('user'));
    // return fromStorage ? fromStorage : {user: '', role: 'user'}
    const auth = {
        user: '',
        role: 'admin'
    }
    return auth
}

const isValidRole = ({role, allowedRoles}) => allowedRoles.includes(role);

const Authorization = allowedRoles => WrappedComponent => class withAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: GetUser()
        }
    }

    render() {
        const {role} = this.state.user
        return isValidRole({role: role, allowedRoles: allowedRoles}) ?
        <WrappedComponent /> :
        <h1>Anda tidak memiliki akses</h1>
    }
}

export const Admin = Authorization(['admin']);

export const User = Authorization(['admin', 'user']);


export default {
    Admin,
    User
}
