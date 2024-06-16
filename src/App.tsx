import './App.css'

import { observer } from 'mobx-react-lite'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainPage from './pages/MoviesPage/MoviesPage'
const ConnectedMainPage = observer(MainPage)

const router = createBrowserRouter([
  {
    path: '/',
    element: <ConnectedMainPage />
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App
