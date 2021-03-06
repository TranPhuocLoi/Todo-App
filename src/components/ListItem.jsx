import React from 'react'

import styles from './ListItem.module.css'

const ListItem = props => {
  const { name } = props
  return <div className={styles.ListItem}>{name || '(untitled)'}</div>
}

export default ListItem
