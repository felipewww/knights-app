<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
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
