webpackJsonp([240],{1872:function(module,exports){module.exports='import React, {Component} from \'react\';\nimport PropTypes from \'prop-types\';\nimport Tooltip from \'../Tooltip\';\nimport RichTextAreaLinkForm from \'./RichTextAreaLinkForm\';\nimport RichTextAreaButton from \'./RichTextAreaButton\';\n\nclass RichTextAreaLinkButton extends Component {\n  state = {\n    isFormVisible: false\n  };\n\n  toggleForm = () => {\n    this.state.isFormVisible ?\n      this.hideForm() :\n      this.showForm();\n  };\n\n  showForm = () => {\n    this.setState({isFormVisible: true});\n  };\n\n  hideForm = () => {\n    this.setState({isFormVisible: false});\n  };\n\n  handleFormSubmit = linkData => {\n    this.props.onClick(linkData);\n    this.hideForm();\n  };\n\n  getTooltipContent = isSelectionExpanded => (\n    <RichTextAreaLinkForm\n      onSubmit={this.handleFormSubmit}\n      onCancel={this.hideForm}\n      isTextInputVisible={isSelectionExpanded}\n      />\n  );\n\n  render() {\n    const {isFormVisible} = this.state;\n    const {isActive, onClick, isSelectionExpanded} = this.props;\n\n    return (\n      <Tooltip\n        appendToParent\n        content={this.getTooltipContent(isSelectionExpanded)}\n        overlay=""\n        alignment="center"\n        placement="bottom"\n        showTrigger="custom"\n        hideTrigger="custom"\n        hideDelay={0}\n        moveBy={{x: 2, y: 0}}\n        active={isFormVisible}\n        onClickOutside={this.hideForm}\n        >\n        <RichTextAreaButton\n          disabled={this.props.disabled}\n          onClick={isActive ? onClick : this.toggleForm}\n          type="link"\n          isActive={isActive}\n          isTooltipDisabled={isFormVisible}\n          />\n      </Tooltip>\n    );\n  }\n}\n\nRichTextAreaLinkButton.propTypes = {\n  onClick: PropTypes.func.isRequired,\n  isActive: PropTypes.bool,\n  disabled: PropTypes.bool,\n  isSelectionExpanded: PropTypes.bool\n};\n\nexport default RichTextAreaLinkButton;\n'}});