import './App.css';
import { Drawer } from 'antd';

const drowerStyle= {
  backgroundColor: '#0F1951',
  color: '#ffffff'
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Drawer
          placement="left"
          closable={false}
          visible={true}
          key="left"
          drawerStyle={drowerStyle}
          maskStyle={{opacity:0}}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
    </div>
  );
}

export default App;
