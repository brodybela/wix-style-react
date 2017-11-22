webpackJsonp([624],{1488:function(module,exports){module.exports="import {func} from 'prop-types';\nimport InputWithOptions from '../InputWithOptions/InputWithOptions';\n\nclass AutoComplete extends InputWithOptions {\n  static propTypes = {\n    ...InputWithOptions.propTypes,\n    predicate: func\n  }\n\n  static defaultProps = {\n    ...InputWithOptions.defaultProps,\n    predicate: () => true\n  }\n\n  dropdownAdditionalProps() {\n    const {options, predicate} = this.props;\n    const filterFunc = this.state.isEditing ? predicate : () => true;\n    return {options: options.filter(filterFunc)};\n  }\n}\n\nexport default AutoComplete;\n"}});