import React from 'react'

import styles from './ListSidebar.module.css'

import ListItem from './ListItem'

class ListSidebar extends React.Component {
  render() {
    return (
      <div className={styles.ListSidebar}>
        <ListItem name="List 1" />
        <ListItem name="List 1" />
        <ListItem name="List 1" />
        <ListItem name="List 1" />
        <ListItem name="List 1" />
        <ListItem name="List 1" />
        <ListItem name="List 1" />
        <ListItem name="List 1" />
      </div>
    )
  }
}

export default ListSidebar
