MVVM：  
+ 双向的数据驱动  
    即是数据更新驱动视图更新  
        Vue2 数据劫持（Object.defineProperty(get/set)）
        Vue3 Proxy
    视图更新也驱动着数据的更新
        基于V-model实现  


MVC:
默认是单向的数据驱动视图更新  
但是可以通过自己调用controller 去实现双向监听
React没有对数据进行任何的劫持 他是基于指定的方法(setState)更改数据，才实现的视图渲染
而可以通过自己使用数据监听实现视图驱动数据更新