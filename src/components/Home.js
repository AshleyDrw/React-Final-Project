import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import cropShirt from '../images/cropShirt.jpg';
import reefShirt from '../images/reefShirt.jpg';
import tihiBag from '../images/tihiBag.jpg';
import Col from 'react-bootstrap/Col';

export default function Home() {
    return (
        <div> 
            <Container>
                <Jumbotron>
                    <h1>Thanks, I Hated It!</h1>
                        <p>
                            TiHi was born from the hilariously written, one-star Yelp reviews.  
                            We've all been there- now TiHi is here.  This is a place for specifically 
                            noteworthy disappointments.  For everything you had to send back. Think of 
                            us as the anti-Yelp, and more so a cry for help.<br /><br />

                            Misery loves company.  Welcome to: Thanks, I Hated it. 
                        </p>
                </Jumbotron>
            </Container>
            <br />
            <br />
            <Container>
                <Col>
                    <CardDeck>
                        <Card className="bg-dark text-white">
                            <Card.Img variant="top" src= {cropShirt} />
                            <Card.ImgOverlay>
                            <Card.Title>Check Out Our Merch!</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="bg-dark text-white">
                            <Card.Img variant="top" src= {reefShirt} />
                            <Card.ImgOverlay>
                            <Card.Title>Check Out Our Merch!</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="bg-dark text-white">
                            <Card.Img variant="top" src= {tihiBag} />
                            <Card.ImgOverlay>
                            <Card.Title>Check Out Our Merch!</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </CardDeck>
                </Col>
            </Container> 
        </div> 
    )
}