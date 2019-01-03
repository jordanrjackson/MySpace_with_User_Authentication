import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { updatePost, addPost } from '../reducers/posts'

class PostForm extends React.Component {
  initialState = {
    author: '', 
    avatar: '', 
    comment: '',
    date: '',
    likes: '',
  }

  state = {...this.initialState}

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const post = this.state
    const { closeForm, dispatch } = this.props
    const myFunc = this.props.id ? updatePost : addPost
    dispatch(myFunc(post))
    this.setState({...this.initialState})
    closeForm()
  }

  render() {
    const { author, avatar, comment, date, likes} = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="author"
          required
          defaultValue={author}
          onChange={this.handleChange}
          label="Author"
        />
        <Form.Input
          name="avatar"
          defaultValue={avatar}
          onChange={this.handleChange}
          label="Avatar"
        />
        <Form.Input
          name="comment"
          defaultValue={comment}
          onChange={this.handleChange}
          label="Comment"
        />
        <Form.Input
          name="date"
          defaultValue={date}
          onChange={this.handleChange}
          label="Date"
        />
        <Form.Input
          name="likes"
          defaultValue={likes}
          type="number"
          min="0"
          onChange={this.handleChange}
          label="Likes"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(PostForm)