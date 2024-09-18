import Card from 'react-bootstrap/Card';

function BasicExample() {
    return (
        <div>
            <Card className='Card my-5 d-flex justify-content-center' style={{
                width: '15rem', top: '0', marginTop: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center', position: 'absolute',
            }}>
                <Card.Img variant="top" src="https://vansco.vteximg.com.br/arquivos/ids/340348-1000-1000/VN00018EBWW-1.jpg?v=638548458041830000" />
                <Card.Body style={{ borderRadius: '' }}>
                    <Card.Title>Tenis De Plataforma Negros</Card.Title>
                    <Card.Text>
                    Vans Talla: 6M
                    </Card.Text>
                    <a variant="primary" href='/checkout' >Comprar!</a>
                </Card.Body>
            </Card>


        </div>
    );
}

export default BasicExample;