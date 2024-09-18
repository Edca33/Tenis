import React from 'react'
import { Card } from 'react-bootstrap'

const adidasOriginals = () => {
    return (
        <div>
            <Card className='Card my-5 d-flex justify-content-center' style={{
                width: '15rem', top: '20px', marginTop: '0', marginLeft: '700px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center', position: 'absolute',
            }}>
                <Card.Img variant="top" src="https://www.courir.com/dw/image/v2/BCCL_PRD/on/demandware.static/-/Sites-master-catalog-courir/default/dwdd666d40/images/hi-res/001507457_101.jpg?sw=600&sh=600&sm=fit&q=90" />
                <Card.Body style={{ borderRadius: '' }}>
                    <Card.Title>ADIDAS ORIGINALS CAMPUS 00s NOIR/BLANC</Card.Title>
                    <Card.Text>
                        Hombre Lifestyle US 7
                    </Card.Text>
                    <a variant="primary" href='/checkout' >Comprar!</a>
                </Card.Body>
            </Card>
        </div>
    )
}

export default adidasOriginals