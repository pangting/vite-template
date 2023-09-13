/* eslint-env node */
const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // import配置
    'import/no-unresolved': OFF, // import/recommended默认开启，确保导入指向可以解析的文件/模块

    // vue配置
    'vue/no-v-model-argument': OFF, // 不允许v-model在自定义组件中添加参数，如：v-model:loading

    // eslint配置
    'indent': OFF, // 缩进：2个空格,Switch语句按1倍缩进执行
    'quotes': [ ERROR, 'single' ], // 使用单引号
    'semi': [ ERROR, 'never' ], // 行末尾分号：不要分号
    'semi-spacing': [ ERROR, { before: false, after: true } ], // 分号前后空格：前不要后要
    'no-trailing-spaces': ERROR, // 禁用行尾空白
    'no-whitespace-before-property': ERROR, // 禁止属性前有空白，错误示例：a. b
    'space-in-parens': [ ERROR, 'never' ], // 禁止圆括号内的空格
    'comma-spacing': ERROR, // 逗号前后是否有空格，默认前没有，后有
    'no-inner-declarations': WARN, // 函数声明只能在程序或另一个函数体的顶层,不要在if等语句中生命
    'no-class-assign': OFF, // 不允许修改类声明的变量: 不采用。因为项目里大量这种写法：class Search extends Component { ……};Search = Form.create()(Search)
    'no-case-declarations': WARN, // 该规则禁止词法声明（let，const，function和class在）case/ default条款。原因是词法声明在整个开关块中是可见的，但只有在分配时才会被初始化。即case 1里的x在case 2里也会生效，要确保词法声明仅适用于当前case子句，防止x提升到整个switch语句，请将子句包装在块中，所以要用{}包起来。然而实测并不会有这种问题
    'object-curly-spacing': [ ERROR, 'always' ], // { x:1 }前后有空格,{}除外但中间可以有一个空格
    'array-bracket-spacing': [ ERROR, 'always' ], // [ 1 ]前后有空格,[]除外但中间可以有一个空格
    'no-await-in-loop': ERROR, // 禁止在循环中 出现 await
    'no-template-curly-in-string': OFF, // 禁止在常规字符串中出现模板字面量占位符语法，如：'Hello ${name}!'
    'block-scoped-var': ERROR, // 把 var 语句看作是在块级作用域范围之内，超出作用域报错
    'no-extra-bind': ERROR, // 禁止不必要的函数绑定，方法内没有使用bind的入参
    'block-spacing': [ ERROR, 'always' ], // 代码块中大括号前和后有空格
    'brace-style': [ ERROR, '1tbs', { allowSingleLine: true } ], // 代码块中使用一致的大括号风格，大括号的缩进与换行，比如if/else，允许单行
    'func-call-spacing': [ ERROR, 'never' ], // 禁止在函数标识符和其调用之间有空格
    'jsx-quotes': [ ERROR, 'prefer-single' ], // 强制所有不包含单引号的 JSX 属性值使用单引号
    'key-spacing': ERROR, // 强制在对象字面量的键和值之间使用一致的空格,默认冒号前没有后有
    'generator-star-spacing': [ ERROR, { before: true, after: false } ], // 强制 generator 函数中 * 号周围使用一致的空格,前有后没有
    'eqeqeq': ERROR, // 要求使用===全等于
    'no-duplicate-imports': ERROR, // 禁止重复导入
    'spaced-comment': [ ERROR, 'always' ], // 注释风格:有空格
    'no-multi-spaces': ERROR, // 禁止出现多个空格，错误示例：a   === b
    'no-multiple-empty-lines': [ ERROR, { max: 1 } ], // 空行最多不能超过1行
    'space-before-function-paren': [ ERROR, 'always' ], // 函数定义时括号前面要不要有空格
    'arrow-spacing': ERROR, // =>的前/后空格
    'space-before-blocks': [ ERROR, 'always' ], // 不以新行开始的块{前面要不要有空格
    'no-var': ERROR, // 要求使用let或const而不是var
    'prefer-const': ERROR, // 建议使用const，而不是let
    'no-const-assign': ERROR, // 禁止修改const声明的变量
    'no-new-object': ERROR, // 禁止使用new Object()
    'no-unused-vars': OFF, // 禁止出现未使用过的变量，eslint:recommended默认开启
    'space-infix-ops': ERROR, // 要求操作符周围有空格,如：a + b
    'template-curly-spacing': [ ERROR, 'always' ], // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
  }
}
