import ProfilePhoto from './components/profile/ProfilePhoto' 
import FullName from './components/profile/FullName'
import Adresse from './components/profile/Adresse';
function App() {
  return (
    <>
    <ProfilePhoto></ProfilePhoto>
    <h2>My FullName: <FullName/></h2>
    <h2>My Adresse:<Adresse/></h2>

    </>
  );
}

export default App;
