<template>
  <div class="register container is-fluid">
    <div class="columns is-centered">
      <div class="column is-5-tablet is-4-desktop is-3-widescreen">
        <b-field label="姓名">
            <b-input v-model="name"></b-input>
        </b-field>

        <b-field label="邮箱"
            type="is-danger"
            message="This email is invalid">
            <b-input type="email" maxlength="30">
            </b-input>
        </b-field>

        <b-field label="手机号"
            type="is-success"
            message="This username is available">
            <b-input maxlength="30"></b-input>
        </b-field>

        <b-field label="密码">
            <b-input type="password" password-reveal></b-input>
        </b-field>
        <div class="buttons">
            <b-button type="is-primary" expanded>注 册</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'John Silver',
    }
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
