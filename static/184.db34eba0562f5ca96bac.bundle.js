webpackJsonp([184],{1928:function(module,exports){module.exports="const inputDriverFactory = ({element}) => {\n  return {\n    exists: () => !!element,\n    getValue: () => element.value,\n    hasClass: className => element.getAttribute('class').indexOf(className) > -1\n  };\n};\n\nexport default inputDriverFactory;\n"}});