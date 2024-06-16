import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { FavoritesContext, FavoritesSlice } from './store/favoritesSlice'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FavoritesContext.Provider value={new FavoritesSlice()}>
      <App />
    </FavoritesContext.Provider>
  </React.StrictMode>
)
