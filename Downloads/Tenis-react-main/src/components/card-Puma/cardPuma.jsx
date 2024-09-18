import React from 'react'
import { Card } from 'react-bootstrap'
const cardPuma = () => {
    return (
        <div>
            <Card className='Card my-5 d-flex justify-content-center' style={{
                width: '15rem', top: '12px', marginTop: '0', marginLeft: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center', position: 'absolute', borderRadius: '5px'
            }}>
                <Card.Img variant="top" src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/392326/01/sv01/fnd/EEA/fmt/png/Zapatillas-Rebound" />
                <Card.Body>
                    <Card.Title>Zapatillas Puma Rebound</Card.Title>
                    <Card.Text>
                    Las Puma Rebound combinan un diseño inspirado en el baloncesto con un estilo moderno y urbano.
                    </Card.Text>
                    <a variant="primary" href='/Puma-rebound' >Mirar</a>
                </Card.Body>
            </Card>

            <Card className='Card my-5 d-flex justify-content-center' style={{
                width: '15rem', height: '15rem', top: '95px', marginTop: '0', marginLeft: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center', position: 'absolute', borderRadius: '5px'
            }}>
                <Card.Img variant="top" src="https://static.dafiti.com.co/p/puma-6806-3407931-1-product.jpg" />
                <Card.Body>
                    <Card.Title>Tenis Lifestyle Blanco-Rojo-Negro Puma RS-X³ Super</Card.Title>
                    <Card.Text>
                    Los Puma RS-X³ Super destacan por su diseño atrevido y moderno.
                    </Card.Text>
                    <a variant="primary" href='/adidas-originals' >Mirar</a>
                </Card.Body>
            </Card>

            <Card className='Card my-5 d-flex justify-content-center' style={{
                width: '15rem', top: '12px', marginTop: '0', marginLeft: '650px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center', position: 'absolute', borderRadius: '5px'
            }}>
                <Card.Img variant="top" src="https://prochampions.vtexassets.com/arquivos/ids/947072-800-800?v=638560478568800000&width=800&height=800&aspect=true" />
                <Card.Body>
                    <Card.Title>Puma Zapatillas Smash 3.0</Card.Title>
                    <Card.Text>
                    Las Puma Smash 3.0 combinan un diseño clásico y limpio con una parte superior de cuero suave para mayor durabilidad. 
                    </Card.Text>
                    <a variant="primary" href='/adidas-originals' >Mirar</a>
                </Card.Body>
            </Card>
        </div>
    )
}

export default cardPuma