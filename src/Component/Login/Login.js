import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './Firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import loginImg from '../../Images/Group 140.png'


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [logedInUser, setLogedInUser] = useContext(userContext)

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            const { displayName, email, photoURL } = result.user
            // console.log(displayName, email, photoURL)
            const userInfo = {
                name: displayName,
                email: email,
                photo: photoURL
            }
            setLogedInUser(userInfo)
            history.replace(from);
        }).catch((error) => {
            console.log(error.message)
        });
    }

    return (
        <div className='row d-flex align-items-center'>
            <div className="col-md-6 text-center">
                <h2>Sign-in form</h2>
                <form className='form-group border p-3 bg-light'>
                    <input type="text" className="form-control my-3"/>
                    <input type="text" className="form-control my-3"/>
                    <input type="submit" value='sign in' className="btn btn-cane my-3"/>
                </form>
                <button onClick={handleLogin} className='btn btn-cane my-3'>Login with Google</button>
            </div>
            <div className="col-md-6 text-end">
                <img className='img-fluid' style={{height:'500px'}} src={loginImg} alt=""/>
            </div>
        </div>
    );
};

export default Login;