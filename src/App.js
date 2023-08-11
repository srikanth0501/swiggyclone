import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='main'>
      <div className='left'>
        <nav>
          <img src='https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png'></img>
          <div className='btn'>
            <button>Login</button>
            <button className='signup'>Signup</button>
          </div>
        </nav>
        <div className='txt'>
        <h1>Game Night</h1>
        <p>Order food from your favourite resturants</p>
        <div className='inp'>
          <input type='text' placeholder='Enter your delivery location'></input>
          <button className='txtstyle'>FIND FOOD</button>
        
        </div>
        
        <p>Popular cities in India </p>
        <p>Mumbai Chennai Bhubaneshwar Gujurat Andhapradesh Odisha</p>
      </div>
          
        </div>
        
      <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq'></img> 
    </div>
  );
}

export default App;
