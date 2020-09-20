import React, {useState} from 'react';

const Login = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [loading, setLoading] = useState('');

     const handleSubmit = () => {

     }

     return (
     <div className="container p-5">
          <div className="row p-5">
               <h4>Login</h4>
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
     )
}
export default Login