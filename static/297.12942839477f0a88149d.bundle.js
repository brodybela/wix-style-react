webpackJsonp([297],{1815:function(module,exports){module.exports="import React from 'react';\nimport ReactDOM from 'react-dom';\nimport ReactTestUtils from 'react-dom/test-utils';\n\nconst modalDriverFactory = ({element, wrapper, component}) => {\n\n  const getPortal = () => document.body.querySelector('.portal');\n  const getOverlay = () => document.body.querySelector('.ReactModal__Overlay');\n  const getContent = () => document.body.querySelector('.ReactModal__Content');\n\n  return {\n    exists: () => !!(getPortal()),\n    element: () => element,\n    isOpen: () => !!(getContent()),\n    isThemeExist: theme => !!getPortal().querySelector(`.${theme}`),\n    getChildBySelector: selector => getPortal().querySelector(selector),\n    isScrollable: () => !getPortal().classList.contains('portalNonScrollable'),\n    clickOnOverlay: () => {\n      const overlay = getOverlay();\n      ReactTestUtils.Simulate.click(overlay);\n    },\n    setProps: props => {\n      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));\n      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);\n    }\n  };\n};\n\nexport default modalDriverFactory;\n"}});