webpackJsonp([326],{1786:function(module,exports){module.exports="import React from 'react';\nimport ReactDOM from 'react-dom';\n\nconst labelDriverFactory = ({element, wrapper, component}) => {\n  return {\n    exists: () => !!element,\n    getTagName: () => element.tagName.toLowerCase(),\n    getLabelText: () => element.textContent,\n    getClassList: () => element.className,\n    getAttr: attrName => element.getAttribute(attrName),\n    setProps: props => {\n      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));\n      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);\n    }\n  };\n};\n\nexport default labelDriverFactory;\n"}});