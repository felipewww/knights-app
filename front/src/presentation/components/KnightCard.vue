<template>
    <div>
        <input type="text" v-model="entity.name">
        <span>Name: {{entity.name}}</span>
        <div :class="ageClass">age: {{entity.age}}</div>
        <div>exp: {{entity.exp}}</div>
        <div>attack: {{entity.attack}}</div>
        <div @click="$emit('save')">SAVE</div>
        <br>
    </div>
</template>

<script lang="ts">
import {KnightEntity} from "@/domain/Knight.entity";
import {defineComponent} from "vue";

export default defineComponent({
    name: "KnightCard",
    props: {
        entity: {
            type: KnightEntity,
            required: true
        }
    },
    methods: {
        ageClass() {
            return ['todo']
        }
    }
})
</script>

<style scoped>

</style>