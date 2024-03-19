import logo from './logo.svg';
import './App.css';
import LoginFile from './component/loginFile';
import { Route,BrowserRouter,Routes } from 'react-router-dom' ; 
import Explore from './component/explore';
import BookDetail from './BookDetail/BookDetail';
import CartPage from './CartPage/Cart';
const SideData = [
  {name : "热门好书"} , 
  {name : "最新上市"} , 
  {name : "幼儿图书"} , 
  {name : "教辅资料"} , 
  {name : "世界小说"} , 
  {name : "古代名著"} , 

]

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginFile/>}/>
        <Route path='/explore' element={<Explore data={SideData}/>} />
        <Route path='/BookDetail/*' element={<BookDetail data={SideData}/>}/>
        <Route path='/Cart' element={<CartPage data={SideData}/>}/>
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
