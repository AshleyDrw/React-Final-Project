import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class PostUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            location: props.location,
            content: props.content,
            _id: props._id,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        this.props.postUpdate(this.state);
        e.preventDefault();
    }

    render() {
        return (
            <Card.Body>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control value={this.state.name} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <Form.Control value={this.state.location} onChange={this.handleChange} />
                        </Form.Group>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Post</Form.Label>
                        <Form.Control as='textarea' rows={3} value={this.state.content} onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant='primary'>Update</Button>
                </Form>
            </Card.Body>
        );
    }

}