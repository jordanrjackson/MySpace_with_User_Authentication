import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Container, 
  Header,
  Card,
  Image,
  Divider,
  Button,
} from 'semantic-ui-react'
import { getUsers } from '../reducers/users'

class MyFriends extends React.Component {
  state = { friends: []}

  componentDidMount() {
    this.props.dispatch(getUsers())
  }

  // toggleForm = () => {
  //   this.setState({ showForm: !this.state.showForm })
  // }

  // users = () => {
  //   const { users } = this.props
  //   const { user } = this.state
  //   let visible = users
  //   if (user)
  //     visible = users.filter( a => a.user === user )
  //   return visible.map( user =>
  //     <Card key={user.id}>
  //       <Card.Content>
  //         <Card.Header>
  //           <Image src={user.image} />
  //         </Card.Header>
  //         <Card.Meta>
  //           {user.name}
  //         </Card.Meta>
  //         <Card.Description>
  //           { user.email }
  //         </Card.Description>
  //       </Card.Content>
  //       <Card.Content extra>
  //         <Link to={`/users/${user.id}`}>
  //           View User
  //         </Link>
  //       </Card.Content>
  //     </Card>
  //   )
  // }

  handleChange = (e, data) => {
    this.setState({ user: data.value })
  }

  userOptions = () => {
    const { users } = this.props
    return users.map( (c,i) => { 
      return { key: i, text: c, value: c }
    })
  }

  listUsers = () => {
    return this.props.users.map( u => {
      return(
        <Button onClick={() => this.addFriend(u.id)}>{u.name}</Button>
      )
    })
  }

  addFriend = (id) => {
    alert(id)
  }
  render() {
    const { user, showForm } = this.state
    return (
      <Container>
        {this.listUsers()}
        {/* <Header as="h3" textAlign="center">Users</Header>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Hide Form' : 'Show Form' }
        </Button>
        { showForm ?
            <PostForm closeForm={this.toggleForm} />
            :
            <div>
              <Dropdown
                placeholder="Filter by User"
                fluid
                selection
                options={this.authorOptions()}
                value={user}
                onChange={this.handleChange}
              />
              { user && 
                  <Button
                    fluid
                    basic
                    onClick={() => this.setState({ user: '' })}
                  >
                    Clear Filters
                  </Button>
              }
              <Divider />
              <Card.Group itemsPerRow={4}>
                { this.users() }
              </Card.Group>
            </div>
        } */}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { users } = state
  return { 
    users,
  }
}

export default connect(mapStateToProps)(MyFriends)