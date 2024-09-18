import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function BasicExample() {
    return (
        <div>
            <Card className='Card my-5 d-flex justify-content-center' style={{
                width: '15rem', top: '0', marginTop: '0', marginLeft: '830px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center', position: 'absolute',
            }}>
                <Card.Img variant="top" src="https://onboardsk8.com/wp-content/uploads/2022/09/Zapatos-Vans-Skate-Old-Skool-Black-White.jpg" />
                <Card.Body style={{ borderRadius: '' }}>
                    <Card.Title>Zapatos Vans Skate Old Skool Black White</Card.Title>
                    <Card.Text>
                    Vans Talla: 6M
                    </Card.Text>
                </Card.Body>
            </Card>
            <center><Button  variant="primary">+</Button>
            <Button variant="danger">-</Button>
            </center>
            <input style={{marginLeft: '865px'}}  type="text" />

            <Link to={'/checkout'} className='btn.btn-success'>Comprar!</Link>
        </div>
    );
}

export default BasicExample;