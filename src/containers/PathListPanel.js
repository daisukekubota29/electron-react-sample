import { connect } from 'react-redux'
import PathItemList from '../components/PathItemList'

const mapStateTopProps = (state) => {
  return {
    pathItemList: state.pathItemList
  }
}

const PathItemListPanel = connect(
  mapStateTopProps
)(PathItemList)

export default PathItemListPanel
