import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
export default () => {
  return (
    <>
     <InputGroup className="w-50">
        <Form.Control
          placeholder="Search a album of your choice"
          aria-label="search"
          aria-describedby="search-bar"
        />
         <InputGroup.Text id="search"><i className="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
      </InputGroup>
    </>
  );
};
