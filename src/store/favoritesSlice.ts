import { makeAutoObservable } from 'mobx'
import { createContext } from 'react'

import { TFavoritesIDs } from '../shared/constants/type'
import { KEY_FAVORITES } from '../shared/constants/var'

class FavoritesSlice {
  favoritesIDs: TFavoritesIDs = {}

  constructor() {
    makeAutoObservable(this)

    const data = localStorage.getItem(KEY_FAVORITES)
    if (data) {
      this.favoritesIDs = JSON.parse(data)
    }
  }

  deleteFavoriteId(id: string) {
    delete this.favoritesIDs[id]
    this._localDatabaseUpdate()
  }

  addFavoriteId(id: string) {
    this.favoritesIDs[id] = true
    this._localDatabaseUpdate()
  }

  _localDatabaseUpdate() {
    localStorage.setItem(KEY_FAVORITES, JSON.stringify(this.favoritesIDs))
  }

  checkIsFavorite(id: string) {
    if (this.favoritesIDs[id]) {
      return true
    } else {
      return false
    }
  }

  getFavoritesIDs() {
    return Object.keys(this.favoritesIDs)
  }
}

const FavoritesContext = createContext<FavoritesSlice>(new FavoritesSlice())

export { FavoritesContext, FavoritesSlice }
