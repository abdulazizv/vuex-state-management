<template>
    <div class="w-full border p-5 shadow-lg my-5">
        <button @click="goBack" class="bg-cyan-500 px-3 py-2 rounded-lg text-white font-bold focus:ring-4 focus:ring-cyan-600">GO BACK</button>            
        </div>
    <div class="p-5 w-3/4 shadow m-4 border">
        
        <div v-if="isLoad">
            <h1 class="px-5"> {{ $route.params.id  }} {{ post.title }}</h1>
        <p class="px-5 my-3">
            {{ post.body }}
        </p>
    </div>
    <div v-else="isLoad">
        <h1>LOADING>>>....</h1>
    </div>
    </div>
</template>
<script>
import axios from '../service/axios'
export default {
    name:'postitem',

    data() {
        return {
            post:[],
            isLoad :false
        }
    },
    methods:{
        getId() {
            console.log(this.$route.params.id);
        },
        async getPostItem() {
            try {
                const postItem = await axios.get(`posts/${this.$route.params.id}`);
                if(postItem.status == 200) {
                    console.log(postItem.data)
                    this.post = postItem.data;
                    this.isLoad = true
                }
            } catch (error) {
                console.log(error)
            }
        },
        async goBack() {
            window.location.back()
        }
    },
    mounted() {
        this.getId(),
        this.getPostItem()
    }
}
</script>
<style lang="css">
    
</style>