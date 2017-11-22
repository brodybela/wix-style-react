webpackJsonp([541],{1571:function(module,exports){module.exports="import React from 'react';\nimport color from 'color';\nimport {object, func} from 'prop-types';\n\nimport WixComponent from '../BaseComponents/WixComponent';\nimport Input from '../Input';\n\nimport css from './color-picker-converter.scss';\n\nexport default class ColorPickerConverterHex extends WixComponent {\n\n  static propTypes = {\n    current: object.isRequired,\n    onChange: func.isRequired\n  }\n\n  constructor(props) {\n    super(props);\n    this.change = this.change.bind(this);\n    this.state = {\n      hex: props.current.hex(),\n      inFocus: false\n    };\n  }\n\n  render() {\n    return (\n      <div className={css.root}>\n        <Input size=\"small\" value={this.state.hex} onChange={this.change} onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}/>\n      </div>\n    );\n  }\n\n  componentWillReceiveProps(props) {\n    if (!this.state.inFocus && this.state.hex !== props.current.hex()) {\n      this.setState({\n        hex: props.current.hex()\n      });\n    }\n  }\n\n  change({target: {value}}) {\n    this.setState({hex: value}, () => {\n      const color = safeColor(value);\n      if (color) {\n        this.props.onChange(color);\n      }\n    });\n  }\n\n  handleOnFocus = () => {\n    this.setState({\n      inFocus: true\n    });\n  }\n\n  handleOnBlur = () => {\n    this.setState({\n      inFocus: false,\n      hex: this.props.current.hex()\n    });\n  }\n}\n\nfunction safeColor(input) {\n  try {\n    return color(input);\n  } catch (error) {\n    return null;\n  }\n}\n"}});