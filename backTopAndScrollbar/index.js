/**
 * Created by Muc on 16/6/15.
 */
new Vue({
    el:'#scroll-bar',
    data:{
        styleObject:{
            top:"0"
        }
    },
    compiled:function () {
        var followScroll=function(){
            var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
            this.styleObject.top=scrollTop/(document.body.scrollHeight-document.documentElement.clientHeight)*560+"px";
        }.bind(this);
        this.top="50px";
        window.addEventListener("scroll",followScroll,false);
    },
    methods:{
        drag:function (event) {
            var y=event.clientY-parseInt(this.styleObject.top)-50;//获取点击位置与拖拽模块顶部的距离
            document.onmousemove=function(event){
                var top=event.clientY-y-50;
                if(top>555){
                    this.styleObject.top="560px";
                    document.body.scrollTop=document.documentElement.scrollTop=document.body.scrollHeight-document.documentElement.clientHeight;
                }else if(top<5){
                    this.styleObject.top=0;
                    document.body.scrollTop=document.documentElement.scrollTop=0;
                }else{
                    this.styleObject.top=top+"px";
                    document.body.scrollTop=document.documentElement.scrollTop=top/560*(document.body.scrollHeight-document.documentElement.clientHeight);
                }
                return false
            }.bind(this);
            document.onmouseup=function(){
                document.onmousemove=document.onmouseup=null;
            };
            return false
        }
    }
});
new Vue({
    el:'#back-top',
    data:{
        styleObject:{
            display:"none"
        }
    },
    compiled:function(){
        var testScroll=function(){
            var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
            if(scrollTop>document.documentElement.clientHeight){
                this.styleObject.display="block";

            }else{
                this.styleObject.display="none";
            }
        }.bind(this);
        window.addEventListener("scroll",testScroll,false);

    },
    methods:{
        back:function () {
            var timer=setInterval(goTop,30);
            function goTop(){
                var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
                if(scrollTop<=8){
                    document.body.scrollTop=0;
                    document.documentElement.scrollTop=0;
                    clearInterval(timer)
                }else if(0.1*scrollTop<8){
                    document.body.scrollTop-=8;
                    document.documentElement.scrollTop-=8;
                }else{
                    document.body.scrollTop*=0.9;
                    document.documentElement.scrollTop*=0.9;
                }
            }
        }
    }
});