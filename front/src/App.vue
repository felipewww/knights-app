<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<!--  <header>-->
<!--    <img alt="Vue logo" class="logo" src="@/presentation/assets/logo.svg" width="125" height="125" />-->
<!--  </header>-->

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
