import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { Header } from './comnponent/header';
import { RequestCards } from './comnponent/card';
import { MainContent } from './comnponent/maincontent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Header />} /> */}

          <Route path="/" element={<Header />}>
            <Route path="/" element={<MainContent />} />
            <Route path="/card" element={<RequestCards />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

