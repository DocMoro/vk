import './App.css'

import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'

import Header from './components/Header/Header'
import FavoritesPage from './pages/FavoritesPage.ts/FavoritesPage'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import { path, START_PARAMS } from './shared/constants/var'

const ConnectedMoviesPage = observer(MoviesPage)
const ConnectFavoritesPage = observer(FavoritesPage)

const MainPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(`${path.movies}?${START_PARAMS}`)
  }, [])
  return <div></div>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },

  {
    path: path.movies,
    element: (
      <>
        <Header />
        <ConnectedMoviesPage />
      </>
    )
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
