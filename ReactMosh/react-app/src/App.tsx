import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';

function App() {
  const [alertVisible, setAlertVisiblity] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisiblity(false)}>My Alert</Alert>}
      <Button onClick={() => setAlertVisiblity(true)}>My Button</Button>
      <ListGroup items={['Hello React', 'Hello Kenil', 'Hello abhishek']} heading={'MyList'} onSelectItem={() => {}} />
    </div>
  );
}

export default App;
