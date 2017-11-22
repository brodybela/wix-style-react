webpackJsonp([164],{1948:function(module,exports){module.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport styles from './Tag.scss';\nimport classNames from 'classnames';\nimport WixComponent from '../BaseComponents/WixComponent';\nimport Typography from '../Typography';\nimport SmallX from '../Icons/dist/components/SmallX';\n\n/**\n  * A Tag component\n  */\nclass Tag extends WixComponent {\n  render() {\n    const {id, children, thumb, removable, onRemove, size, wrap, disabled, theme} = this.props;\n\n    const className = classNames({\n      [styles.tag]: true,\n      [styles.large]: size === 'large',\n      [styles.tagWrap]: wrap,\n      [styles.disabled]: disabled,\n      [styles[`${theme}Theme`]]: true\n    });\n\n    const innerClassName = classNames({\n      [styles.innerTagWrap]: wrap,\n      [Typography.t4]: true\n    });\n\n    const title = wrap ? children : '';\n\n    return (\n      <span className={className} disabled={disabled} id={id} title={title}>\n        {thumb && <span className={styles.thumb}>{thumb}</span>}\n        <span className={innerClassName}>{children}</span>\n        {removable && !disabled && <a className={styles.tagRemoveButton} onClick={() => onRemove(id)}><SmallX/></a>}\n      </span>\n    );\n  }\n}\n\nTag.propTypes = {\n  children: PropTypes.string.isRequired,\n\n  /** when set to true this component is disabled  */\n  disabled: PropTypes.bool,\n\n  /** The id of the Tag  */\n  id: PropTypes.string.isRequired,\n\n  /** Callback function when removing the Tag  */\n  onRemove: PropTypes.func,\n\n  /** If the Tag is removable then it will contain a small clickable X */\n  removable: PropTypes.bool,\n\n  /** The height of the Tag */\n  size: PropTypes.oneOf(['small', 'large']),\n\n  /** theme of the Tag */\n  theme: PropTypes.oneOf(['standard', 'error', 'warning']),\n\n  /** An optional thumb to display as part of the Tag */\n  thumb: PropTypes.element,\n\n  /** wether to display elipsis (...) for long content */\n  wrap: PropTypes.bool\n};\n\nTag.defaultProps = {\n  onRemove: () => {},\n  size: 'small',\n  removable: true,\n  theme: 'standard'\n};\n\nexport default Tag;\n"}});