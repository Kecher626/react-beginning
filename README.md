# 畫面

+ 整體為index

+ 新增按鈕以上為 edit
         以下為 list

+ list裡個別為單獨item

# 架構
        Home (負責共有State 經由(props)傳遞)
       /    \
    Edit    List  (可個別有state負責自己的部分)
               \
                Item

+ 分級概念 => Home端最上層管理, setData()由edit負責, 
+         => 經edit裡的addItem()得知要更改list, list的data被setData()改變 渲染list.js裡的東西


# react-learning(備忘錄app)

1. use (npx create-react-app {project-name}) to create react app
2. mkdir /src/componetns(放共同組件用), mkdir /src/pages(放頁面用), mkdir /src/global(可以放全域的東西)
3. mkdir /src/pages/home(主頁index.js放這), mkdir /src/pages/pageXX...(放各個page)
4. 開始寫 /pages/home/index.js
+   寫組件然後export出去 (組件與一般function差異 => 組件 return jsx的東西)
5. 在/src/index.js內 (import Home from "./Pages/Home") 並在 ReactDOM.render(<React.StrictMode> 下新增<Home />)
6. 用map rendor需加key key需為唯一 詳細備註在List.js

# 開始切版
1. 在/src/pages/home/components內 新增Edit.js Item.js List.js
2. 將上一步所建components引入 home的index.js裡 並在home組件下寫 <Edit /> <List /> ... 即可使用各區塊組件
3. 可選 在各頁面引入.css 也可直接在js內寫css (常用前者)
4. 編寫所需/src/pages/home/components內元件 (元件可互相引入調用)
5. 多個同樣元件可用array產生
6. 若要在jsx內使用js變數 需用{}包起來
7. 確認各組件狀態傳遞以及關係


# 其他資訊
+ webpack => 前端打包工具
+ >npm start  => run server
+ >npm eject => 將react原本隱藏檔案顯示出來

+ ReactDOM => 呈現至頁面套件?
+ 用jsx編寫 (類似html)
+ style components => css 和 components寫在同一js檔的概念/技術?

+ 生成唯一key 可用uuid套件 => npm install uuid
+ 可使用json-server來模擬後端 db以app/db.json為格式



