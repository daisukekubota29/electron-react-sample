import React from 'react'
import { connect } from 'react-redux'
import { openButtonClickEvent } from '../actions'

const inputStyle = {"width": "300px"}

const AddressBar = ({ dispatch }) => {
  let folderPath
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!folderPath.value.trim()) {
          return
        }
        const.log('==> イベント発行(コンテナ) openButtonClickEvent rootPath=' + folderPath.value)
        dispatch(openButtonClickEvent(folderPath.value))
      }}>
        <input style={inputStyle} ref={node => {
          folderPath = node
        }} />
        <button type="submit">開く</button>
      </from>
    </div>
  )
}

onst mapStateTopProps = (state) => {
  return {
    folderTreeItem: state.folderTreeItem,
  }
}

onst AddressBarPanel = connect(
  mapStateTopProps
)(AddressBar)

export default AddressBarPanel
