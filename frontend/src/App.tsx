import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './RoutesApp'
import Header from './components/Header/Header'
import { ToastContainer } from 'react-toastify'
import { GlobalStyle, AppContainer, MainContainer } from './AppStyles'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <AppContainer>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <MainContainer>
          <RoutesApp />
        </MainContainer>
      </BrowserRouter>
      <ToastContainer />
    </AppContainer>
  )
}

export default App