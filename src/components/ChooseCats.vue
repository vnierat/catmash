<template>
    <div class="container">
        <div class="logo"><i class="fa-solid fa-cat"></i>catmash</div>
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
                <div>Voir les plus beaux chats</div>
                <div class="counter">{{ totalVotes }} vote{{totalVotes === 0 || totalVotes === 1 ? '': 's'}}</div>
            </div>
        </router-link>
    </div>
    
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { catStore } from '../catStore';

@Component({
    data: () => {
        const { totalVotes } = catStore.getVotes();
        const { catItemOne, catItemTwo } = catStore.getNewCats();
        return { catItemOne, catItemTwo, totalVotes };
      
    },
    methods: {
        voteFor(id: string) {
            catStore.setVotes();
            catStore.chooseCat(id);
            const { totalVotes } = catStore.getVotes();
            const { catItemOne, catItemTwo} = catStore .getNewCats();
            this.$data.catItemOne = catItemOne;
            this.$data.catItemTwo = catItemTwo;
            this.$data.totalVotes = totalVotes;

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

.logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: calc(50% - 6rem);
    top:2%;
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 800;
    color: #3a3f47;
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

img:hover {
    cursor: pointer;
}

@media (max-width:720px) {
    img {
        width: 150px;
        height: 150px;
    }
}

.bg1 {
    outline: 10px solid #FFF;
}

.bg2 {
    outline: 10px solid #e4e7ec
}

.linkTo {
    position:absolute;
    bottom: 1px;
    left: calc(50% - 8.5rem);
    background: #FFF;
    padding: 7px 40px;
    outline: 7px solid #e4e7ec;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.counter {
    font-size: 12px;
    font-weight: 100;
}
</style>
