import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default ({likes, image, title, follows}) => {
  return (
    <>
    <Card style={{ width: '22rem', borderRadius:'10px'}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Text>
          <Button  variant="dark" style={{borderRadius: '100px'}}>{likes ? `${likes} likes` : `${follows} follows`}</Button>
        </Card.Text>
      </Card.Body>
      <p>{title}</p>
    </Card>
    </>
  );
};
