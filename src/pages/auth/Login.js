import React, {useState} from 'react';

const Login = () => {
     const [email, setEmail] = useState('');
     const [loading, setLoading] = useState('');

     const handleSubmit = () => {

     }

     return (
     <div className="container p-5">
          <div className="row p-5">
               <h4>Login</h4>
               <form onSUbmit={handleSubmit} >
                    <div className="form-group">
                         <label>Email Addres</label>
                              <input 
                                   type="email" 
                                   className="form-control" 
                                   value={email} 
                                   onChange={(e) => setEmail(e.target.value)} 
                                   placeholder="Enter Email"
                                   disabled={loading}
                              />
                    </div>
               </form>
          </div>
     </div>
     )
}
export default Login