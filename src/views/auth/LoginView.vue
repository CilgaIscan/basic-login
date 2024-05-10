
<script setup lang="ts">


import { ref } from 'vue'

import { authService } from "@/services/auth.service";

const email = ref('');
const password = ref('');

async function handleSubmit() {
  console.log(email.value);
  console.log(password.value);
  const data = await authService.login(email.value, password.value)
  console.log(data);
}
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button type="submit">Button</button>
    </form>
  </div>
</template>

<style scoped>

</style>