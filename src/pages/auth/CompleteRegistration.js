import React, {useState, useEffect} from 'react';
import {auth} from '../../firebase';
import {toast} from 'react-toastify';
import {useHistory} from 'react-router-dom';

const CompleteRegistration = () => {

     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [loading, setLoading] = useState('');

     let history = useHistory();

     useEffect(() => {
          setEmail(window.localStorage.getItem('emailForRegistration'));
     }, [history])
     
     const handleSubmit = async (e) => {
          e.preventDefault()
          setLoading(true)
          if(!email || !password) {
               toast.error('Email and password is required');
               return
          }

          try{
               const result = await auth.signInWithEmailLink(email, window.location.href);
               console.log(result)
               if(result.user.emailVerified) {
                    //remove email on local storage
                    window.localStorage.removeItem('emailForRegistration');
                    let user = auth.current;
                    await user.updatePassword(password)
                    //dispatch user with token and email
                    //then redirect
               }
          }catch(error){
               console.log('register complete error', error.message)
               setLoading(false);
               toast.error(error.message)
          }
     }

     return(
          <div className="container p-5">
          <div className="row p-5">
               <div className="col-md-12">
                         {loading ? (<h4 className="text-danger">Loading...</h4>) : (<h4>Register</h4>)}
                    <form onSubmit={handleSubmit} >
                         <div className="form-group">
                              <label>Email Address</label>
                              <input
                                   type="email"
                                   className="form-control"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   placeholder="Enter Email"
                                   disabled
                              />
                         </div>
                         <div className="form-group">
                              <label>Password</label>
                              <input
                                   type="password"
                                   className="form-control"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   placeholder="Enter Password"
                                   disabled={loading}
                              />
                         </div>
                         <button className="btn btn-raised btn-primary" disabled={!email || loading}>
                              Submit
                         </button>
                    </form>
               </div>
          </div>
     </div>
     )
}

export default CompleteRegistration;