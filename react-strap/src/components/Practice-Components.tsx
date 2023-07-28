import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Nav, NavItem, NavLink, Spinner, Breadcrumb, BreadcrumbItem, Container, Col, Row, Card, CardBody, CardTitle, CardSubtitle, CardText, InputGroup, Input, InputGroupText, Pagination, PaginationItem, PaginationLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Tooltip } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//@ts-ignore
import { ShimmerText } from 'react-shimmer-effects';

// Define the interface for the props
interface ComponentPracticeProps {
  direction: any; // Replace 'string' with the appropriate type for the 'direction' prop
  // Add other props here if needed
}

// class Example extends Component {
//   render() {
//     return <ShimmerButton size="md" />;
//   }
// }

// class Example extends Component {
//   render() {
//     return <ShimmerBadge width={120} />;
//   }
// }

const ComponentPractice: React.FC<ComponentPracticeProps> = ({ direction, ...args }) => {
  const [modal, setModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const notify = () => toast.success('Wow so easy!');

  const toggle = () => {
    setModal(!modal);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const toggleToolTip = () => {
    setTooltipOpen(!tooltipOpen);
  };

  const [showSpinner, setShowSpinner] = useState(false);

  return (
    <>
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer position='top-center' autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='dark' />
      </div>

      <Nav justified tabs>
        <NavItem>
          <NavLink active href='#'>
            Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='https://jsonplaceholder.typicode.com/'>Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href='#'>
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>

      <div>
        <Button
          color='danger'
          onClick={() => {
            return toggle(), setShowSpinner(true);
          }}
        >
          Click Me
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>This is my first try of reactstrap</ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={toggle}>
              {showSpinner ? <Spinner size={'sm'} /> : 'Do Something'}
            </Button>{' '}
            <Button color='secondary' onClick={toggle}>
              Cancel
            </Button>
            <Button
              color='secondary'
              onClick={() => {
                setShowSpinner(false);
              }}
            >
              Stop Spinner
            </Button>
          </ModalFooter>
        </Modal>
      </div>

      <Breadcrumb>
        <BreadcrumbItem>
          <a href='#'>Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href='https://jsonplaceholder.typicode.com/'>Fake API</a>
        </BreadcrumbItem>
      </Breadcrumb>

      <Container>
        <Row>
          <Col className='bg-light border'>.col</Col>
        </Row>
        <Row>
          <Col className='bg-light border' xs='3'>
            .col-3
          </Col>
          <Col className='bg-light border' xs='auto'>
            .col-auto - variable width content
          </Col>
        </Row>
        <Row>
          <Col className='bg-light border' xs='6'>
            .col-6
          </Col>
        </Row>
        <Row>
          <Col className='bg-light border' sm='4' xs='6'>
            .col-6 .col-sm-4
          </Col>
        </Row>
        <Row>
          <Col
            className='bg-light border'
            sm={{
              offset: 1,
              order: 2,
              size: 6,
            }}
          >
            .col-sm-6 .order-sm-2 .offset-sm-1
          </Col>
        </Row>
        <Row>
          <Col
            className='bg-light border'
            md={{
              offset: 3,
              size: 6,
            }}
            sm='12'
          >
            .col-sm-12 .col-md-6 .offset-md-3
          </Col>
        </Row>
        <Row>
          <Col
            className='bg-light border'
            sm={{
              offset: 1,
              size: 'auto',
            }}
          >
            .col-sm-auto .offset-sm-1
          </Col>
        </Row>
      </Container>

      <Card
        body
        // color='light'
        outline
        style={{
          width: '18rem',
        }}
      >
        <img alt='Sample' src='https://picsum.photos/300/200' />

        <CardBody>
          <CardTitle tag='h5' className='test'>
            Card title
          </CardTitle>
          <CardSubtitle className='mb-2 text-muted' tag='h6'>
            <ShimmerText line={10} gap={15} />
          </CardSubtitle>
          <CardText>First card</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      <div>
        <InputGroup>
          <InputGroupText>@</InputGroupText>
          <Input placeholder='username' />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupText>
            <Input addon aria-label='Checkbox for following text input' type='checkbox' />
          </InputGroupText>
          <Input placeholder='Check it out' />
        </InputGroup>
        <br />
        <InputGroup>
          <Input placeholder='username' />
          <InputGroupText>@example.com</InputGroupText>
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupText>$</InputGroupText>
          <Input placeholder='Dolla dolla billz yo!' />
          <InputGroupText>₹</InputGroupText>
        </InputGroup>
      </div>

      <Pagination size=''>
        <PaginationItem>
          <PaginationLink first href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' previous />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' next />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' last />
        </PaginationItem>
      </Pagination>

      <div className='d-flex p-5'>
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} direction={direction}>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu {...args}>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>Some Action</DropdownItem>
            <DropdownItem text>Dropdown Item Text</DropdownItem>
            <DropdownItem disabled>Action (disabled)</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Foo Action</DropdownItem>
            <DropdownItem>Bar Action</DropdownItem>
            <DropdownItem>Quo Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div>
        <p>
          Somewhere in here is a{' '}
          <a href='https://example.com' target='_blank' rel='noreferrer' id='TooltipExample'>
            tooltip
          </a>
          .
        </p>
        <Tooltip {...args} isOpen={tooltipOpen} target='TooltipExample' toggle={toggleToolTip}>
          Hello world!
        </Tooltip>
      </div>
    </>
  );
};

export default ComponentPractice;
