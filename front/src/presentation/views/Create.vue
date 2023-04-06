<template>
    <div>
        <form>
            <div>
                <label>Name</label>
                <input type="text" v-model="knight.name">
            </div>

            <div>
                <label>Nickname</label>
                <input type="text" v-model="knight.nickname">
            </div>

            <div>
                <label>Birthday</label>
                <input type="text" v-model="knight.birthday">
            </div>

            <select v-model="knight.keyAttribute">
                <option v-for="attr in EKnightKeyAttributes">{{attr}}</option>
            </select>

            <div v-for="attr in EKnightKeyAttributes">
                <span>{{ attr }}</span>
                <input type="number" min="0" v-model="knight.attributes[attr]">
            </div>
        </form>

        <div>{{knight}}</div>

        <div @click="repo.create(knight)">save</div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {EKnightKeyAttributes, KnightViewModel} from "commonTypes/src/presentation/knight.vm";
import {KnightVMEntity} from "@/domain/KnightVM.entity";
import {KnightsRepo} from "@/domain/Knights.repo";

interface IData {
    knight: KnightViewModel,
    repo: KnightsRepo
}

export default defineComponent({
    name: "Create",
    computed: {
        EKnightKeyAttributes() {
            return EKnightKeyAttributes
        }
    },
    data(): IData {
        return {
            knight: KnightVMEntity.blank(),
            repo: new KnightsRepo()
        }
    }
})
</script>

<style scoped>

</style>