import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Container, 
  Header,
  Card,
  Image,
  Dropdown,
  Divider,
  Button,
} from 'semantic-ui-react'
import PostForm from './PostForm'

class Posts extends React.Component {
  state = { author: '', showForm: false }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  posts = () => {
    const { posts } = this.props
    const { author } = this.state
    let visible = posts
    if (author)
      visible = posts.filter( a => a.author === author )
    return visible.map( post =>
      <Card key={post.id}>
        <Image src={post.logo} />
        <Card.Content>
          <Card.Header>
            <Image src={post.avatar} />
          </Card.Header>
          <Card.Meta>
            {post.author}
          </Card.Meta>
          <Card.Description>
            { post.comment }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/posts/${post.id}`}>
            View Post
          </Link>
        </Card.Content>
      </Card>
    )
  }

  handleChange = (e, data) => {
    this.setState({ author: data.value })
  }

  authorOptions = () => {
    const { authors } = this.props
    return authors.map( (c,i) => { 
      return { key: i, text: c, value: c }
    })
  }

  render() {
    const { author, showForm } = this.state
    return (
      <Container>
        <Header as="h3" textAlign="center">Posts</Header>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Hide Form' : 'Show Form' }
        </Button>
        { showForm ?
            <PostForm closeForm={this.toggleForm} />
            :
            <div>
              <Dropdown
                placeholder="Filter by Author"
                fluid
                selection
                options={this.authorOptions()}
                value={author}
                onChange={this.handleChange}
              />
              { author && 
                  <Button
                    fluid
                    basic
                    onClick={() => this.setState({ author: '' })}
                  >
                    Clear Filters
                  </Button>
              }
              <Divider />
              <Card.Group itemsPerRow={4}>
                { this.posts() }
              </Card.Group>
            </div>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { posts } = state
  const authors = [...new Set(posts.map( a => a.author ))]
  return { 
    posts,
    authors,
  }
}

export default connect(mapStateToProps)(Posts)