import React from 'react'
import ListSidebar from '../components/ListSidebar'

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <ListSidebar />
        <div style={{ marginLeft: 250 }}>THE CONTENT!</div>
      </div>
    )
  }
}

export default TodoApp
