<template>
    <div>
        <KnightCard
            v-for="entity of entities"
            @save="repo.update(entity)"
            :entity="entity">

        </KnightCard>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import type {KnightEntity} from "@/domain/Knight.entity";
import {KnightsRepo} from "@/domain/Knights.repo";
import KnightCard from "@/presentation/components/KnightCard.vue";

interface IData {
    entities: Array<KnightEntity>,
    repo: KnightsRepo
}

export default defineComponent({
    name: "List",
    components: {KnightCard},
    data(): IData {
        return {
            entities: [],
            repo: new KnightsRepo()
        }
    },
    mounted() {
        const ent = this.repo.all()
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