<template>
    <div class="container">
        <div class="mainApp">
            <div class="firstItem">
                <img class="bg1" v-bind:src="catItemOne.url" v-on:click="voteFor(catItemOne.id)">
            </div>
            <div class="secondItem">
                <img class="bg2" v-bind:src="catItemTwo.url" v-on:click="voteFor(catItemTwo.id)">
            </div>
        </div>
        
        <router-link to="/ranking">
            <div class="linkTo">
                Voir les plus beaux chats
            </div>
        </router-link>
    </div>
    
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { catStore } from '../catStore';

@Component({
    data: () => {
        const { catItemOne, catItemTwo } = catStore.getNewCats();
        return { catItemOne, catItemTwo };
      
    },
    methods: {
        voteFor(id: string) {
            catStore.chooseCat(id);
            const { catItemOne, catItemTwo} = catStore .getNewCats();
            this.$data.catItemOne = catItemOne;
            this.$data.catItemTwo = catItemTwo;

        },
    },
})
export default class Ranking extends Vue {}
</script>

<style scoped>
.container {
    height: 100vh;
    width: 100vw;
    position: relative;
}
.mainApp {
    height: 100%;
    width: 100%;
    display: flex;
}

.firstItem {
    background:#e4e7ec;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.borderImg {
    width: 300px;
    height: 300px;
    padding: 10px;
    border-radius:100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.secondItem {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

img {
  width: 300px;
  height: 300px;
  border-radius: 100%;
}

.bg1 {
    outline: 10px solid #FFF;
}

.bg2 {
    outline: 10px solid #e4e7ec
}

.link {
    position:absolute;
    left: 30px;
}
</style>
