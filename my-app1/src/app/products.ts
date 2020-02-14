export interface Product{
  name: string,
  link: string,
  source: string,
  price: string,
  description: string,
  rating: number
}

export const products = [
  {
    name: 'Geneva',
    link: 'https://aliexpress.ru/item/4000094534783.html?spm=a2g0o.productlist.0.0.39f63cbaADn3GU&algo_pvid=4c22b585-63df-4576-9b4e-cd1bf6df282e&algo_expid=4c22b585-63df-4576-9b4e-cd1bf6df282e-0&btsid=0ab6f83115816119390574985e887c&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    source: 'https://ae01.alicdn.com/kf/H65384bc3d1ae445e8d9a640be75ac884c/2020.jpg',
    price: 'US $2.98 - 3.39',
    description: '2020 минималистичные мужские модные ультра тонкие часы простые мужские деловые часы из нержавеющей стали с сетчатым ремешком кварцевые часы Relogio Masculino',
    rating: 4.6},

  {
    name: 'DIDUN',
    link:'https//aliexpress.ru/item/32904363794.html?spm=a2g0o.productlist.0.0.39f63cbaADn3GU&algo_pvid=4c22b585-63df-4576-9b4e-cd1bf6df282e&algo_expid=4c22b585-63df-4576-9b4e-cd1bf6df282e-1&btsid=0ab6f83115816119390574985e887c&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_' , 
    source: 'https://ae01.alicdn.com/kf/He880d394503543f68e64531f99c57086T/DIDUN.jpg',
    price: 'US $69.36',
    description: 'DIDUN Мужские автоматические механические часы Топ бренд Роскошные часы мужские стальные армейские военные часы мужские деловые наручные часы',
    rating: 4.9
  },

  {
    name: 'PAGANI',
    link: 'https://aliexpress.ru/item/32963970331.html?spm=a2g0o.productlist.0.0.39f63cbaADn3GU&algo_pvid=4c22b585-63df-4576-9b4e-cd1bf6df282e&algo_expid=4c22b585-63df-4576-9b4e-cd1bf6df282e-2&btsid=0ab6f83115816119390574985e887c&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    source: 'https://ae01.alicdn.com/kf/H59e46382a0e54424b9160be3e990963ck/PAGANI.jpg',
    price: 'US $74.99',
    description: 'PAGANI дизайнерские брендовые Роскошные мужские часы Автоматические черные часы мужские из нержавеющей стали водонепроницаемые деловые спортивные механические наручные часы',
    rating: 4.8
  },
  {
    name: 'Homme',
    link: 'https://aliexpress.ru/item/4000274087349.html?spm=a2g0o.productlist.0.0.39f63cbaADn3GU&algo_pvid=4c22b585-63df-4576-9b4e-cd1bf6df282e&algo_expid=4c22b585-63df-4576-9b4e-cd1bf6df282e-3&btsid=0ab6f83115816119390574985e887c&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    source: 'https://ae01.alicdn.com/kf/HTB1Eo_RSMHqK1RjSZFEq6AGMXXaf.jpg',
    price: 'US $1.53 - 3.14',
    description: 'Мужские часы Топ бренд класса люкс Ретро дизайн кожаный ремешок Аналоговый сплав кварцевые наручные часы homme',
    rating: 3.1
  },

  {
    name: 'SKMEI',
    link: 'https://aliexpress.ru/item/32830806520.html?spm=a2g0o.productlist.0.0.39f63cbaADn3GU&algo_pvid=4c22b585-63df-4576-9b4e-cd1bf6df282e&algo_expid=4c22b585-63df-4576-9b4e-cd1bf6df282e-4&btsid=0ab6f83115816119390574985e887c&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    source: 'https://ae01.alicdn.com/kf/HTB1SkQfbe6sK1RjSsrbq6xbDXXam/SKMEI.jpg',
    price: 'US $15.32 - 20.24',
    description: 'SKMEI часы мужские Модные креативные спортивные часы для мужчин Часы из светодиодов с ремешком из нержавеющей стали Водонепроницаемые цифровые часы с 5 барами часы электронные 0926',
    rating: 4.8
  },

  {
    name: 'Curren',
    link: 'https://aliexpress.ru/item/32852025423.html?spm=a2g0o.productlist.0.0.39f63cbaADn3GU&algo_pvid=4c22b585-63df-4576-9b4e-cd1bf6df282e&algo_expid=4c22b585-63df-4576-9b4e-cd1bf6df282e-5&btsid=0ab6f83115816119390574985e887c&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    source: 'https://ae01.alicdn.com/kf/HTB1nXMfXnmWBKNjSZFBq6xxUFXaQ/Curren-2018.jpg',
    price: 'US $14.83',
    description: 'Curren 2018 Новые Модные Военные часы фирменный дизайн армейские мужские часы с календарем Резиновые Спортивные Роскошные наручные часы relogio masculino',
    rating: 5
  },

  {
    name: 'LOREO',
    link: 'https://aliexpress.ru/item/33057146075.html?spm=a2g0o.productlist.0.0.39f63cbaADn3GU&algo_pvid=4c22b585-63df-4576-9b4e-cd1bf6df282e&algo_expid=4c22b585-63df-4576-9b4e-cd1bf6df282e-6&btsid=0ab6f83115816119390574985e887c&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    source: 'https://ae01.alicdn.com/kf/HTB1jJOfXkY2gK0jSZFgq6A5OFXa8/LOREO.jpg',
    price: 'US $62.89 - 75.14',
    description: 'LOREO Роскошные Брендовые мужские военные спортивные часы для дайвинга, Мужские автоматические механические часы, водонепроницаемые наручные часы 200 м с датой',
    rating: 4.7
  },

  {
    name: 'Reloj Hombre',
    link: 'https://aliexpress.ru/item/4000386164950.html?spm=a2g0o.productlist.0.0.39f63cbaADn3GU&algo_pvid=4c22b585-63df-4576-9b4e-cd1bf6df282e&algo_expid=4c22b585-63df-4576-9b4e-cd1bf6df282e-8&btsid=0ab6f83115816119390574985e887c&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    source: 'https://ae01.alicdn.com/kf/H9974ad725ffd487e98364b89e276ee2fe/-.jpg',
    price: 'US $3.22 - 4.60',
    description: 'Мужские часы, механические часы, мужские автоматические классические часы из нержавеющей стали розового золота, механические наручные часы, Reloj Hombre, подарок f3',
    rating: 4.9
  },

  {
    name: 'LIGE',
    link: 'https://aliexpress.ru/item/4000055234169.html?spm=a2g0o.productlist.0.0.39f63cbaADn3GU&s=p&algo_pvid=4c22b585-63df-4576-9b4e-cd1bf6df282e&algo_expid=4c22b585-63df-4576-9b4e-cd1bf6df282e-9&btsid=0ab6f83115816119390574985e887c&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    source: 'https://ae01.alicdn.com/kf/H5477be05e6da461ab9bf10b2591853a5c/2019-LIGE.jpg',
    price: 'US $17.99 - 23.99',
    description: 'Новинка 2019, LIGE, синие, повседневные, с сетчатым ремешком, модные, кварцевые, золотые, мужские часы, Топ бренд, Роскошные, водонепроницаемые часы, Relogio Masculino',
    rating: 4.8
  },
  {
    name: 'Yazole',
    link: 'https://aliexpress.ru/item/32729136547.html?spm=a2g0o.productlist.0.0.39f63cbaADn3GU&algo_pvid=4c22b585-63df-4576-9b4e-cd1bf6df282e&algo_expid=4c22b585-63df-4576-9b4e-cd1bf6df282e-10&btsid=0ab6f83115816119390574985e887c&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_',
    source: 'https://ae01.alicdn.com/kf/HTB1fugNSpXXXXckXXXXq6xXFXXXQ/Yazole.jpg',
    price: 'US $4.40 - 4.49',
    description: 'Yazole брендовые роскошные известные мужские часы деловые мужские часы модные кварцевые часы Relogio Masculino reloj hombre 2019',
    rating: 4.7
  }

  

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/