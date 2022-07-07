# `HTML5 Unit01`

### 基于`KeepAlive`（页面保活机制）实现首页的保活

当从详情页回到首页时，默认的`VueRouter`机制将会重新加载`Index.vue`，重新执行`mounted`生命周期方法，自然也会重新加载所有的数据，渲染界面。但是有时希望`Index.vue`保持原有的状态：跳转到详情页时组件不销毁，当从详情页返回到首页时，还可以维持详情页原有的状态。

使用`keep-alive`组件使`router-view`显示的组件具有保活特性。

```html
<keep-alive>
	<router-view />
</keep-alive>
```

实际开发中，有些页面需要保活，有些页面不需要保活（例如详情页）。所以有如下经典配置：

```javascript
{
    path: '/index',
    component: Index,
    meta: {
        keepAlive: true
    }
},{
  	path: '/Article',
    component: Article
}
```

```html
<keep-alive>
	<router-view v-if="$route.meta.keepAlive"/>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"/>
```

一旦开启页面保活，该页面组件将会解锁两个生命周期方法：

```javascript
/** 页面保活后，解锁该生命周期方法。 当页面被激活时执行 */
activated(){
    console.log('activited...')
    this.isLoading = false  // 启用无限滚动
},

/** 页面保活后，解锁该生命周期方法。 当页面隐藏到后台时执行 */
deactivated(){
    console.log('deactivited...')
    this.isLoading = true // 禁用无限滚动
}
```



### 实现注册与登录业务

1. 在注册页面表单验证成功后，收集数据，发送`http`请求。

   ```
   请求地址： http://localhost:3000/register
   请求方式： POST
   请求参数： username:账号
            password:密码
   响应结果： {code:200, msg:'OK'}
            {code:201, msg:'user exists'}
   ```

2. 根据响应结果，弹出提示框，若注册成功则跳转到登录。若注册失败则弹窗。

3. 实现登录业务。依然需要在登录表单验证成功后发送`http`请求：

   ```
   请求地址： http://localhost:3000/login
   请求方式： POST
   请求参数： username:账号
            password:密码
   响应结果： {code:200, msg:'OK', result: {成功登录用户信息} }
            {code:201, msg:'账号密码输入有误'}
   ```

4. 根据响应结果，弹出提示框，若登录成功则跳转到首页。若登录失败则弹窗。



### 基于`Vuex`在首页提示用户身份信息

1. 当登录成功后，需要把当前用户信息存入`vuex`的`state`。

   向`state`中存数据，需要在`mutations`中声明一个方法，在`vue`组件中调用即可：

   ```javascript
   state:{
       username: 'zhangsan'
   }
   mutations:{
       saveUsername(state, payload){
           state.username = payload
       }
   }
   ```

   调用`vuex`中的`mutations`中的方法：

   ```javascript
   this.$store.commit('saveUsername', 'zhangsan')
   ```

   

2. 每当需要访问当前登录用户时，从`state`中读取用户信息即可。

   ```javascript
   this.$store.state.username
   ```

   

把数据存入`vuex`遇到问题，当刷新页面时，`vuex`中的数据将会重置。如果希望数据持久化保存（刷新依然在，甚至关了浏览器再开还在），则需要配合`HTML5`提供的`WebStorage`一起来完成数据保存。



## `WebStorage`

`HTML5`提供的一套客户端持久化数据存储的方案，包含两大存储区域：

`localStorage`：将数据存储到`localStorage`中后，将会永久保存。

`sessionStorage`：将数据存储到`sessionStorage`中后，仅对当前浏览器会话生效，（浏览器关闭，`sessionStorage`中的数据将会清空）

**如何存**

```javascript
window.localStorage.setItem(key, value)
window.sessionStorage.setItem(key, value)

localStorage.setItem(key, value)
sessionStorage.setItem(key, value)
```

**如何取**

```
let val = localStorage.getItem(key)
```

**如何删**

```javascript
localStorage.removeItem(key)
sessionStorage.removeItem(key)
```



## 网页中的音频与视频

`HTML5`标准中提供了两个标签分别用于播放音频（`<audio>`）与视频（`<video>`）。

### 音频

使用`<audio>`来播放音频文件，支持的音频格式有：`mp3/wav/ogg`... 基本使用方法如下：

```html
<audio controls src="音频路径">
</audio>
```

案例：`01_audio.html`。

**常用属性：**

```html
<audio controls        是否显示控制面板
       src="音频路径"    
       autoplay        是否自动播放
       muted           是否静音
       loop            是否单曲循环
       preload="音频源预加载模式：auto|metadata|none"        
     >
</audio>
```

preload:

​	none: 不进行音频预加载

​	metadata：仅仅加载音频基本信息

​	auto：尽可能多的加载音频数据



### 视频

`HTML5`提供了视频标签实现在网页中播放视频，支持的格式：`mp4/webm/ogg`...

```html
<video controls src="视频路径"></video>
```





















