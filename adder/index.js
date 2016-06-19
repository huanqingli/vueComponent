/**
 * Created by Muc on 16/6/3.
 */
var adder1=Vue.extend({
    template:'<div id="adder1" v-on:click="add" class="item1">你点击了{{n}}次</div>',
    // el:function () {
    //     return "#adder1"
    // },
    data:function(){
        return {n:0}
    },
    methods:{
        add:function () {
            this.n+=1
        }
    }
});
Vue.component('my-adder1', adder1);
var adder2=Vue.extend({
    template:'<div id="adder2" class="item2"> <div class="item2_1" > <adder-item v-bind:x="1"></adder-item> <adder-item v-bind:x="3"></adder-item> <adder-item v-bind:x="5"></adder-item> <adder-item v-bind:x="10"></adder-item> </div> <div class="item2_2">共计{{a}}元{{u}}个</div> </div>',
    // el:function () {
    //     return "#adder2"
    // },
    data:function () {
        return({
            a:0,
            u:0
        })
    },
    events: {
        'child-msg': function (x) {
            // 事件回调内的 `this` 自动绑定到注册它的实例上
            this.u+=1;
            this.a+=x;
        }
    }
});
Vue.component('my-adder2', adder2);
var adderItem=Vue.extend({
    template:' <div v-on:click="add" class="item2_1_1">{{x}}元{{n}}件</div>',
    props: ['x'],
    data:function () {
        return {n:0}
    },
    methods:{
        add:function () {
            this.n+=1;
            this.$dispatch('child-msg', this.x);
        }
    }
});
Vue.component('adder-item', adderItem);
// var adder2=Vue.extend({
//     template:'<div id="adder2" class="item2"> <div class="item2_1"> <div v-for="item in items" v-on:click="add($index)" class="item2_1_1">{{item.x}}元{{item.n}}件</div> </div> <div class="item2_2">共计{{a}}元{{u}}个</div> </div>',
//         el:function () {
//             return "#adder2"
//         },
//     data:function () {
//         return({
//             items:[
//                 {x:1,n:0},
//                 {x:3,n:0},
//                 {x:5,n:0},
//                 {x:10,n:0}],
//             a:0,
//             u:0
//         })
//     },
//     methods:{
//         add:function (index) {
//             this.items[index].n+=1;
//             this.u+=1;
//             this.a+=this.items[index].x;
//         }
//     }
// });
// Vue.component('my-adder2', adder2);
new Vue({
    el:"#box"
});