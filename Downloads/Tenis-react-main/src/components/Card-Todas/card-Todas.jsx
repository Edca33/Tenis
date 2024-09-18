import React from 'react'
import { Card } from 'react-bootstrap'

const card = () => {
  return (
    <div style={{color: 'white'}}>Todas las Marcas
    
        <div>
        <Card className='Card my-5 d-flex justify-content-center' style={{
        width: '15rem', top: '20px', left: '12px', marginTop: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', position: 'absolute', zIndex: '-1'
      }}>
        <Card.Img variant="top" src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/127146394_01/w=800,h=800,fit=pad" />
        <Card.Body style={{ borderRadius: '' }}>
          <Card.Title>Nike Jordan</Card.Title>
          <Card.Text>
            Color negro con blanco. Para mujer. comodos

            $ 1500
          </Card.Text>
          <a variant="primary" href='/nike-mujer' >mirar</a>
        </Card.Body>
      </Card>

      <Card className='Card my-5 d-flex justify-content-center' style={{
        width: '15rem', top: '20px', marginLeft: '350px', marginTop: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', position: 'absolute', zIndex: '-1'
      }}>
        <Card.Img variant="top" src="https://nikeco.vtexassets.com/arquivos/ids/668510-800-auto?v=638572813897730000&width=800&height=auto&aspect=true" />
        <Card.Body>
          <Card.Title>Nike Pegasus 41 Electric</Card.Title>
          <Card.Text>
            Calzado de correr en carretera para mujer
            $1650
          </Card.Text>
          <a variant="primary" href='/nike-pegasus' >mirar</a>
        </Card.Body>
      </Card>

      <Card className='Card my-5 d-flex justify-content-center' style={{
        width: '15rem', top: '20px', marginLeft: '700px', marginTop: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', position: 'absolute', zIndex: '-1'
      }}>
        <Card.Img variant="top" src="https://nikeco.vtexassets.com/arquivos/ids/536058-800-auto?v=638463881738670000&width=800&height=auto&aspect=true" />
        <Card.Body>
          <Card.Title>Air Jordan 1 mid SE</Card.Title>
          <Card.Text>
            Color gris con blanco. Para mujer. comodos
          </Card.Text>
          <a variant="primary" href='/nike-Jordan' >mirar</a>
        </Card.Body>
      </Card>

      <Card className='Card my-5 d-flex justify-content-center' style={{
        width: '15rem', top: '20px',  marginLeft: '1000px', marginTop: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', position: 'absolute', zIndex: '-1'
      }}>
        <Card.Img variant="top" src="https://nikeco.vtexassets.com/arquivos/ids/203523-800-auto?v=638343798637200000&width=800&height=auto&aspect=true" />
        <Card.Body>
          <Card.Title>Nike Blazer Mid '77 Vintage </Card.Title>
          <Card.Text>
            Talla:8.5 Calzado para hombre
          </Card.Text>
          <a variant="primary" href='/nike-mujer' >mirar</a>
        </Card.Body>
      </Card>
        </div>

        <div>
        <Card className='Card my-5 d-flex justify-content-center' style={{
                width: '15rem', top: '450px', left: '12px', marginTop: '0', marginLeft: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center', position: 'absolute',
            }}>
                <Card.Img variant="top" src="https://vansco.vteximg.com.br/arquivos/ids/340348-1000-1000/VN00018EBWW-1.jpg?v=638548458041830000" />
                <Card.Body style={{ borderRadius: '2px' }}>
                    <Card.Title>Tenis De Plataforma Negros</Card.Title>
                    <Card.Text>
                    Vans Talla: 6M
                    </Card.Text>
                    <a variant="primary" href='/Vans-plataforma' >mirar</a>
                </Card.Body>
            </Card>

            <Card className='Card my-5 d-flex justify-content-center' style={{
                width: '15rem', top: '35px', marginTop: '0', marginLeft: '1650px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center', position: 'absolute',
            }}>
                <Card.Img variant="top" src="https://onboardsk8.com/wp-content/uploads/2022/09/Zapatos-Vans-Skate-Old-Skool-Black-White.jpg" />
                <Card.Body style={{ borderRadius: '' }}>
                    <Card.Title>Zapatos Vans Skate Old Skool Black White</Card.Title>
                    <Card.Text>
                    Vans Talla: 6M
                    </Card.Text>
                    <a variant="primary" href='/Vans-old-school' >Mirar</a>
                </Card.Body>
            </Card>

            <Card className='Card my-5 d-flex justify-content-center' style={{
                width: '15rem',  top: '35px', marginTop: '0', marginLeft: '1350px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center', position: 'absolute',
            }}>
                <Card.Img variant="top" src="https://vansco.vteximg.com.br/arquivos/ids/299228-1000-1000/VN0A38G1P0S-1.jpg?v=638151025972130000" />
                <Card.Body style={{ borderRadius: '' }}>
                    <Card.Title>Tenis Clásicos Negros Old Skool</Card.Title>
                    <Card.Text>
                    Vans Talla: 5Ms
                    </Card.Text>
                    <a variant="primary" href='/Vans-old-school2' >Mirar</a>
                </Card.Body>
            </Card>
        </div>
        <div>
        <Card className='Card my-5 d-flex justify-content-center' style={{
        width: '15rem', top: '450px', left: '350px', marginTop: '0',  display: 'flex', flexDirection: 'column', justifyContent: 'center',
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
        width: '15rem', top: '450px', marginTop: '0', marginLeft: '700px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
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
                width: '15rem', top: '450px', marginTop: '0', marginLeft: '1000px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center', position: 'absolute', borderRadius:  '5px'
            }}>
                <Card.Img variant="top" src="https://www.courir.com/dw/image/v2/BCCL_PRD/on/demandware.static/-/Sites-master-catalog-courir/default/dwdd666d40/images/hi-res/001507457_101.jpg?sw=600&sh=600&sm=fit&q=90" />
                <Card.Body>
                    <Card.Title>ADIDAS ORIGINALS CAMPUS 00s NOIR/BLANC</Card.Title>
                    <Card.Text>
                      Hombre Lifestyle US 7
                    </Card.Text>
                    <a variant="primary" href='/adidas-originals' >Mirar</a>
                </Card.Body>
            </Card>
        </div>
    </div>
  )
}

export default card