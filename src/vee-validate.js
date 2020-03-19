import {
  required, confirmed, length, email,
} from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'

extend('required', {
  ...required,
  message: '请输入{_field_}',
})

extend('email', {
  ...email,
  message: '请输入正确的邮箱格式',
})

extend('confirmed', {
  ...confirmed,
  message: '两次输入的密码不一致，请确认后输入',
})

extend('length', {
  ...length,
  message: '只能选择 {length} 项目',
})
