webpackJsonp([178],{1934:function(module,exports){module.exports="const labelDriverFactory = ({element}) => {\n  return {\n    exists: () => !!element,\n    getContent: () => element.innerHTML,\n    getAttribute: attributeName => element.getAttribute(attributeName),\n    hasClass: className => element.getAttribute('class').indexOf(className) > -1\n  };\n};\n\nexport default labelDriverFactory;\n"}});