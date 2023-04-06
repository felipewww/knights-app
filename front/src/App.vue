<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div id="mbg">
        <div id="mbd-overlay"></div>
    </div>

    <div class="nav-header">
        <router-link class="nav-item" to="/">Home</router-link>
        <router-link class="nav-item" to="/knights">Knights</router-link>
        <router-link class="nav-item" to="/heroes">Heroes</router-link>
        <router-link class="nav-item" to="/knights/create">Create Knight</router-link>
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
