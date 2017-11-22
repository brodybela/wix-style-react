webpackJsonp([520],{1592:function(module,exports){module.exports="import React from 'react';\nimport RangeInputWithLabelComposite from './RangeInputWithLabelComposite';\nimport ReactDOM from 'react-dom';\nimport $ from 'jquery';\n\nconst rangeInputWithLabelCompositeDriverFactory = ({element, wrapper}) => {\n  const label = element.childNodes[0].childNodes[0];\n  const hasLabel = label.tagName.toLowerCase() === 'label';\n  const firstInput = hasLabel ? element.childNodes[1].childNodes[0] : element.childNodes[0].childNodes[0];\n  const lastInput = hasLabel ? element.childNodes[1].childNodes[1] : element.childNodes[0].childNodes[1];\n  return {\n    exists: () => !!element,\n    getLabel: () => label.textContent,\n    hasLabel: () => label.tagName.toLowerCase() === 'label',\n    hasInputs: () => !!firstInput && !!lastInput,\n    getAttr: attrName => element.getAttribute(attrName),\n    getNumberOfChildren: () => hasLabel ? element.childNodes[1].childElementCount : element.childNodes[0].childElementCount,\n    hasFieldLabelAttributes: () => !!$(element).find('[data-hook=\"field-label-attributes\"]').length,\n    setProps: props => {\n      ReactDOM.render(<div ref={r => element = r}><RangeInputWithLabelComposite {...props}/></div>, wrapper);\n    }\n  };\n};\n\nexport default rangeInputWithLabelCompositeDriverFactory;\n"}});