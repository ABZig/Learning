import { useForm, useFieldArray, FieldErrors } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Nav, NavItem, NavLink, Spinner, Breadcrumb, BreadcrumbItem, Container, Col, Row, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let renderCount = 0;

type FormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
  phNumbers: {
    number: string;
  }[];
  age: number;
  dob: Date;
};

const YouTubeForm = (args: any) => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: 'Batman',
      email: '',
      channel: '',
      social: {
        twitter: '',
        facebook: '',
      },
      phoneNumbers: ['', ''],
      phNumbers: [{ number: '' }],
      age: 0,
      dob: new Date(),
    },
    mode: 'onTouched', //onBlur, onSubmit, all(blur + change), onChange
  });
  const { register, control, handleSubmit, formState, /*watch, isValid*/ getValues, setValue, reset, trigger } = form;
  const { errors /* touchedFields, dirtyFields, isSubmitted, SubmitCount*/, isDirty, isSubmitting, isSubmitSuccessful } = formState;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [showSpinner, setShowSpinner] = useState(false);

  const { fields, append, remove } = useFieldArray({
    name: 'phNumbers',
    control,
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted', data);
  };

  const onError = (errors: FieldErrors<FormValues>) => {
    console.log('Form errors', errors);
  };

  const handleGetValues = () => {
    console.log('Get values', getValues());
  };

  const handleSetValues = () => {
    setValue('username', '', {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  //reset form after submission process
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  // const watchForm = watch();

  // useEffect(() => {
  //   const subscription = watch((value) => {
  //     console.log(value);
  //   });
  //   return () => subscription.unsubscribe();
  // }, [watch]);

  renderCount++;

  return (
    <>
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
          <Col className='bg-light border'>.col</Col>
          <Col className='bg-light border'>.col</Col>
          <Col className='bg-light border'>.col</Col>
          <Col className='bg-light border'>.col</Col>
        </Row>
        <Row>
          <Col className='bg-light border' xs='3'>
            .col-3
          </Col>
          <Col className='bg-light border' xs='auto'>
            .col-auto - variable width content
          </Col>
          <Col className='bg-light border' xs='3'>
            .col-3
          </Col>
        </Row>
        <Row>
          <Col className='bg-light border' xs='6'>
            .col-6
          </Col>
          <Col className='bg-light border' xs='6'>
            .col-6
          </Col>
        </Row>
        <Row>
          <Col className='bg-light border' sm='4' xs='6'>
            .col-6 .col-sm-4
          </Col>
          <Col className='bg-light border' sm='4' xs='6'>
            .col-6 .col-sm-4
          </Col>
          <Col className='bg-light border' sm='4'>
            .col-sm-4
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
        color='light'
        outline
        style={{
          width: '18rem',
        }}
      >
        <img alt='Sample' src='https://picsum.photos/300/200' />

        <CardBody>
          <CardTitle tag='h5'>Card title</CardTitle>
          <CardSubtitle className='mb-2 text-muted' tag='h6'>
            Card subtitle
          </CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      <div className='youtube-form'>
        <h1>YouTube Form ({renderCount / 2})</h1>
        {/* <h2>Watched value:{JSON.stringify(watchForm)} </h2> */}

        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
          <div className='form-control'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              {...register('username', {
                required: {
                  value: true,
                  message: 'Username is required',
                },
              })}
            />
          </div>

          <p className='error'>{errors.username?.message}</p>

          <div className='form-control'>
            <label htmlFor='email'>E-mail</label>
            <input
              type='email'
              id='email'
              {...register('email', {
                pattern: {
                  value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email format',
                },
                validate: {
                  notAdmin: (fieldValue) => {
                    return fieldValue !== 'admin@example.com' || 'Enter a diffrent email address';
                  },

                  notBlackListed: (fieldValue) => {
                    return !fieldValue.endsWith('baddomain.com') || 'This domain is not supported';
                  },

                  emailAvailable: async (fieldValue) => {
                    const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`);
                    const data = await response.json();
                    return data.length == 0 || 'Email already exists';
                  },
                },
              })}
            />
          </div>

          <p className='error'>{errors.email?.message}</p>

          <div className='form-control'>
            <label htmlFor='channel'>Channel</label>
            <input
              type='text'
              id='channel'
              {...register('channel', {
                required: {
                  value: true,
                  message: 'Channel name is required',
                },
              })}
            />
          </div>

          <p className='error'>{errors.channel?.message}</p>

          <div className='form-control'>
            <label htmlFor='twitter'>Twitter</label>
            <input
              type='text'
              id='twitter'
              {...register('social.twitter', {
                required: {
                  value: true,
                  message: 'Twitter ID is required',
                },
              })}
            />
          </div>

          <p className='error'>{errors.social?.twitter?.message}</p>

          <div className='form-control'>
            <label htmlFor='facebook'>Facebook</label>
            <input
              type='text'
              id='facebook'
              {...register('social.facebook', {
                required: {
                  value: true,
                  message: 'Facebook ID is required',
                },
              })}
            />
          </div>

          <p className='error'>{errors.social?.facebook?.message}</p>

          <div className='form-control'>
            <label htmlFor='primary-phone'>Primary phone number</label>
            <input
              type='text'
              id='primary-phone'
              {...register('phoneNumbers.0', {
                required: {
                  value: true,
                  message: 'Primary phone number is required',
                },
              })}
            />
          </div>

          <p className='error'>{errors.phoneNumbers && errors.phoneNumbers[0]?.message}</p>

          <div className='form-control'>
            <label htmlFor='secondary-phone'>Secondary phone number</label>
            <input
              type='text'
              id='secondary-phone'
              {...register('phoneNumbers.1', {
                required: {
                  value: true,
                  message: 'Secondary phone number is required',
                },
              })}
            />
          </div>

          <p className='error'>{errors.phoneNumbers && errors.phoneNumbers[1]?.message}</p>

          <div>
            <label>List of phone numbers</label>
            <div>
              {fields.map((field, index) => {
                return (
                  <div className='form-control' key={field.id}>
                    <input type='text' {...register(`phNumbers.${index}.number` as const)} />
                    {index > 0 && (
                      <button type='button' onClick={() => remove(index)}>
                        Remove
                      </button>
                    )}
                  </div>
                );
              })}
              <button type='button' onClick={() => append({ number: '' })}>
                Add phone number
              </button>
            </div>
          </div>

          <div className='form-control'>
            <label htmlFor='age'>Age</label>
            <input
              type='number'
              id='age'
              {...register('age', {
                valueAsNumber: true,
                required: {
                  value: true,
                  message: 'Age is required',
                },
              })}
            />
          </div>

          <p className='error'>{errors.age?.message}</p>

          <div className='form-control'>
            <label htmlFor='dob'>Date of birth</label>
            <input
              type='date'
              id='dob'
              {...register('dob', {
                valueAsDate: true,
                required: {
                  value: true,
                  message: 'Date of birth is required',
                },
              })}
            />
          </div>

          <p className='error'>{errors.dob?.message}</p>

          <button disabled={!isDirty /*|| !isValid */ || isSubmitting}>Submit</button>
          <button type='button' onClick={() => reset()}>
            Reset
          </button>
          <button type='button' onClick={handleGetValues}>
            Get values
          </button>
          <button type='button' onClick={handleSetValues}>
            Set values
          </button>
          <button type='button' onClick={() => trigger()}>
            Validate
          </button>
        </form>
        <DevTool control={control} />
      </div>
    </>
  );
};

export default YouTubeForm;
