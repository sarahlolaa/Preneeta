<template>
    <router-link :to="link" class="button border px-4 py-6">
    {{subject}}
    </router-link>
</template>

<script>
export default {
    prop: ['subject','link']
}
</script>

<style scoped>
.button {

}

</style>