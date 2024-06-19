<template>
    <div @submit.prevent="onSubmit">
        <input type="email" v-model="email" required>
        <input type="password" v-model="password" required>
        <button type="submit">Submit</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        onSubmit() {
            this.$axios.post('/auth/login', {
                email:  this.email,
            password: this.password
            }).then(response => {
                this.getDataUser(response.data)
            })             
        },
        getDataUser(data) {
            this.$axios.get('auth/profile', {
                headers: {
                    Authorization: 'Bearer' + data.access_token
                }
            }).then(res)
        }
    }
}
</script>