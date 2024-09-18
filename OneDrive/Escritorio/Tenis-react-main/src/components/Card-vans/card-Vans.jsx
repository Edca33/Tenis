import React from 'react';
import Card from 'react-bootstrap/Card';

function BasicExample() {
    return (
        <div>
            <Card className='Card my-5 d-flex justify-content-center' style={{
                width: '15rem', top: '20px', left: '12px', marginTop: '0', marginLeft: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
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
                width: '15rem', top: '20px', marginTop: '0', marginLeft: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
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
                width: '15rem', top: '20px', marginTop: '0', marginLeft: '700px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
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
    );
}

export default BasicExample;