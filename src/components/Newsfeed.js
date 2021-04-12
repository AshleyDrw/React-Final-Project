import React from 'react';
import PostCard from './PostCard';
import { PostForm } from './PostForm';
import { postService } from '../rest/postService';


export default class Newsfeed extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: []
      }
  
      this.addNewPost = this.addNewPost.bind(this);
      this.deletePost = this.deletePost.bind(this);
      this.updatePost = this.updatePost.bind(this);
    }
  
    render() {
      let postCards = this.state.posts.map(post => {
        return <PostCard {...post} key={post._id} 
          deletePost={this.deletePost} 
          updatePost={this.updatePost} />
      });
          
      return (
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Add Post</h2>
              <PostForm addNewPost={this.addNewPost} />
            </div>
            <div className="col">
              <h2>Posts</h2>
              {postCards}
            </div>
          </div>
        </div>
      );
    }
  
    _refreshData = async() => {
      const posts = await postService.getAll();
      this.setState({ posts });
    }
  
    componentDidMount() {
      this._refreshData();
    }
  
    addNewPost = async(post) => {
      await postService.create(post);
      this._refreshData();
    }
  
    updatePost = async(post) => {
      await postService.update(post);
      this._refreshData();
    }
  
    deletePost = async(id) => {
      await postService.delete(id);
      this._refreshData();
    }
  }