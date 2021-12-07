<template>
    <div class="ranking">
        <h2>Classement des chats les plus mignons 
            <div>
               <i class="fa-solid fa-crown"></i> 
            </div>
        </h2>
        <router-link to="/">
            <div class="back">Retour au vote</div>
        </router-link> |
        <hr>
        <ul class="listItems">
            <li v-for="cat in cats" :key="cat.id">
                <div class="imgItemCat">
                    <img v-bind:src="cat.url">
                    <span>{{cat.vote}} vote{{cat.vote === 0 || cat.vote === 1 ? '': 's'}}</span>
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
export default class Ranking extends Vue {}
</script>

<style scoped>

.ranking h2 , .ranking .back{ text-align: center; }
h2 div { color: #d8d526; }
ul, li { margin-left: 0; padding-left: 0; }


ul li:nth-child(2n) { background: #e4e7ec; }

.imgItemCat {
    padding: 15px 0;
    width: 325px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.imgItemCat span {
    margin-top: 10px;
    text-align: center;
    font-size: 18px;
    font-weight: 800;
    color: #d8d526;
    outline: 5px solid #e4e7ec;
    border-radius: 3px;
}

ul li:nth-child(2n) span {
   outline: 5px solid #FFF;
   
}
</style>
