import Accordion from 'react-bootstrap/Accordion';
export default () => {
  return (
    <>
      <h1 className="text-center">FAQs</h1>
      <Accordion defaultActiveKey="0" className='w-75 mx-auto mt-5'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Is QTify free to use?</Accordion.Header>
          <Accordion.Body>
            Yes! It is 100% free, and has 0% ads!
          </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    <Accordion defaultActiveKey="0" className='w-75 mx-auto mt-3'>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Can I download and listen to songs offline?</Accordion.Header>
          <Accordion.Body>
            Sorry, unfortunately we don't provide the service to download any songs.
          </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </>
  );
};
