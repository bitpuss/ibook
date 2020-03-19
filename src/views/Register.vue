<template>
  <div class="register container is-fluid">
    <div class="columns is-centered">
      <div class="column is-5-tablet is-4-desktop is-3-widescreen">
        <ValidationObserver ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="doRegister">
            <section class="section">
              <ValidationProvider rules="required|email" name="邮箱" v-slot="{ errors, valid }">
                <b-field
                  label="邮箱"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                >
                  <b-input type="email" placeholder="请输入您的邮箱" v-model="user.username"></b-input>
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
                  <b-input type="password" placeholder="请输入您的密码"
                  v-model="user.password"></b-input>
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
                  <b-input type="password" placeholder="请输入确认密码"
                  v-model="user.confirmation"></b-input>
                </b-field>
              </ValidationProvider>

              <div class="buttons">
                <button class="button is-success" type="submit" :disabled="invalid">
                  <span class="icon is-small">
                    <i class="fas fa-check"></i>
                  </span>
                  <span>注册</span>
                </button>

                  <button class="button" type="button" @click="resetForm">
                  <span class="icon is-small">
                    <i class="fas fa-redo"></i>
                  </span>
                  <span>重置</span>
                </button>
              </div>
            </section>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'register',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      user: {
        username: '',
        telephone: '',
        password: '',
        confirmation: '',
      },
    }
  },
  methods: {
    doRegister() {
      console.log('register!')
    },
    resetForm() {
      this.user.username = ''
      this.user.telephone = ''
      this.user.password = ''
      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    },
  },
}
</script>

<style scope>
.register {
    margin-top: 1.75rem;
    margin-left: 1rem;
    margin-right: 1rem;
}
</style>
