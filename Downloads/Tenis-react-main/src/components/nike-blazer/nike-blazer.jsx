import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Nikemujer = () => {
    return (
        <center>
            <Card className='Card my-5 d-flex justify-content-center' style={{
                width: '15rem', top: '0', marginTop: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center', position: 'absolute',
            }}>
                <Card.Img variant="top" src="https://nikeco.vtexassets.com/arquivos/ids/203523-800-auto?v=638343798637200000&width=800&height=auto&aspect=true" />
                <Card.Body>
                    <Card.Title>Nike Blazer Mid '77 Vintag</Card.Title>
                    <Card.Text>
                        Talla:8.5 Calzado para hombre
                    </Card.Text>
                    <Link to={'/checkout'}>Comprar!!</Link>
                </Card.Body>
            </Card>
        </center>
    )
}

export default Nikemujer

