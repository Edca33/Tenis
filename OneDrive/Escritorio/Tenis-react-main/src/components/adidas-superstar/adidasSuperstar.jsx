import React from 'react'
import { Card } from 'react-bootstrap'

const adidasSuperstar = () => {
    return (
        <div>
            <Card className='Card my-5 d-flex justify-content-center' style={{
                width: '15rem', top: '0', marginTop: '0', marginLeft: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center', position: 'absolute',
            }}>
                <Card.Img variant="top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Tenis_Superstar_Negro_EG4959_01_standard.jpg" />
                <Card.Body style={{ borderRadius: '' }}>
                    <Card.Title>Adidas Tenis Superstar Negro</Card.Title>
                    <Card.Text>
                        Hombre Lifestyle US 7
                    </Card.Text>
                    <a variant="primary" href='/checkout' >Comprar!!</a>
                </Card.Body>
            </Card>
        </div>
    )
}

export default adidasSuperstar