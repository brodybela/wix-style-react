webpackJsonp([566],{1546:function(module,exports){module.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport WixComponent from '../BaseComponents/WixComponent';\nimport omit from 'lodash/omit';\nimport DropdownLayout from '../DropdownLayout/DropdownLayout';\nimport Button from '../Button';\nimport styles from './ButtonWithOptions.scss';\n\nclass ButtonWithOptions extends WixComponent {\n  constructor(props) {\n    super(props);\n    this.state = {showOptions: false};\n\n    this.onSelect = this.onSelect.bind(this);\n    this.hideOptions = this.hideOptions.bind(this);\n    this.showOptions = this.showOptions.bind(this);\n\n    if (props.children) {\n      this.sortChildren(props);\n    }\n  }\n\n  componentWillReceiveProps(nextProps) {\n    this.sortChildren(nextProps);\n  }\n\n  sortChildren(props) {\n    [this.buttonElement, ...this.optionsElement] = React.Children.toArray(props.children);\n  }\n\n  renderButton() {\n    return React.cloneElement(this.buttonElement, {\n      onClick: this.showOptions\n    });\n  }\n\n  renderDropdownLayout() {\n    const dropdownProps = omit(this.props, ['dataHook', 'restrainDropdownSize']);\n\n    const dropdownLayoutOptions = React.Children.map(this.optionsElement, option => {\n      const {children: value, ...rest} = option.props;\n      return {value, ...rest};\n    });\n\n    return (\n      <DropdownLayout\n        {...dropdownProps}\n        dataHook=\"buttonWithOptions-dropdownLayout\"\n        options={dropdownLayoutOptions}\n        theme={this.props.theme}\n        visible={this.state.showOptions}\n        onSelect={this.onSelect}\n        onClickOutside={this.hideOptions}\n        />\n    );\n  }\n\n  render() {\n    const {dropDirectionUp} = this.props;\n    const sizeRestrictionStyles = this.props.restrainDropdownSize ? {display: 'inline-block'} : {};\n\n    return (\n      <div style={sizeRestrictionStyles}>\n        {dropDirectionUp ? this.renderDropdownLayout() : null}\n        {this.renderButton()}\n        {!dropDirectionUp ? this.renderDropdownLayout() : null}\n      </div>\n    );\n  }\n\n  hideOptions() {\n    this.setState({showOptions: false});\n  }\n\n  showOptions() {\n    this.setState({showOptions: true});\n  }\n\n  onSelect(option, isSelectedOption) {\n    this.hideOptions();\n\n    if (!isSelectedOption) {\n      this.props.onSelect(option);\n    }\n  }\n}\n\nButtonWithOptions.defaultProps = {\n  ...DropdownLayout.defaultProps,\n  onSelect: () => {},\n  restrainDropdownSize: true\n};\n\nButtonWithOptions.propTypes = {\n  ...DropdownLayout.propTypes,\n  restrainDropdownSize: PropTypes.bool,\n  children: PropTypes.arrayOf((propValue, key) => {\n    if (key === 0 && propValue[key].type !== ButtonWithOptions.Button) {\n      return new Error(`ButtonWithOptions: Invalid Prop children, first child must be ButtonWithOptions.Button`);\n    }\n\n    if (key !== 0) {\n      React.Children.forEach(propValue[key], item => {\n        if (item.type !== ButtonWithOptions.Option) {\n          return new Error(`ButtonWithOptions: Invalid Prop children was given. Validation failed on child number ${key}`);\n        }\n      });\n    }\n  })\n};\n\nButtonWithOptions.Option = () => null;\nButtonWithOptions.Option.displayName = 'ButtonWithOptions.Option';\n\nButtonWithOptions.Button = props => (\n  <div className={styles.buttonWrapper} data-hook=\"buttonWithOptions-button-wrapper\">\n    <Button {...props}/>\n  </div>\n);\n\nButtonWithOptions.Button.displayName = 'ButtonWithOptions.Button';\n\nexport default ButtonWithOptions;\n\n"}});