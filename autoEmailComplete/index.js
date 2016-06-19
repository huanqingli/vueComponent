/**
 * Created by Muc on 16/6/6.
 */
var emailBox=Vue.extend({
    template:'<div id="box"> <input v-on:keyup="select" v-model="user" placeholder="' +
    '                                                            email"/> <ul v-bind:style="styleObject"> <li v-on:click="setValue" v-for="item in items">{{user+item}}</li> </ul> </div>',
    data:function () {
        return({
            items:["@qq.com", "@hotmail.com", "@163.com", "@126.com", "@gmail.com"],
            styleObject:{
                visibility: "hidden"
            },
            user:"",
            index:0
        })
    },
    methods:{
        select:function (event) {
            this.styleObject.visibility="visible";
            var self=this;
            document.onclick=function () {
                self.styleObject.visibility="hidden";
            };
            if(event.keyCode==38){
                if(this.index<0){
                    this.index=4;
                }
                this.index-=1;
                this.display();
            }else if (event.keyCode==40){
                if(this.index>4){
                    this.index=0;
                }
                this.index+=1;
                this.display();

            }else if (event.keyCode==13){
                var aList = document.getElementById("box").getElementsByTagName("li");
                //alert(this.user= this.user.split("@")[0]);
                for(var i=0;i<5;i++){
                    aList[i].style.backgroundColor="white";
                }
                this.user=aList[this.index].innerHTML;
                self.styleObject.visibility="hidden";
            }
        },
        setValue:function () {
            this.user=event.target.innerHTML;
            this.styleObject.visibility="hidden";
        },
        display:function () {
            var aList = document.getElementById("box").getElementsByTagName("li");
            //alert(this.user= this.user.split("@")[0]);
            for(var i=0;i<5;i++){
                aList[i].style.backgroundColor="white";
            }
            aList[this.index].style.backgroundColor="#eee";
            this.user=aList[this.index].innerHTML.split("@")[0];
        }
    }
});
Vue.component('email-box', emailBox);
new Vue({
    el:"#user"
});