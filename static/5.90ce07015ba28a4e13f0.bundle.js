webpackJsonp([5],{564:function(module,exports){module.exports="import React from 'react';\nimport {oneOf} from 'prop-types';\nimport CoreButton from '../../core/Button';\nimport {theme} from './theme';\n\nconst Button = ({height, skin, ...coreProps}) => (\n  <CoreButton {...coreProps} theme={theme({height, skin})}/>\n);\n\nButton.propTypes = {\n  ...CoreButton.propTypes,\n  height: oneOf(['small', 'medium', 'large', 'x-large']),\n  skin: oneOf(['standard', 'emptyStandard', 'danger', 'attention'])\n};\n\nButton.defaultProps = {\n  height: 'medium',\n  skin: 'standard'\n};\n\nexport default Button;\n"}});