import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register'
import FetchUser from './components/FetchUser';
import ViewUsers from './components/ViewUsers';
import ViewPosts from './components/ViewPosts';
import Profile from './components/Profile';
import PostForm from './components/PostForm';
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
      <Container style={{ paddingTop: "20px", }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute extact path="/users" component={ViewUsers} />
          <ProtectedRoute extact path="/postfeed" component={ViewPosts} />
          <ProtectedRoute extact path="/profile" component={Profile} />
          <ProtectedRoute extact path="/newpost" component={PostForm} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </Fragment>
)

export default App;
