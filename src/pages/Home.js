import React, { useState, useContext } from 'react';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { AuthContext} from '../context/authContext';
import {useHistory} from 'react-router-dom';

const GET_ALL_POST = gql`
     {
          allPosts{
               id
               title
               description
          }
     }
`

const client = new ApolloClient({
     uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
});

const Home = () => {
     const { data, loading, error } = useQuery(GET_ALL_POST);
     const [fetchPost, { data: posts}] = useLazyQuery(GET_ALL_POST);

     //acces context
     const { state, dispatch } = useContext(AuthContext);

     //react router
     let history = useHistory();
     
     const updateUsername = () => {
          dispatch({
               type: 'LOGGED_IN_USER',
               payload: 'Jonathan Orlen Pellondou'
          })
     }

     if (loading) return <p className="p-5">Loading...</p>
     return (
          <div className="container p-5">
               <div className="row p-5">
                    {data.allPosts.map((post) => (
                         <div className="col-md-4" key={post.id}>
                              <div className="card">
                                   <div className="card-body">
                                        <div className="card-title">
                                             {post.title}
                                        </div>
                                        <div className="card-text">
                                             {post.description}
                                        </div>
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
               <div className="row p-5">
                    <button onClick={() => fetchPost()} className="btn btn-raised btn-primary"> Fetch Post</button>
               </div>
               <hr/>
               {JSON.stringify(posts)}
               <hr/>
               {JSON.stringify(state.user)}
               <button onClick={updateUsername} className="btn btn-raised btn-primary">Dispatch</button>
               <hr/>
               {JSON.stringify(history)}
          </div>
     );
}

export default Home;
