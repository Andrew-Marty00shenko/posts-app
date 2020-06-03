import React from 'react'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ProfileContainer from './components/Profile/ProfileContainer'
import PostsContainer from './components/Posts/PostsContainer'
import Registration from './components/Login/Registration'
import Login from './components/Login/Login'

const App = () => {
  return (
    <>
      <div className="wrapper">
        <div className="app-wrapper">
          <Route exact path="/" render={() => <Login />} />
          <Route path="/registration" render={() => <Registration />} />
          <Route path="/profile" component={NavBar} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/profile/posts" render={() => <PostsContainer />} />
        </div>
      </div>
    </>
  )
}

export default App;