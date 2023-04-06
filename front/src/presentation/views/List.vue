<template>
    <div>
        <div v-for="entity of entities">
            <KnightCard
                v-if="!entity.deleted"
                :card-type="listType"
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
import {FilterType, KnightsRepo} from "@/domain/Knights.repo";
import KnightCard from "@/presentation/components/KnightCard.vue";

interface IData {
    entities: Array<KnightEntity>,
    repo: KnightsRepo,
    listType: FilterType
}

export default defineComponent({
    name: "List",
    components: {KnightCard},
    data(): IData {
        return {
            entities: [],
            repo: new KnightsRepo(),
            listType: (this.$route.query.filter && this.$route.query.filter === 'heroes') ? 'heroes' : 'alive'
        }
    },
    mounted() {
        this.repo.all(this.listType)
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