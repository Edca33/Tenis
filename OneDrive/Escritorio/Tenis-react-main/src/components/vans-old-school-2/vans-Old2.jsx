import React from 'react'
import Card from 'react-bootstrap/Card'

const vans = () => {
  return (
    <div>
                    <Card className='Card my-5 d-flex justify-content-center' style={{
                width: '15rem', top: '0', marginTop: '0', marginLeft: '700px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center', position: 'absolute',
            }}>
                <Card.Img variant="top" src="https://vansco.vteximg.com.br/arquivos/ids/299228-1000-1000/VN0A38G1P0S-1.jpg?v=638151025972130000" />
                <Card.Body style={{ borderRadius: '' }}>
                    <Card.Title>Tenis Clásicos Negros Old Skool</Card.Title>
                    <Card.Text>
                    Vans Talla: 5Ms
                    </Card.Text>
                    <a variant="primary" href='/checkout' >Comprar!!</a>
                </Card.Body>
            </Card>
    </div>
  )
}

export default vans