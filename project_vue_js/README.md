# project_vue_js

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### Create Flow Step By Step
...
Set Up Project Structure:
 ##
    ── src
 ##
    ── assets/img/[Group 522.png, Rectangle 250 (1).png, Rectangle 250 (2).png, Rectangle 250.png, Union (1).png, Union.png]
 ##
    ── components/Header.vue, Footer.vue 
 ##    
    ── router/index.js
 ##
    ── store/index.js
 ##
    ── views/Home.vue, About.vue, Services.vue, Contacts.vue
 ##
    ── App.vue
 ##
    ── main.js

##### Create Components and Views
##      Penjelasan views - Home.vue
Template:
Menambahkan :class="{ selected: activeMenu === 'home' }" untuk menentukan apakah menu saat ini aktif.
Menambahkan @click="setActiveMenu('home')" untuk mengubah state aktif saat menu diklik.
Script:
Menambahkan data untuk mengelola state aktif.
Menambahkan methods untuk mengubah state aktif.
Style:
Menambahkan gaya hover untuk tautan.
Menambahkan gaya selected untuk menu yang dipilih dengan border-bottom dan font-weight bold.
Dengan konfigurasi ini, menu navigasi akan memiliki efek hover dan akan tetap aktif setelah diklik.
...
##### Place Your Assets
...
##### Run Your Project:
