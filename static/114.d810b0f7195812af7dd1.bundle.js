webpackJsonp([114],{1998:function(module,exports){module.exports="import React from 'react';\nimport PropTypes from 'prop-types';\n\nexport default function X(props) {\n\n  const {width, height, color, shapeRendering, thickness} = props;\n\n  let path = '';\n  let i;\n\n  for (i = 0; i <= thickness / 2; ++i) {\n    path += `M${i} 0 L${width} ${height - i} `;\n    path += `M${width - i} 0 L0 ${height - i} `;\n  }\n\n  for (i = 1; i <= thickness / 2; ++i) {\n    path += `M0 ${i} L${width - i} ${height} `;\n    path += `M${width} ${i} L${i} ${height} `;\n  }\n\n  const style = {stroke: color, strokeWidth: '1px'};\n\n  return (\n    <svg width={width} height={height} style={{shapeRendering}}>\n      <path d={path} style={style}/>\n    </svg>\n  );\n}\n\nX.displayName = 'X';\n\nX.propTypes = {\n  width: PropTypes.number.isRequired,\n  height: PropTypes.number.isRequired,\n  thickness: PropTypes.number.isRequired,\n  color: PropTypes.string,\n  shapeRendering: PropTypes.string.isRequired\n};\n\nX.defaultProps = {\n  shapeRendering: 'crispEdges',\n  thickness: 1\n};\n"}});