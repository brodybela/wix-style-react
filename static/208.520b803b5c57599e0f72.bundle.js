webpackJsonp([208],{1904:function(module,exports){module.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport styles from './styles.scss';\n\nconst Link = ({children, icon, ...rest}) =>\n  <a className={styles.link} {...rest}>\n    { icon && <div className={styles.linkIcon}>{icon}</div> }\n    {children}\n  </a>;\n\nLink.propTypes = {\n  children: PropTypes.node,\n  icon: PropTypes.node\n};\n\nexport default Link;\n\n"}});