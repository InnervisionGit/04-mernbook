import './App.css';
import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';
import Feed from './Components/Feed.js';
import Widget from './Components/Widget.js';

function App() {
  return (
    <div className='app'>
      <h2>MongoDB: 04-mernbook</h2>
      <h1>9LxCDH1V5IJ3Sy0c</h1>
      <Header />
      <div className='app-body'>
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;
