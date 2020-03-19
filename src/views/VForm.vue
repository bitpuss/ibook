<template>
  <ValidationObserver ref="observer" v-slot="{ invalid }">
    <form @submit.prevent="onSubmit">
      <section class="section">
        <ValidationProvider rules="required|email" name="邮箱" v-slot="{ errors, valid }">
          <b-field
            label="邮箱"
            :type="{ 'is-danger': errors[0], 'is-success': valid }"
            :message="errors"
          >
            <b-input type="email" v-model="email"></b-input>
          </b-field>
        </ValidationProvider>

        <ValidationProvider
          rules="required"
          vid="password"
          name="密码"
          v-slot="{ errors, valid }"
        >
          <b-field
            label="密码"
            :type="{ 'is-danger': errors[0], 'is-success': valid }"
            :message="errors"
          >
            <b-input type="password" v-model="password"></b-input>
          </b-field>
        </ValidationProvider>

        <ValidationProvider
          rules="required|confirmed:password"
          name="确认密码"
          v-slot="{ errors, valid }"
        >
          <b-field
            label="确认密码"
            :type="{ 'is-danger': errors[0], 'is-success': valid }"
            :message="errors"
          >
            <b-input type="password" v-model="confirmation"></b-input>
          </b-field>
        </ValidationProvider>

        <ValidationProvider rules="required" name="项目" v-slot="{ errors, valid }">
          <b-field
            label="项目"
            :message="errors"
            :type="{ 'is-danger': errors[0], 'is-success': valid }"
          >
            <b-select placeholder="请选择项目" v-model="subject">
              <option value>无</option>
              <option value="1">选项 1</option>
              <option value="2">选项 2</option>
            </b-select>
          </b-field>
        </ValidationProvider>

        <ValidationProvider rules="required|length:2" name="Drinks" v-slot="{ errors }">
          <div class="block">
            <b-checkbox v-model="choices" native-value="咖啡">咖啡</b-checkbox>
            <b-checkbox v-model="choices" native-value="茶">茶</b-checkbox>
            <b-checkbox v-model="choices" native-value="可乐">可乐</b-checkbox>
            <p class="has-text-danger">{{ errors[0] }}</p>
          </div>
        </ValidationProvider>

        <div class="buttons">
          <button class="button is-success" type="submit" :disabled="invalid">
            <span class="icon is-small">
              <i class="fas fa-check"></i>
            </span>
            <span>提交</span>
          </button>

          <button class="button" @click="resetForm">
            <span class="icon is-small">
              <i class="fas fa-redo"></i>
            </span>
            <span>重置</span>
          </button>
        </div>
      </section>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'VForm',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data: () => ({
    email: '',
    password: '',
    confirmation: '',
    subject: '',
    choices: [],
  }),
  methods: {
    onSubmit() {
      console.log('Form submitted yay!')
    },
    resetForm() {
      this.email = ''
      this.password = ''
      this.confirmation = ''
      this.subject = ''
      this.choices = []
      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    },
  },
}
</script>
