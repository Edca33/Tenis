import React from 'react'
import { Card } from 'react-bootstrap'

const cardsAdidas = () => {
  return (
    <div>
      <Card className='Card my-5 d-flex justify-content-center' style={{
        width: '15rem', top: '20px', left: '12px', marginTop: '0', marginLeft: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', position: 'absolute',
      }}>
        <Card.Img variant="top" src="https://unitedstorecolombia.com/cdn/shop/files/PhotoRoom_20231026_110040.jpg?v=1698686911" />
        <Card.Body style={{ borderRadius: '' }}>
          <Card.Title>Tenis Adidas Ultraboost Dama</Card.Title>
          <Card.Text>
            Adidas Talla:6M Para dama.
          </Card.Text>
          <a variant="primary" href='/adidas-ultra-boost' >Mirar</a>
        </Card.Body>
      </Card>

      <Card className='Card my-5 d-flex justify-content-center' style={{
        width: '15rem', top: '20px', marginTop: '0', marginLeft: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', position: 'absolute',
      }}>
        <Card.Img variant="top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Tenis_Superstar_Negro_EG4959_01_standard.jpg" />
        <Card.Body style={{ borderRadius: '' }}>
          <Card.Title>Adidas Tenis Superstar Negro</Card.Title>
          <Card.Text>
            Hombre Lifestyle US 7
          </Card.Text>
          <a variant="primary" href='/adidas-super-star' >Mirar</a>
        </Card.Body>
      </Card>

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
                    <a variant="primary" href='/adidas-originals' >Mirar</a>
                </Card.Body>
            </Card>
    </div>
  )
}

export default cardsAdidas