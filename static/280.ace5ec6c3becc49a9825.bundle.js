webpackJsonp([280],{1832:function(module,exports){module.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport Button from '../../Backoffice/Button';\nimport TextLink from '../../Backoffice/TextLink';\n\nconst ActionButton = ({children, onClick, type, link}) => {\n  const commonProps = {\n    dataHook: 'notification-cta-button',\n    onClick: e => onClick(e)\n  };\n\n  if (type === 'textLink') {\n    return (\n      <TextLink underlineStyle=\"always\" darkBackground link={link} {...commonProps} >\n        {children}\n      </TextLink>\n    );\n  } else {\n    return (\n      <Button height=\"small\" theme=\"transparent\" {...commonProps}>\n        {children}\n      </Button>\n    );\n  }\n};\n\nActionButton.propTypes = {\n  children: PropTypes.any,\n  onClick: PropTypes.func,\n  link: PropTypes.string,\n  type: PropTypes.string\n};\n\nActionButton.defaultProps = {\n  onClick: e => e.preventDefault(),\n  type: 'button'\n};\n\nActionButton.displayName = 'Notification.ActionButton';\n\nexport default ActionButton;\n"}});