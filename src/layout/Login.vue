<template>
    <div class="login-form-wrapper">
        <div class="form-content">
            <h3 class="title">Welcome to GuaGuaGua Chat Room</h3>
            <el-form class="form-content-body" :model="form" label-width="100">
                <el-form-item label="Id">
                    <el-input v-model="form.id" />
                </el-form-item>
                <el-form-item label="Password">
                    <el-input v-model="form.password" />
                </el-form-item>
            </el-form>
            <div class="third-party-login">
                <h4>Third party login</h4>
                <div class="third-party-login-wrapper">
                    <div class="third-pary-items" @click="loginAction">
                        <img :src="githubImg" alt="img here" width="40" height="40" />
                    </div>
                </div>
                <div class="registere-link">
                    <span>No account now? click <router-link to="/register">here</router-link> to register an account</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import githubImg from '../assets/24caf369be60a81a5bd611a3cc1181d6.jpg';
// import { login } from '../oidc/authService';
import service from '../service/service';


const form = reactive({
    id: '',
    password: ''
})

const loginAction = async () => {
    // window.open('http://localhost:3007/login', '_blank');
    // login().catch(e => {
    //     console.log(e)
    // })
    try {
        const result = await service.login();
        window.open(`${result.authorize_uri}?client_id=${result.client_id}&scope=${result.scope}&redirect_uri=${result.redirect_uri}&state=${result.state}`, '_blank');
    } catch (e) {
        console.log(e)
    }
}
</script>

<style scoped>
.login-form-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-content {
    border-radius: 5px;
    width: 400px;
    height: 400px;
    border: 1px solid #e3e3e3;
    box-shadow: 0 0 16px #e3e3e3;
}

.form-content-body {
    margin-top: 40px;
    padding: 10px;
}

.title {
    margin-top: 40px;
    text-align: center;
}

.third-party-login {
    border-top: 1px solid #eee;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.third-party-login-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.third-pary-items {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.registere-link {
    display: flex;
    font-size: 10px;
    text-align: center;
    margin-top: 20px;
}
</style>