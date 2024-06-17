import './App.css'

import { observer } from 'mobx-react-lite'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import FavoritesPage from './pages/FavoritesPage.ts/FavoritesPage'
import MainPage from './pages/MainPage/MainPage'
import { path } from './shared/constants/var'

const ConnectedMainPage = observer(MainPage)
const ConnectFavoritesPage = observer(FavoritesPage)

const router = createBrowserRouter([
  {
    path: '/',
    element: <ConnectedMainPage />
  },
  {
    path: path.movies,
    element: <ConnectedMainPage />
  },
  {
    path: path.favorites,
    element: <ConnectFavoritesPage />
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
