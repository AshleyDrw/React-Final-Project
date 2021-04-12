import React from 'react';
import PostUpdate from './PostUpdate';
import LikeButton from './LikeButton';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';

export default class PostCard extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.updatePost = this.updatePost.bind(this);
    }

    handleDeleteClick() {
        this.props.deletePost(this.props._id);
    }

    updatePost(post) {
        this.props.updatePost(post);
    }

    render() {
        return (
            <div>
            <Card>
                <Card.Header as='h5'>{this.props.name}<br />
                <Card.Subtitle><small className='text-muted'>{this.props.location}</small></Card.Subtitle>
                </Card.Header>
                <Card.Subtitle>
                <Col className='text-right'>
                <Accordion>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Edit Post
                </Accordion.Toggle>
                    <Accordion.Collapse eventKey='0'>
                      <PostUpdate {...this.props} updatePost={this.props.updatePost} />
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey='0'>
                    <Col>
                    <Button variant='danger' onClick={this.handleDeleteClick}>Delete</Button>
                    </Col>   
                    </Accordion.Collapse>
                </Accordion>
                </Col>
                </Card.Subtitle>
                <Card.Body>
                    <Card.Body>
                      <Card.Text>{this.props.content}</Card.Text>
                      <br />
                    </Card.Body>
                </Card.Body>
                <Col>
                 <LikeButton />
                </Col>
            </Card>
           
            </div>
            
        );
    }
}