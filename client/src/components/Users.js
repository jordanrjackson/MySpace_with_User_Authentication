import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Card, Image, Button } from 'semantic-ui-react';
import { getUsers } from '../reducers/users';

class Users extends React.Component {

  componentDidMount() {
    this.props.dispatch(getUsers())
  }

  render() {
    return (
      <Container>
        <Header as="h1" textAlign="center">MySpace with User Authentication</Header>
          <Header as="h3" textAlign="center">Users</Header>
            <Card.Group itemsPerRow={4}>
              {this.props.users.map(user =>
                <Card key={user.id}>
                  <Image src={user.image} style={{width: 270, height: 200}}/>
                  <Card.Content>
                    {user.name}
                  </Card.Content>
                  <Button>
                    Add Friend
                  </Button>
                </Card>
              )}
            </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users)