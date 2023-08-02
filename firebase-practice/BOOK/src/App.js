import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from './firebase';
import './App.css';
import SignupPage from './pages/Signup';
import SigninPage from './pages/Signin';
import './App.css';
import { useEffect, useState } from 'react';
import { getFirestore, collection, addDoc, doc, getDoc, query, where, getDocs, updateDoc } from 'firebase/firestore';

const auth = getAuth(app);

const firestore = getFirestore(app);

function App() {
  const [user, setUser] = useState(null);

  const writeData = async () => {
    const result = await addDoc(collection(firestore, 'cities'), {
      name: 'Gandhinagar',
      pincode: 1234,
      lat: 123,
      long: 456,
    });
    console.log('result: ', result);
  };

  const makeSubCollection = async () => {
    await addDoc(collection(firestore, 'cities/3OHn1n5ksIsEbJcMg6iB/places'), {
      name: 'This is a place',
      desc: 'Awsm Desc',
      date: Date.now(),
    });
  };

  const getDocument = async () => {
    const ref = doc(firestore, 'cities', '3OHn1n5ksIsEbJcMg6iB');
    const snap = await getDoc(ref);
    console.log('snap: ', snap.data());
  };

  const getDocumentsByQuery = async () => {
    const collectionRef = collection(firestore, 'users');
    const q = query(collectionRef, where('isMale', '==', true));
    const snapshot = await getDocs(q);

    snapshot.forEach((data) => {
      console.log(data.data());
    });
  };

  const update = async () => {
    const docRef = doc(firestore, 'cities', '3OHn1n5ksIsEbJcMg6iB');
    await updateDoc(docRef, {
      name: 'rajkot',
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log('You are logged out');
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div className='App'>
        <SignupPage />
        <SigninPage />
      </div>
    );
  }

  return (
    <div className='App'>
      <h1>Hello {user.email}</h1>
      <button onClick={() => signOut(auth)}>Logout</button>
      <button onClick={writeData}>Put Data</button>
      <button onClick={makeSubCollection}>Put Sub Data</button>
      <button onClick={getDocument}>Get Document</button>
      <button onClick={getDocumentsByQuery}>Get Document By Query</button>
      <button onClick={update}>Update</button>
    </div>
  );
}

export default App;
