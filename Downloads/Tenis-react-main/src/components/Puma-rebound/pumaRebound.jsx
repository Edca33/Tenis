import React from 'react'
import { Card } from 'react-bootstrap'

const pumaRebound = () => {
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
                <a variant="primary" href='/checkout' >Comprar</a>
            </Card.Body>
        </Card></div>
    )
}

export default pumaRebound