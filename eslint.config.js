import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  lessOpinionated: true,
  stylistic: {
    braceStyle: '1tbs',
    overrides: {
      'curly': ['error', 'multi-line', 'consistent'],
      'style/indent-binary-ops': 'off',
      'style/comma-dangle': 'off',
      'style/arrow-parens': ['error', 'as-needed'],
      'style/operator-linebreak': ['error', 'before', { overrides: { '=': 'after' } }],
      'style/type-generic-spacing': 'off',
    },
  },
})
