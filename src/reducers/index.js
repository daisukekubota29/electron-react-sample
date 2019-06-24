import { combineReducers } from 'redux'
import folderTreeItem from './folderTreeItem'
import pathItemList from './pathItemList'

const explorerApp = combineReducers({
  folderTreeItem,
  pathItemList,
})

export default explorerApp
