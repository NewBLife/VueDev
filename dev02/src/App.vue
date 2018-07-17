<template>
    <div>
        <my-header></my-header>
        <p class="red" v-if="msg.length>0">
            {{msg}}
        </p>
        <p v-else>
            no text 
        </p>
        <input type="text" v-model="msg">
        <button @click="clear()">clear</button>
    </div>
</template>

<script>
import myHeader from './components/myheader.vue';

export default {
    components:{
        'my-header':myHeader
    },
    data:function(){
        return {
            msg :"Hello World"
        }
    },
    methods:{
        clear:function(){
            this.msg =''
        }
        
    },
    // ready
   mounted: function () {
        this.$nextTick(function () {
            var that = this
            $.getJSON('http://www.geonames.org/postalCodeLookupJSON?postalcode=10504&country=US&callback=?', {}, function (json) {
            console.log(json)
            that.msg = json.postalcodes[0].adminName1
            })
        })
    }
}
</script>

<style>
.red{
    color:#f00;
}
</style>



