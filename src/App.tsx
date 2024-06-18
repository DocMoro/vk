import './App.css'

import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'

import Header from './components/Header/Header'
import FavoritesPage from './pages/FavoritesPage.ts/FavoritesPage'
import MainPage from './pages/MainPage/MainPage'
import { path } from './shared/constants/var'

const ConnectedMainPage = observer(MainPage)
const ConnectFavoritesPage = observer(FavoritesPage)

const NavigateEL = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/movies?page=1&limit=50')
  }, [])
  return <div></div>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavigateEL />
  },

  {
    path: '/movies',
    element: <ConnectedMainPage />
  },
  {
    path: path.favorites,
    element: (
      <>
        <Header />
        <ConnectFavoritesPage />
      </>
    )
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
