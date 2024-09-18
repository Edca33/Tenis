import React from "react";
import { Card } from "react-bootstrap";
const Adidas = () => {
    return (
        <div>
            <Card className='Card my-5 d-flex justify-content-center' style={{
                width: '15rem', top: '0', marginTop: '0', marginLeft: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center', position: 'absolute',
            }}>
                <Card.Img variant="top" src="https://unitedstorecolombia.com/cdn/shop/files/PhotoRoom_20231026_110040.jpg?v=1698686911" />
                <Card.Body style={{ borderRadius: '' }}>
                    <Card.Title>Tenis Adidas Ultraboost Dama</Card.Title>
                    <Card.Text>
                        Adidas Talla:6M Para dama.
                    </Card.Text>
                    <a variant="primary" href='/checkout' >Comprar!</a>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Adidas
