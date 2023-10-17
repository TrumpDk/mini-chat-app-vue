<template>
    <div class="login-form-wrapper">
        <span>process login, please waite</span>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Service from '../service/service';

const route = useRoute();

onMounted(async() => {
    const callBackState = new URLSearchParams(window.location.search);
    console.log('call back', route.fullPath, window.location.search, callBackState, callBackState.get('state'));
    // TODO call callback URI to get access token
    try {
        const result = await Service.authCallback({code: callBackState.get('code')!, state: callBackState.get('state')!})
        console.log(result, 'sdfsdfs');
    } catch (e) {
        console.log(e)
    }
})
</script>

<style scoped></style>