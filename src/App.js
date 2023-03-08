import './hari2style.css';
import Showdata from './components/Showdata.jsx';
import Signup from './components/Signup.jsx';
import Update from './components/Update.jsx';
import Delete from './components/Delete.jsx';
function App() {
  return (
    <center>
    <div className="App">
      <h1>COLLEGE LOGIN</h1>
      <Signup/>
      <Showdata/>
      <Update/>
      <Delete/>
      
    </div>
  </center>
)
 }

export default App;