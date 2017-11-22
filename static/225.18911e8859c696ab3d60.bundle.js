webpackJsonp([225],{1887:function(module,exports){module.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport WixComponent from '../../BaseComponents/WixComponent';\nimport Text from '../../Text';\nimport s from './ProgressBar.scss';\n\nclass ProgressBar extends WixComponent {\n  static propTypes = {\n    progress: PropTypes.number.isRequired\n  };\n\n  render() {\n    return (\n      <div className={s['progress-bar']}>\n        <Text appearance=\"T4.3\">{`${this.props.progress}%`}</Text>\n        <span className={s.bar}>\n          <span className={s['bar-value']} style={{width: this.props.progress + '%'}}/>\n          <span className={s['bar-leftover']} style={{width: (100 - this.props.progress) + '%'}}/>\n        </span>\n      </div>\n    );\n  }\n}\n\nexport default ProgressBar;\n"}});