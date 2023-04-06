<template>
    <div>
        <input v-if="cardType === 'alive'" type="text" v-model="entity.name">
        <span v-else>Name: {{entity.name}}</span>

        <div :class="ageClass">age: {{entity.age}}</div>
        <div>exp: {{entity.exp}}</div>
        <div>attack: {{entity.attack}}</div>

        <div v-if="cardType !== 'heroes'" class="actions">
            <div @click="$emit('save')">SAVE</div>
            <div @click="$emit('delete')">DELETE</div>
        </div>

        <br>
    </div>
</template>

<script lang="ts">
import {KnightEntity} from "@/domain/Knight.entity";
import {defineComponent} from "vue";
import {FilterType} from "@/domain/Knights.repo";

export default defineComponent({
    name: "KnightCard",
    props: {
        entity: {
            type: KnightEntity,
            required: true
        },
        cardType: {
            type: String,
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