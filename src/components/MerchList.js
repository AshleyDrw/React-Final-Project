import React from 'react';
import MerchTwo from './MerchTwo';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'


const tihiProducts = [
    {
    id: '1809',
    name: 'TiHi Tee',
    price: 25,
    image: '../clothingImages/reefShirt.jpg',
    content: 'Disappointment has never looked so good.',
    },
    {
    id: '2567',
    name: 'TiHi Hoodie',
    price: 35,
    image: './clothingImages/tihiHoodie2.jpg',
    content: 'The perfect parting gift for those casual encounters.',
    },
    {
    id: '3345',
    name: 'TiHi Cropped Hoodie',
    price: 35,
    image: '../clothingImages/cropHoodie2.jpg',
    content: `The perfect gift for the Secret Santa you didn't want to participate in.`,
    },
    {
    id: '3768',
    name: 'TiHi Cropped Tee',
    price: 35,
    image: '../clothingImages/cropShirt.jpg',
    content: `You know what we don't hate? You in this tee. Buy it now.`,
    },
    {
    id: '8960',
    name: 'TiHi Bag',
    price: 20,
    image: '../clothingImages/tihiBag.jpg',
    content: `You may not know how to handle your disappointment but this
    bag does.`,
    },
]

class MerchList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
        this.addNewProduct = this.addNewProduct.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ products: tihiProducts })
        },2000);
    }

    addNewProduct(product) {
        this.setState((state) => {
            const products = state.products.slice();
            product.id = products.length;
            return {products : [...products, product]}
        });
    }

    render() {
        const merchTwo = this.state.products.map(product => <MerchTwo {...product} key={product.id} />)
        return (
            <>
                <Container>
                    <Jumbotron>
                            <h1>Grab Our Merch!</h1>
                                <p>
                                    We promise you won't hate it.
                                </p>
                    </Jumbotron>
                </Container>
                
                {merchTwo}
            
            </>
        );
    }
}

export default MerchList;

  