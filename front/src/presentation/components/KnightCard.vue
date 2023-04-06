<template>
    <div>
        <input v-if="cardType === 'alive'" type="text" v-model="entity.name">
        <span v-else>Name: {{entity.name}}</span>

        <div :class="ageClass">age: {{entity.age}}</div>
        <div>exp: {{entity.exp}}</div>
        <div>attack: {{entity.attack}}</div>

        <div v-if="cardType !== 'heroes'" class="actions">
            <div class="save" @click="$emit('save')">SAVE</div>
            <div class="delete" @click="$emit('delete')">DELETE</div>
        </div>
        <div class="clearfix"></div>

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
.actions .delete {
    color: #ff0045;
}

.actions .save {
    color: #bedc80;
}
.actions > div {
    cursor: pointer;
    float: left;
    border-radius: 3px;
    margin-right: 20px;
    font-size: 18px;
    font-family: 'Bree Serif', serif;
}
</style>