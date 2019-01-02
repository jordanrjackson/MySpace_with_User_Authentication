import React from "react";
import axios from "axios";
import { AuthConsumer, } from "../providers/AuthProvider";

class FetchUser extends React.Component {
  state = { loaded: false, };

  componentDidMount() {
    const { auth: { authenticated, handleLogin, }, } = this.props;
    if (authenticated) {
      this.loaded();
    } else {
      if (this.checkLocalToken()) {
        axios.get("/api/auth/validate_token")
          .then( res => {
            handleLogin(res.date.data);
            this.loaded();
          })
          .catch( res => {
            console.log(res);
            this.loaded();
          })
      } else {
        this.loaded();
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.loaded) this.loaded();
  }

  loaded = () => this.setState({ loaded: true, });

  checkLocalToken = () => {
    const token = localStorage.getItem("access-token");
    return token;
  }

  render() {
    return this.state.loaded ? this.props.children : null;
  }
}

const ConnectedFetchUser = (props) => (
  <AuthConsumer>
    { auth =>
      <FetchUser {...props} auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedFetchUser;
