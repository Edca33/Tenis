import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <div>
      <Card className='Card my-5 d-flex justify-content-center' style={{
        width: '15rem', top: '20px', left: '12px', marginTop: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', position: 'absolute',
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
        alignItems: 'center', position: 'absolute',
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
        alignItems: 'center', position: 'absolute',
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
        alignItems: 'center', position: 'absolute',
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



  );
}

export default BasicExample;