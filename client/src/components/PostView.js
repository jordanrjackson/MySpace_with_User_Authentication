import React from 'react'
import { connect } from 'react-redux'
import {
  Divider,
  Header,
  Image,
  Container,
  Table,
  Button,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PostForm from './PostForm'

class PostView extends React.Component {
  state = { showForm: false }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  render() {
    const { post = {} } = this.props
    const { showForm } = this.state
    return (
      <Container>
        <Link to="/posts">View All</Link>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Cancel' : 'Edit' }
        </Button>
        { showForm ?
            <PostForm closeForm={this.toggleForm} {...post} />
            :
            <div>
              <Header as="h3" textAlign="center">{post.name}</Header>
              <Image src={post.logo} />
              <Table definition>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Author</Table.Cell>
                    <Table.Cell>{post.author}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Comment</Table.Cell>
                    <Table.Cell>{post.comment}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Avatar</Table.Cell>
                    <Table.Cell>{post.avatar}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Date</Table.Cell>
                    <Table.Cell>{post.date}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Likes</Table.Cell>
                    <Table.Cell>{post.likes}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { id } = props.match.params
  const post = state.posts.find( a => a.id === parseInt(id, 10) )
  return { post }
}

export default connect(mapStateToProps)(PostView)