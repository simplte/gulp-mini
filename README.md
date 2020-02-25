## wx-mall-mini

> 基于 Gulp 构建的wx-mall-mini小程序开发工作流
> 参考git项目修改
### 特性

- 基于`gulp+less`构建的微信小程序工程项目
- 项目图片自动压缩
- ESLint 代码检查
- 使用命令行快速创建`page`、`template`和`component`
- 支持生产环境打包

### 项目初始化

##### 1. 安装依赖

```
$ npm install
```

##### 2. 编译代码，生成 dist 目录，使用开发者工具打开 dist 目录

```
$ npm run dev （开发环境打包）
$ npm run test (测试环境打包)
```

##### 3. 新建 page、template 或者 component

```
  gulp auto -p mypage           创建名为mypage的page文件
  gulp auto -t mytpl            创建名为mytpl的template文件
  gulp auto -c mycomponent      创建名为mycomponent的component文件
  gulp auto -s index -p mypage  复制pages/index中的文件创建名称为mypage的页面
```

##### 4. 上传代码前编译

```
$ npm run build （生产环境打包）
```

##### 5. 上传代码，审核，发版

### 工程结构

```
wx-miniprogram-boilerplate
├── dist                        // 编译后目录
├── node_modules                // 项目依赖
├── src
│    ├── env                    // 编译环境
│    ├── pages
│    │     ├──  _template       // 页面模板
│    │     ├──  ...             // 其余主包页面文件
│    │     ├──  order           // 订单分包
│    │     └──  subPagesOne     // 入驻分包
│    ├── static                 // 静态文件
│    │     ├──  css             // 第三方样式库
│    │     ├──  icons           // 字体图标库
│    │     ├──  js              // 第三sdk及配置
│    │     └──  images
│    ├── styles                 // 公用样式
│    ├── templates              // 页面模板
│    └── utils                  // 公用方法
│          ├──  http            // 微信请求封装，接口列表
│          ├──  validate
│          ├──  wxParse
│          ├──  ...             // 其他公用方法封装
│          └──  index           // 公用方法输出
├── .gitignore
├── .eslintrc.js
├── package-lock.json
├── package.json
└── README.md

```

### Gulp 说明

```
Tasks:
  dev              开发编译，同时监听文件变化
  test             整体编译，请求指向测试环境
  build            整体编译

  clean            清空产出目录
  wxml             编译wxml文件（仅仅copy）
  js               编译js文件，同时进行ESLint语法检查
  json             编译json文件（仅仅copy）
  wxss             编译less文件为wxss
  img              编译压缩图片文件
  watch            监听开发文件变化
  devEnv/testEnv/prodEnv 生成对应环境的请求域名配置

  auto             自动根据模板创建page,template或者component(小程序自定义组件)

gulp auto

选项：
  -s, --src        copy的模板                     [字符串] [默认值: "_template"]
  -p, --page       生成的page名称                                       [字符串]
  -t, --template   生成的template名称                                   [字符串]
  -c, --component  生成的component名称                                  [字符串]
  --msg            显示帮助信息                                           [布尔]

示例：
  gulp auto -p mypage           创建名为mypage的page文件
  gulp auto -t mytpl            创建名为mytpl的template文件
  gulp auto -c mycomponent      创建名为mycomponent的component文件
  gulp auto -s index -p mypage  复制pages/index中的文件创建名称为mypage的页面
```
