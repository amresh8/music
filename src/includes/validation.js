import {
  Form as VeeFrom,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'

import {
  required,
  min,
  max,
  alpha_spaces as alphaSpace,
  email,
  numeric,
  min_value as minVal,
  max_value as maxVal,
  confirmed
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeFrom)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)
    defineRule('required', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_space', alphaSpace)
    defineRule('email', email)
    defineRule('numeric', numeric)
    defineRule('min_value', minVal)
    defineRule('max_value', maxVal)
    defineRule('confirmed', confirmed)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required.`,
          min: `The field ${ctx.field} is too short.`,
          max: `The field ${ctx.field} is too long.`,
          alpha_spaces: `The field ${ctx.field} may only contain aplphabetic character and spaces.`,
          email: `The field ${ctx.field} must be velid email.`,
          min_value: `The field ${ctx.field} is too low.`,
          max_value: `The field ${ctx.field} is to high.`
        }
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid `
        return message
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    })
  }
}
