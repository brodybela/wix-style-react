webpackJsonp([532],{1580:function(module,exports){module.exports="import React, {Component} from 'react';\nimport {children, once, any, oneOf, multiple, optional} from './CompositeValidation';\n\nconst Label = () => null;\n\nclass Input extends Component {\n  render = () => null\n}\n\ndescribe('CompositeValidation', () => {\n\n  describe('children()', () => {\n\n    it('should return an error if no rules are passed', () => {\n      const validator = children();\n      expect(validator({}, 'children', 'TextField'))\n        .toEqual(new Error('TextField should have at least a single child declaration rule'));\n    });\n\n    describe('once()', () => {\n\n      it('should return an error if once() component is missing', () => {\n        const validator = children(once(Input));\n        expect(validator({children: []}, 'children', 'TextField'))\n          .toEqual(new Error('TextField should have children of the following types in this order: Input (ONCE)'));\n      });\n\n      it('should return an error if multiple once components are missing', () => {\n        const validator = children(once(Label), once(Input));\n        expect(validator({children: []}, 'children', 'TextField'))\n          .toEqual(new Error('TextField should have children of the following types in this order: Label (ONCE), Input (ONCE)'));\n      });\n\n      it('should pass if component exists', () => {\n        const validator = children(once(Label), once(Input));\n        expect(validator({children: [<Label key={1}/>, <Input key={2}/>]}, 'children', 'TextField'))\n          .toEqual(undefined);\n      });\n\n    });\n\n    describe('optional()', () => {\n\n      it('should return an error if optional() component is missing and there are no more rules', () => {\n        const validator = children(optional(Label));\n        expect(validator({children: [<Input key={1}/>]}, 'children', 'TextField'))\n          .toEqual(new Error('TextField should have children of the following types in this order: Label (OPTIONAL)'));\n      });\n\n      it('should pass if optional() component is missing but another component is present', () => {\n        const validator = children(optional(Label), once(Input));\n        expect(validator({children: [<Input key={1}/>]}, 'children', 'TextField'))\n          .toEqual(undefined);\n      });\n\n      it('should pass if optional() component is in the middle', () => {\n        const validator = children(once(Label), optional(Input), once(Label));\n        expect(validator({children: [<Label key={1}/>, <Label key={2}/>]}, 'children', 'TextField'))\n          .toEqual(undefined);\n      });\n\n      it('should pass if optional() component is the last one', () => {\n        const validator = children(once(Input), optional(Label));\n        expect(validator({children: [<Input key={1}/>]}, 'children', 'TextField'))\n          .toEqual(undefined);\n      });\n\n    });\n\n    describe('multiple()', () => {\n\n      it('should return an error if multiple() components are missing', () => {\n        const validator = children(multiple(Label));\n        expect(validator({children: []}, 'children', 'TextField'))\n          .toEqual(new Error('TextField should have children of the following types in this order: Label (MULTIPLE)'));\n      });\n\n      it('should pass if at least one multiple() component exists', () => {\n        const validator = children(multiple(Label));\n        expect(validator({children: [<Label key={1}/>]}, 'children', 'TextField'))\n          .toEqual(undefined);\n      });\n\n      it('should pass if several multiple() component exist', () => {\n        const validator = children(multiple(Label));\n        expect(validator({children: [<Label key={1}/>, <Label key={2}/>]}, 'children', 'TextField'))\n          .toEqual(undefined);\n      });\n\n    });\n\n  });\n\n  describe('any()', () => {\n\n    it('should pass if any() is being used', () => {\n      const validator = children(any());\n      expect(validator({children: [<Label key={1}/>, <Input key={2}/>]}, 'children', 'TextField'))\n        .toEqual(undefined);\n    });\n\n    it('should pass if any() is being used as last option', () => {\n      const validator = children(once(Label), any());\n      expect(validator({children: [<Label key={1}/>, <Input key={2}/>]}, 'children', 'TextField'))\n        .toEqual(undefined);\n    });\n\n  });\n\n  describe('oneOf()', () => {\n\n    it('should return an error if oneOf() components are missing', () => {\n      const validator = children(oneOf(Input, Label));\n      expect(validator({children: []}, 'children', 'TextField'))\n        .toEqual(new Error('TextField should have children of the following types in this order: ONEOF(Input, Label)'));\n    });\n\n    it('should return an error if more than one of the oneOf() components is present', () => {\n      const validator = children(oneOf(Input, Label));\n      expect(validator({children: [<Label key={1}/>, <Input key={2}/>]}, 'children', 'TextField'))\n        .toEqual(new Error('TextField should have children of the following types in this order: ONEOF(Input, Label)'));\n    });\n\n    it('should pass if one of the oneOf() components exists', () => {\n      const validator = children(oneOf(Input, Label));\n      expect(validator({children: [<Label key={1}/>]}, 'children', 'TextField'))\n        .toEqual(undefined);\n    });\n\n  });\n\n});\n"}});