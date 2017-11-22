webpackJsonp([580],{1532:function(module,exports){module.exports="import React from 'react';\nimport ReactDOM from 'react-dom';\nimport ReactTestUtils from 'react-dom/test-utils';\nimport {isClassExists} from '../../test/utils';\n\nconst breadcrumbsDriverFactory = ({element, wrapper, component}) => {\n  const optionAt = position => element.childNodes[position];\n\n  return {\n    exists: () => !!element,\n    breadcrumbsLength: () => element.childNodes.length,\n    breadcrumbContentAt: position => optionAt(position).textContent,\n    clickBreadcrumbAt: position => ReactTestUtils.Simulate.click(optionAt(position).querySelector('[data-hook=\"breadcrumb-clickable\"]')),\n    getActiveItemId: () => {\n      const activeItem = element.querySelector('.active');\n\n      if (!activeItem) {\n        return null;\n      }\n\n      return Array.from(activeItem.parentNode.children).indexOf(activeItem);\n    },\n    isLarge: () => isClassExists(element, 'large'),\n    isMedium: () => isClassExists(element, 'medium'),\n    isOnWhiteBackground: () => isClassExists(element, 'onWhiteBackground'),\n    isOnGrayBackground: () => isClassExists(element, 'onGrayBackground'),\n    getLabelClassList: position => optionAt(position).querySelector('[data-hook=\"breadcrumbs-item\"]').className,\n    isActiveLinkAt: index => !!optionAt(index).querySelector('a'),\n    setProps: props => {\n      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));\n      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);\n    }\n  };\n};\n\nexport default breadcrumbsDriverFactory;\n"}});