import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginimg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Provider/AuthProvider';
const Signup = () => {

    const { createUser } = useContext(AuthContext)
    const HandelSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, name, password)
        createUser(email,password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage)
          });
    }
    return (
        <div className='flex items-center content-center h-[100vh]'>
            <div className="hero bg-base-200 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2">
                        <img src={loginimg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={HandelSignUp}>
                                <h1 className="text-3xl font-bold">Sign Up now!</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" name='password' />

                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Sign Up" className="btn btn-primary" />
                                </div>
                                <p className='mt-3'>Don't have any account
                                    <Link className='ml-2 text-blue-400' to="/login">Login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;