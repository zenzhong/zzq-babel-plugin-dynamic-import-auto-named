<!--
 * @Author: 小指
 * @Date: 2021-04-14 16:02:32
 * @LastEditTime: 2021-04-14 16:22:50
 * @LastEditors: 小指
 * @Description: 说明文档
-->
# zzq-babel-plugin-dynamic-import-auto-named

自动为dynamic import添加webpackChunkName


## 快速使用

### 安装

```bash
npm i -D zzq-babel-plugin-dynamic-import-auto-named
```

### 使用

在`babel`配置里面添加插件配置：

```
...
"plugins": [
  [
    "zzq-babel-plugin-dynamic-import-auto-named",
    {
      "connector": "_" // 文件连接符，默认使用_
    }
  ]
]
...
```

### 效果

未添加`webpackChunkName`则会根据路径添加，去除相对路径`.`和`..`，替换`connector`：
```
() => import('./a.js'), // () => import(/* webpackChunkName: "a_js" */ './a.js'),
() => import('../dir/b.vue'), // () => import(/* webpackChunkName: "dir_b_vue" */ './dir/b.vue'),
() => import('@/views/c.jsx'), // () => import(/* webpackChunkName: "@_views_c_jsx" */ '@/views/c.jsx'),
```

已经添加`webpackChunkName`则忽略，保留原来的配置：
```
() => import(/* webpackChunkName: "about" */ '@/views/about.vue'), // () => import(/* webpackChunkName: "about" */ '@/views/about.vue'),
```