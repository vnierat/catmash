<template>
    <div class="ranking">
            <ul class="listItems">
                <li v-for="cat in cats" :key="cat.id">
                    <div class="imgItemCat">
                        <img v-bind:src="cat.url">
                        <span>{{cat.vote}}</span>
                    </div>
                </li>
            </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { catStore } from '../catStore';

@Component({
    data: () => {
        return {
        cats: catStore.state.cats.sort((cat1, cat2) => cat2.vote - cat1.vote),
        };
    },
})
export default class RApp extends Vue {}
</script>

<style scoped>
ul li {
    margin: 0!important;
}
ul li:nth-child(2n) {
  background:#e4e7ec;
}

.ranking {
    width: 100%;
}

.listItems {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
</style>
