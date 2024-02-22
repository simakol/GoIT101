/**
 * Реалізуй пошук автомобілів по сайту
 * Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив cars)
 * Користувач може ввести в форму назву Марки або Моделі авто і в тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
 * Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку
 */

const cars = [
  {
    id: 1,
    car: "Audi",
    type: "A6",
    price: 30000,
    img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
  },
  {
    id: 2,
    car: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 3,
    car: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 4,
    car: "BMW",
    type: "5 siries",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    id: 5,
    car: "Honda",
    type: "Accord",
    price: 20000,
    number: "+380000000000",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 6,
    car: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
];

/*
1. відмальовуємо карточки автомобілів, створюючи розмітку через map та join, показуючи її на екрані за допомогою innerHTML
2. повісили обробник подій по сабміту на форму
3. зібрали дані форми через елементи форми
4. запускаємо фільтрацію масиву автомобілів по критеріям з даних форми(тобто по запиту і по марці або моделі), якщо обʼєкт в масиві підходить - ми його додаємо в масив результату, якщо ні - не додаємо
5. Відмальовуємо нову розмітку на основі масиву результатів який ми отримали в наслідок фільтрації 

*/

const elements = {
  form: document.querySelector(".js-form"),
  container: document.querySelector(".js-list"),
};

elements.container.innerHTML = createMarkup(cars); // задаємо базову розмітку всіх автомобілів
elements.form.addEventListener("submit", handleSearch);

function handleSearch(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  const options = formElements.options.value;
  const query = formElements.query.value;

  console.log(options);
  console.log(query);

  // car[options] - динамічне звернення до властивості обʼєкту, константа options це значення поля select option, яке вибирає користувач, воно може бути або car або type. Ми знаємо, що в обʼєкті автомобіля є поля car і type. Але не знаємо що точно вибере користувач, тому зберігаємо результат вибору у констату і динамічно звертаємось до властивості обʼєкту. Тобто, замість car[options]  може бути або car.type або car.car

  const result = cars.filter(
    (car) => car[options].toLowerCase() === query.toLowerCase()
  ); // фільтруємо по запиту, перевіряючи кожен обʼєкт на відповідність нашому запиту в інпуті, якщо тип або марка машини рівна запиту користувача, то ця машина нам підходить

  if (result.length === 0) {
    alert("Такої машини не знайдено!");
  } else {
    elements.container.innerHTML = createMarkup(result);
  }
}

function createMarkup(arr) {
  return arr
    .map(
      ({ id, car, type, price, img }) => `<li class="car-card" data-id="${id}">
  <img src="${img}" alt="${type}" class="car-image">
  <h2 class="car-title">${car}</h2>
  <h3 class="car-type">${type}</h3>
  <span class="car-price">${price}$</span>
</li>`
    )
    .join("");
}
