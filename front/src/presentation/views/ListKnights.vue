<template>
    <div class="list-container">
        <div class="kn-card-box" v-for="entity of entities">
            <KnightCard
                v-if="!entity.deleted"
                :card-type="'alive'"
                @save="repo.update(entity)"
                @delete="repo.delete(entity)"
                :entity="entity">

            </KnightCard>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import type {KnightEntity} from "@/domain/Knight.entity";
import {KnightsRepo} from "@/domain/Knights.repo";
import KnightCard from "@/presentation/components/KnightCard.vue";

interface IData {
    entities: Array<KnightEntity>,
    repo: KnightsRepo,
}

export default defineComponent({
    name: "List",
    components: {KnightCard},
    data(): IData {
        return {
            entities: [],
            repo: new KnightsRepo(),
        }
    },
    mounted() {
        this.repo.all()
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