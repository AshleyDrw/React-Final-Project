import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export const PostForm = (props) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        props.addNewPost({name, location, content});
        e.preventDefault();
        setName('');
        setLocation('');
        setContent('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='name' value={name} placeholder='First Name'
                  onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Group>
                    <Form.Label>Location</Form.Label>
                    <Form.Control type='location' value={location} placeholder='City' 
                      onChange={(e) => setLocation(e.target.value)}/>
                </Form.Group>
            </Form.Group>
            <Form.Group>
                <Form.Label>Post</Form.Label>
                    <Form.Control as='textarea' rows={3} value={content} placeholder='Your Post'
                      onChange={(e) => setContent(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.File id="exampleFormControlFile1" label="Pics or it didn't happen" />
            </Form.Group>
            <Button variant='primary' type="submit">Thanks, I hated it</Button>
        </Form>
    );
}