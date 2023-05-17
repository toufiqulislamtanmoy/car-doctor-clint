import { Link } from 'react-router-dom';
import loginimg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email,password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log("User Logged In ",user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
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
                            <form onSubmit={handelLogin}>
                                <div className="form-control">
                                    <h1 className="text-3xl font-bold">Login now!</h1>
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
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="login" className="btn btn-primary" />
                                </div>
                                <p>Already have an account 
                                    <Link  to="/signup">Signup</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;