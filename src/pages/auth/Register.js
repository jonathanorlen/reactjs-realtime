import React, { useState } from 'react';
import {auth} from '../../firebase';
import { toast } from 'react-toastify';

const Register = () => {
     const [email, setEmail] = useState('');
     const [loading, setLoading] = useState('');

     const handleSubmit = async (e) => {
          e.preventDefault();
          setLoading(true);
          const config = {
               url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
               handleCodeInApp: true
          };
          const result = await auth.sendSignInLinkToEmail(email, config);
          console.log('result', result);
          //show toast notification to user 
          toast.success(`Email send to result ${email}. Click the link to complete the registratio`)
          //save user email to localstorage
          window.localStorage.setItem('emailForRegistration', email)

          //clear state
          setEmail('');
          setLoading('');
     }

     return (
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
export default Register