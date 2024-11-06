import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage} from './components/homePage'
import { Navbar} from './components/navbar'
import { Footer} from './components/footer'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
     
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    
      <Footer/>
    </BrowserRouter>
  )
}


export default App;
