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
import Administrator from './View/Administrator';
import BookAdd from './View/BookAdd';
import SearchResult from './View/SearchResult';
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
        <Route path='/login' element={<LoginFile data={userData}/>}/>
        <Route path='/' element={<Explore data={SideData}/>} />
        <Route path='/BookDetail/*' element={<BookDetail data={SideData}/>}/>
        <Route path='/Cart' element={<CartPage data={SideData}/>}/>
        <Route path='/Orders' element={<OrderPage data={SideData}/>}/>
        <Route path='/Information' element={<InformationPage data={SideData}/>}/>
        <Route path='/Register' element={<RegisterPage/>}/>
        <Route path='/Administrator' element={<Administrator data={SideData}/>}/>
        <Route path='/AddBook' element={<BookAdd data={SideData}/>}/>
        <Route path='/SearchResult' element={<SearchResult data={SideData}/>}/>
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
