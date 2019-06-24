import { connect } from 'react-redux'
import { folderTreeItemClieckEvent, toggleExpandClickEvent} from '../actions'
import folderTreeItem from '../components/folderTreeItem'

const mapStateTopProps = (state) => ({
  folderTreeItem: state.folderTreeItem,
})

const mapDispatchToProps = (dispatch) => ({
  onFolderClick: (fullpath) => {
    console.log('==> イベント発行(コンテナ) folderTreeItemClieckEvent fullpath = ' + fullpath)
    dispatch(folderTreeItemClieckEvent(fullpath))
  },
  onExpandClick: (fullpath, isExpanded) => {
    console.log('==> イベント発行(コンテナ) toggleExpandClickEvent fullpath = ' + fullpath)
    dispatch(toggleExpandClickEvent(fullpath, isExpanded))
  },
})

const FolderTreePanel = connect(
  mapStateTopProps,
  mapDispatchToProps
)(FolderTreeItem)

export default FolderTreePanel
