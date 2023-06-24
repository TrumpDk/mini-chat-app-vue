<template>
    <div class="login-form-wrapper">
        <span>process login, please waite</span>
    </div>
</template>

<script lang="ts" setup>
import { userManager } from '../oidc/authService';
import { onMounted } from 'vue';

onMounted(() => {
    console.log('call back')
    signInCallback();
})

const signInCallback = async () => {
    await userManager.signinCallback();
}
</script>

<style scoped></style>