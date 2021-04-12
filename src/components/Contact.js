import { Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function Home() {
    return (
        <Container>
            <Row>
                <Col xs={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Contact Us</Card.Title>
                            <Form>
                                <Form.Group as={Col} md='10'>
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control type='name'
                                placeholder='Name' />
                                </Form.Group>
                                <Form.Group as={Col} md='10'>
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type='email'
                                placeholder='name@example.com' />
                                </Form.Group>
                                <Form.Group as={Col} md='10'>
                                    <Form.Label>Tell us what's on your mind:</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}