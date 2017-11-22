webpackJsonp([207],{1905:function(module,exports){module.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport Tooltip from '../../../Tooltip';\nimport styles from './styles.scss';\n\nconst TinyLink = ({icon, tooltip, ...rest}) =>\n  <Tooltip\n    content={<span style={{whiteSpace: 'nowrap'}}>{tooltip}</span>}\n    moveBy={{x: 3, y: 15}}\n    appendToParent\n    >\n    <a className={`${styles.link} ${styles.tinyLink}`} {...rest}>\n      <div className={styles.linkIcon}>{icon}</div>\n    </a>\n  </Tooltip>;\n\nTinyLink.propTypes = {\n  icon: PropTypes.node.isRequired,\n  tooltip: PropTypes.string.isRequired\n};\n\nexport default TinyLink;\n\n"}});