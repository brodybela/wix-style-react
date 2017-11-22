webpackJsonp([588],{1524:function(module,exports){module.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport WixComponent from '../../BaseComponents/WixComponent';\nimport TextLinkLayout from '../../BaseComponents/TextLinkLayout';\n\nexport default class BaseTextLink extends WixComponent {\n\n  static propTypes = {\n    ...TextLinkLayout.propTypes,\n    link: PropTypes.string.isRequired,\n    disabled: PropTypes.bool,\n    download: PropTypes.bool,\n    rel: PropTypes.string,\n    target: PropTypes.string,\n    ariaLabel: PropTypes.string,\n    color: PropTypes.string,\n    onMouseEnter: PropTypes.func,\n    onMouseLeave: PropTypes.func,\n    onClick: PropTypes.func\n  };\n\n  static defaultProps = {\n    ...TextLinkLayout.defaultProps,\n    disabled: false,\n    download: false,\n    rel: null,\n    target: null,\n    onClick: () => {}\n  };\n\n  render() {\n    const {ariaLabel, disabled, link, children, download, rel, target, onMouseEnter, onMouseLeave, onClick} = this.props;\n    const props = {\n      download,\n      href: `${link}`,\n      onClick: event => disabled ? event.preventDefault() : onClick(event),\n      role: 'link',\n      style: {\n        textDecoration: 'inherit',\n        color: this.props.color ? this.props.color : 'inherit',\n        tabIndex: 0,\n        display: 'inline-block'\n      }\n    };\n\n    if (ariaLabel) {\n      props['aria-label'] = ariaLabel;\n    }\n\n    if (rel) {\n      props.rel = rel;\n    }\n\n    if (target) {\n      props.target = target;\n    }\n\n    if (onMouseEnter) {\n      props.onMouseEnter = onMouseEnter;\n    }\n\n    if (onMouseLeave) {\n      props.onMouseLeave = onMouseLeave;\n    }\n\n    return (\n      <a {...props}>\n        <TextLinkLayout {...this.props}>\n          {children}\n        </TextLinkLayout>\n      </a>\n    );\n  }\n}\n"}});