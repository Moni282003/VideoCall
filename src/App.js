import { Route,Routes,Navigate } from 'react-router-dom';
import Home from './Home';
import Room from './Room';
import Signin from './Signin';
import SignUp from './SignUp';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/room/:roomID" element={<Room/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
    </Routes>
  );
}

export default App;
