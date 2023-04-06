<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div>
        <router-link to="/knights">Knights</router-link>
        <router-link to="/heroes">Heroes</router-link>
        <router-link to="/knights/create">Create Knight</router-link>
    </div>
    <div>
        <RouterView />
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: 'appView',
})
</script>

<style scoped>

</style>
