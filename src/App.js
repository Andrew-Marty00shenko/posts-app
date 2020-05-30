import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile'
import PostsContainer from './components/Posts/PostsContainer'
import Registration from './components/Login/Registration'
import Authorize from './components/Login/Authorize'

const App = () => {
  return (
    <>

      <div className="wrapper">
        <div className="app-wrapper">
          <Route exact path="/" render={() => <Authorize />} />
          <Route path="/registration" render={() => <Registration />} />

          <Route path="/profile" component={NavBar} />
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/profile/posts" render={() => <PostsContainer />} />
        </div>
      </div>
    </>
  )
}

export default App;