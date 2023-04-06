<template>
    <div class="list-container">
        <form>
            <div class="ipt-box">
                <label>Name</label>
                <input type="text" v-model="knight.name">
            </div>

            <div class="ipt-box">
                <label>Nickname</label>
                <input type="text" v-model="knight.nickname">
            </div>

            <div class="ipt-box">
                <label>Birthday</label>
                <input type="text" v-model="knight.birthday">
            </div>

            <div class="ipt-box" v-for="attr in EKnightKeyAttributes">
                <label>{{ attr }}</label>
                <input type="number" min="0" v-model="knight.attributes[attr]">
            </div>

            <div class="ipt-box">
                <label>Key Attribute</label>
                <select v-model="knight.keyAttribute">
                    <option v-for="attr in EKnightKeyAttributes">{{attr}}</option>
                </select>
            </div>
        </form>

        <br>

        <div class="btn-gold" @click="repo.create(knight)">save</div>
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
label {
    width: 115px;
    display: inline-block;
}

.ipt-box input {
    font-size: 20px;
    background: #000;
    border: 1px solid gold;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
}

.ipt-box {
    padding: 9px 0;
    font-size: 18px;
}
</style>