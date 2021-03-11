module：提供对 module 的处理，最后构建成一棵 module tree
plugins：和 devtools 配合的插件，提供像时空旅行这样的调试功能。
helpers：提供如 mapActions、mapMutations 这样的 api
index、index.esm：源码的主入口，抛出 Store 和 mapActions 等 api，一个用于 commonjs 的打包、一个用于 es module 的打包
mixin：提供 install 方法，用于注入 $store
store：vuex 的核心代码
util：一些工具函数，如 deepClone、isPromise、assert