# vueComponent
这次这个项目主要是来用vue对比react,准备实现4个当时用react实现的小功能,对比使用感受,顺便决定新版博客的框架选择,虽然不涉及到大量的动态更新,但还是想使用一个框架.
## adder
就这个实例而言,感觉两者相似之处还是很多的.React就是组件化思想,写出来的一个个都是组件,Vue引导我们直接写成实例,如果想复用可以注册成组件.开始写成实例的时候,确实比react节省了大量的代码,但是公平起见还是先注册成组件在进行比较.Vue的template和react的JSX语法也差不多,都是直接就把HTML写进去了,vue有个data,react有个state,都是通过这个量的改变去刷新页面.react要有个initialState,Vue的data也要先设个值.在这个只有点击事件和数据反馈的小例子里,我靠简直就是雷同好么.不过我得目前的感觉是,react更适合组件化,vue还是实例化比较好.写成相同的组件结构以后,代码长度也是半斤八两,vue的API更加简洁.在父子组件通讯的时候,父组件向子组件传递信息的方式是差不多的,但子组件向父组件传递信息时,react直接向子组件传个方程,自组件就可以通过方程修改伏组件的状态了,vue则通过$parent接口直接操作父组件,终于找到"茬"了.vue官方不推荐直接操作父组件得方式,所以通过$dispatch()派发事件到父组件应该是更好的方式.
## autoEmailComplete
利用到了双向绑定,感觉还是挺方便的,涉及到了动态样式,直接把一个样式存在data里面,也是方便的很.不过如果真要组件化开发,我选择react,vue的template没有jsx看起来爽拼装组件的时候也是react更舒服,如果是直接开发,我选择vue,没必要写成一堆组件浪费,能节约许多代码.后面的两个Demo准备直接写在html里,不注册成组件了.
## backTopAndScrollbar
相似之处颇多,很多问题并不是框架的问题,而且之前写react组件的时候已经解决完了.所以写起来异常轻松... 