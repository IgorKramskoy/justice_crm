import './App.css';
import { Wrapper } from './Components/Common/Wrapper';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes'

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Routes>
          {routes.map(({path, element}) => (
            <Route key={path} path={path} element={element}/>
          ))}
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
