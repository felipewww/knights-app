<template>
    <div class="list-container">
        <div class="kn-card-box" v-for="entity of entities">
            <KnightCard
                v-if="!entity.deleted"
                :card-type="'heroes'"
                :entity="entity">

            </KnightCard>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import type {KnightEntity} from "@/domain/Knight.entity";
import {FilterType, KnightsRepo} from "@/domain/Knights.repo";
import KnightCard from "@/presentation/components/KnightCard.vue";

interface IData {
    entities: Array<KnightEntity>,
    repo: KnightsRepo,
}

export default defineComponent({
    name: "List",
    components: {KnightCard},
    data(): IData {
        console.log(this.$route)

        return {
            entities: [],
            repo: new KnightsRepo(),
        }
    },
    mounted() {
        this.repo.all('heroes')
            .then(res => {
                this.entities = res
            })
    },
    methods: {
        ageClass() {

        }
    }
})
</script>

<style scoped>

</style>