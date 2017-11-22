webpackJsonp([112],{2e3:function(module,exports){module.exports="import {pxDivide} from './utils';\n\nconst pallete = {\n  main: '#3899ec', //B10\n  mainHover: '#4eb7f5', //B20\n  dividers: '#eaf7ff', //B50\n  danger: '#d8504c', //R05\n  dangerHover: '#ee5951', //R10\n  white: '#ffffff', //D80\n  attention: '#fb7d33',\n  attentionHover: '#ff9a48'\n};\n\nconst heightMap = {\n  small: '30px',\n  medium: '36px',\n  large: '42px'\n};\n\nconst paddingMap = {\n  small: '0 17px',\n  medium: '0 23px',\n  large: '0 29px'\n};\n\nconst fontSizeMap = {\n  small: '14px',\n  medium: '16px',\n  large: '20px'\n};\n\nconst lineHeightMap = {\n  small: '18px',\n  medium: '24px',\n  large: '24px'\n};\n\nconst skinToColorMap = {\n  standard: pallete.white,\n  danger: pallete.white,\n  attention: pallete.white\n};\n\nconst skinToBackgroundMap = {\n  standard: pallete.main,\n  danger: pallete.danger,\n  attention: pallete.attention\n};\n\nconst skinToBorderColorMap = {\n  standard: pallete.main,\n  danger: pallete.danger,\n  attention: pallete.attention\n};\n\nconst skinToHoverColorMap = {\n  standard: pallete.white,\n  danger: pallete.white,\n  attention: pallete.white\n};\n\nconst skinToHoverBackgroundMap = {\n  standard: pallete.mainHover,\n  danger: pallete.dangerHover,\n  attention: pallete.attentionHover\n};\n\nconst skinToHoverBorderColorMap = {\n  standard: pallete.mainHover,\n  danger: pallete.dangerHover,\n  attention: pallete.attentionHover\n};\n\nexport const button = {\n  fontSize: ({height}) => fontSizeMap[height],\n  lineHeight: ({height}) => lineHeightMap[height],\n\n  height: ({height}) => heightMap[height],\n  padding: ({height}) => paddingMap[height],\n  borderRadius: ({height}) => pxDivide(heightMap[height], 2),\n\n  color: ({skin}) => skinToColorMap[skin],\n  backgroundColor: ({skin}) => skinToBackgroundMap[skin],\n  borderColor: ({skin}) => skinToBorderColorMap[skin],\n\n  hover: {\n    color: ({skin}) => skinToHoverColorMap[skin],\n    backgroundColor: ({skin}) => skinToHoverBackgroundMap[skin],\n    borderColor: ({skin}) => skinToHoverBorderColorMap[skin]\n  }\n};\n\nexport default {\n  button\n};\n"}});