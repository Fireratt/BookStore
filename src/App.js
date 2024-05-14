import logo from './logo.svg';
import './App.css';
import LoginFile from './View/loginFile';
import { Route,BrowserRouter,Routes } from 'react-router-dom' ; 
import Explore from './View/Explore';
import BookDetail from './View/BookDetail';
import CartPage from './View/Cart';
import OrderPage from './View/Order';
import InformationPage from './View/Information';
import RegisterPage from './View/RegisterPage';
const SideData = [
  {name : "热门好书"} , 
  {name : "最新上市"} , 
  {name : "幼儿图书"} , 
  {name : "教辅资料"} , 
  {name : "世界小说"} , 
  {name : "古代名著"} , 

]
const userData = [
  {Account : "Fireratt" , Pwd : "123456"} , 
  {Account : "Fireratt2" , Pwd : "1234567"} , 
]
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginFile data={userData}/>}/>
        <Route path='/explore' element={<Explore data={SideData}/>} />
        <Route path='/BookDetail/*' element={<BookDetail data={SideData}/>}/>
        <Route path='/Cart' element={<CartPage data={SideData}/>}/>
        <Route path='/Orders' element={<OrderPage data={SideData}/>}/>
        <Route path='/Information' element={<InformationPage data={SideData}/>}/>
        <Route path='/Register' element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
