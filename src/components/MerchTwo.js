import React from 'react';
import Counter from './Counter';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CardColumns } from 'react-bootstrap';

export default class MerchTwo extends React.Component {
    render() {
        return (
            <Container>
                <Col>
                    <Row>
                        <Card>
                            <CardColumns className='merch-card'>
                                <Card.Img variant="top" src={this.props.image} />
                                <Card.Body>
                                    <Card.Title><p>{this.props.name}</p></Card.Title>
                                    <Card.Subtitle>${this.props.price}</Card.Subtitle>
                                    <br />
                                    <Card.Text>
                                    <p>{this.props.content}</p>
                                    </Card.Text>
                                    <Col>
                                        <Form.Group >
                                            <Form.Label><strong>Size</strong></Form.Label>
                                            <Form.Control as="select" size='sm'>
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                            <option>XXL</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                    <Counter />
                                    <Button onClick variant="primary">Add to Cart</Button>
                                    </Col>
                                </Card.Body>
                            </CardColumns>
                        </Card> 
                    </Row>
                </Col>  
            </Container>
        )
    }
}   

