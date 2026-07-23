import './App.css'
import AppContent from './component/AppContent'

import { BrowserRouter } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import { store } from './app/Store'


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  )
}

export default App