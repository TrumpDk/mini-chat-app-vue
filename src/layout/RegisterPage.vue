<template>
    <div class="login-form-wrapper">
        <div class="form-content">
            <h3 class="title">Register Account</h3>
            <el-form class="form-content-body" status-icon :model="form" label-width="100" ref="ruleFormRef" :rules="rules">
                <el-form-item label="Id" prop="id">
                    <el-input v-model="form.id" placeholder="Input Id" />
                </el-form-item>
                <el-form-item label="Nick Name" prop="nickName">
                    <el-input v-model="form.nickName" placeholder="Input Nick Name" />
                </el-form-item>
                <el-form-item label="Password" prop="password">
                    <el-input v-model="form.password" type="password" placeholder="Input Password" />
                </el-form-item>
                <el-form-item label="Password" prop="rpassword">
                    <el-input v-model="form.rpassword" type="password" placeholder="Confirm Password" />
                </el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
                <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
// import { login } from '../oidc/authService';
// import service from '../service/service';
// https://blog.csdn.net/m0_62317155/article/details/130918961
import type { FormInstance, FormRules } from 'element-plus'
import service from '../service/service';

const ruleFormRef = ref<FormInstance>();

const form = reactive({
    id: '',
    password: '',
    rpassword: '',
    nickName: ''
})

const checkId = (rule: any, value: any, callback: any) => {
    console.log(value, 'sdfsdf', rule);

    const reg = /^\d{8,15}$/;
    if (!value) {
        return callback(new Error('Id不能为空'))
    }

    if (!reg.test(value)) {
        return callback(new Error('请输入8-15位数字'))
    } else {
        return callback()
    }
}

const checkPassword = (rule: any, value: any, callback: any) => {
    console.log(value, 'sdfsdf', rule);
    const reg = /^(?=.{10,15})(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[*?!&￥$%^#,./@";:><\[\]}{\-=+_\\|》《。，、？'‘“”~ `]).*$/;
    if (!value) {
        return callback(new Error('密码不能为空'))
    }
    if (!reg.test(value)) {
        return callback(new Error('请输入10-15位包含大小写字母特殊符号的组合'))
    } else {
        return callback()
    }
}

const checkNickName = (rule: any, value: any, callback: any) => {
    console.log(rule);
    const reg = /^([a-z-A-Z- ]{8,15})*$/
    if (!value) {
        return callback(new Error('请输入昵称'))
    }
    if (!reg.test(value)) {
        return callback(new Error('请输入8-15位大小写空格字母组合'))
    }
    callback();
}

const reCheckPassword = (rule: any, value: any, callback: any) => {
    console.log(value, 'sdfsdf', rule);
    const reg = /^(?=.{10,15})(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[*?!&￥$%^#,./@";:><\[\]}{\-=+_\\|》《。，、？'‘“”~ `]).*$/;
    if (!value) {
        return callback(new Error('请再次输入密码'))
    }
    if (form.password !== value) {
        return callback(new Error('两次密码不一致，请重新输入'))
    }
    if (!reg.test(value)) {
        return callback(new Error('请输入10-15位包含大小写字母特殊符号的组合'))
    }
    callback()
}

const rules = reactive<FormRules<typeof form>>({
    id: [{ validator: checkId, trigger: 'blur' }],
    password: [{ validator: checkPassword, trigger: 'blur' }],
    rpassword: [{ validator: reCheckPassword, trigger: 'blur' }],
    nickName: [{validator: checkNickName, trigger: 'blur'}]
})



const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    });
    try {
        await service.register({id: Number.parseInt(form.id), nickName: form.nickName, password: form.password});
    } catch (e) {
        console.log(e, 'error');
    }
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
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
</style>