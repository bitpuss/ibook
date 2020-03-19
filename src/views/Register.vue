<template>
  <div class="register container is-fluid">
    <div class="columns is-centered">
      <div class="column is-5-tablet is-4-desktop is-3-widescreen">
        <ValidationObserver ref="observer" v-slot="{ passes }">
          <section class="section">
            <BInputWithValidation rules="required|email"
            type="email" label="用户名" v-model="user.username"/>

            <BInputWithValidation
              rules="required"
              type="password"
              label="Password"
              vid="password"
              v-model="password"
            />

            <BInputWithValidation
              rules="required|confirmed:password"
              name="Password"
              type="password"
              label="Confirm Password"
              v-model="confirmation"
            />

            <div class="buttons">
              <button class="button is-success" @click="passes(register)">
                <span class="icon is-small">
                  <i class="fas fa-check"></i>
                </span>
                <span>Submit</span>
              </button>

              <button class="button" @click="resetForm">
                <span class="icon is-small">
                  <i class="fas fa-redo"></i>
                </span>
                <span>Reset</span>
              </button>
            </div>
          </section>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import BInputWithValidation from '../components/inputs/BInputWithValidation.vue'

export default {
  name: 'register',
  components: { ValidationObserver, BInputWithValidation },
  data() {
    return {
      user: {
        username: '',
        telephone: '',
        password: '',
      },
    }
  },
  // validations: {
  //   user: {
  //     username: {
  //       required,
  //       minLength: minLength(4),
  //     },
  //     telephone: {
  //       required,
  //       minLength: minLength(11),
  //       maxLength: maxLength(11),
  //     },
  //     password: {
  //       required,
  //       minLength: minLength(6),
  //       maxLength: maxLength(30),
  //     },
  //   },
  // },
  methods: {
    register() {
      console.log('register!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
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
