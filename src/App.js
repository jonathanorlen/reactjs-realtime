import React, {useState} from 'react';
import ApolloClient from 'apollo-boost';
import {gql} from 'apollo-boost';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
});

const App = () => {
  const [posts, setPosts] = useState([])
  client.query({
    query: gql` 
      {allPosts{
        id
        title
        description
      }}
    `
  })
  .then(result => setPosts(result.data.allPosts))

  return (
    <div className="container p-5">
      <div className="row p-5">
        {posts.map((post) => (
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
    </div>
  );
}

export default App;
