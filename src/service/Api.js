export const CardDate = [
  {
  id: 1,
  title: "Quziqorin",
  date: "2021-4-4",
  text: "Ushbu Quziqorinlik Pitsalar Dunyoda eng Sevib iste'mol qilinadigan Pitsalardan biri hisoblanadi. Sizga ham tatib kuring albatta afsuslanmaysiz",
  productInfo: "10-iyul xalqaro pitsa kuni bo’lib, shu kunda Grande Pizza Co qiziq bir statistikani ma’lum qildi. Uning ta’kidlashicha ko’pchilik aynan quziqorin pitsasini sevib iste’mol qilar ekan. Boshqa bir  statistika ma’lumotlariga qaraganda, har yili dunyoda 114 million kilogram quziqorin pitsasi sotilar ekan.", 
  cost: 100000,
  value: 1,
  imgUrl: "https://st.depositphotos.com/1900347/4146/i/600/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg"
  },
  {
  id: 2,
  title: "Pepperoni",
  date: "2021-4-4",
  text: "Pepperonini yemapsiz bu dunyoga kemapsiz. Ajoyib va Mazzali kalbasalarni tamiga uzingiz baxo bering",
  productInfo: "10-iyul xalqaro pitsa kuni bo’lib, shu kunda Grande Pizza Co qiziq bir statistikani ma’lum qildi. Uning ta’kidlashicha ko’pchilik aynan pepperoni pitsasini sevib iste’mol qilar ekan. Boshqa bir  statistika ma’lumotlariga qaraganda, har yili dunyoda 114 million kilogram pepperoni pitsasi sotilar ekan.", 
  cost: 90000,
  value: 1,
  imgUrl: "https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=6&m=1083487948&s=612x612&w=0&h=lK-mtDHXA4aQecZlU-KJuAlN9Yjgn3vmV2zz5MMN7e4=",
  },
  {
  id: 3,
  title: "Turt Mavsum",
  date: "2021-4-5",
  text: "Bu pitsa hammaning ta’biga yoqishi aniq. U to’rtta faslga ajratilgan: bahor, yoz, kuz va qish. Bu pitsaga xohlagan mavsumiy sabzavotlardan solsa ham bo’ladi",
  productInfo: "Bu pitsaning tarkibi faqatgina pomidorli qayla va pishloqdan iborat bo’ladi. Bizning Toshkentda ko’proq «Gauda» pishlog’i ommalashgan bo’lsa, Angliyada – chedder, Fransiyada esa – bri pishlog’i sevib iste’mol qilinadi. Siz esa pishloqlarni ta’bingizga qarab almashtirishingiz ham mumkin.",
  cost: 85000,
  value: 1,
  imgUrl: "https://zira.uz/wp-content/uploads/2018/03/4-stagioni.jpg"
  },
  {
  id: 4,
  title: "Margarita",
  date: "2021-4-3",
  text: "Italiyada eng sevib iste’mol qilinadigan pitsa esa bu- «Margarita» pitsasidir. Ko’pchilik go’sht mahsulotlarini yoqtiradiganlar esa bunday go’shtsiz pitsani iste’mol qilgilari kelmaydi.",
  productInfo: "Bu pitsaning tarkibi faqatgina pomidorli qayla va pishloqdan iborat bo’ladi. Bizning Toshkentda ko’proq «Gauda» pishlog’i ommalashgan bo’lsa, Angliyada – chedder, Fransiyada esa – bri pishlog’i sevib iste’mol qilinadi. Siz esa pishloqlarni ta’bingizga qarab almashtirishingiz ham mumkin.",
  cost: 75000,
  value: 1,
  imgUrl: "https://dkaravai.ru/wp-content/uploads/2019/09/full_GZUeEwRS.jpg",
  },
  {
  id: 5,
  title: "Miks",
  date: "2021-4-3",
  text: "Miks Pitsalari o'z Suyuklilariga ega bulgan, o'zida aralash turdagi ajaoyib maxsulotlarni mujassam qilgan va betakror ta'm va sifat bera oladigan Pitsa hisoblanadi.",
  productInfo: "Bu pitsaning tarkibi xar xil buladi pomidor bodring quziqorin kalbasa harxil foydali usimliklar va pishloqdan iborat bo’ladi. Bizning Toshkentda ko’proq «Matsarella» pishlog’i ommalashgan bo’lsa, Angliyada – chedder, Fransiyada esa – bri pishlog’i sevib iste’mol qilinadi. Siz esa pishloqlarni ta’bingizga qarab almashtirishingiz ham mumkin.",
  cost: 99000,
  value: 1,
  imgUrl: "https://blog.cravehalal.com/wp-content/uploads/2020/12/pizzanew.jpg"
  },
  {
  id: 6,
  title: "Pizza +",
  date: "2021-4-5",
  text: "Bu pitsa go'sht suyuklilarini o'ziga rom qilishi shak shubhasiz. Nmaga disizmi !? Chunki Pizza + pitsalarimiz keragidan ortiq darajada o'zida Go'sht maxsulotlarini mujassam qilgandur !",
  productInfo: "Bu pitsaning tarkibi faqatgina pomidorli qayla va pishloqdan iborat bo’ladi. Bizning Toshkentda ko’proq «Gauda» pishlog’i ommalashgan bo’lsa, Angliyada – chedder, Fransiyada esa – bri pishlog’i sevib iste’mol qilinadi. Siz esa pishloqlarni ta’bingizga qarab almashtirishingiz ham mumkin.",
  cost: 85000,
  value: 1,
  imgUrl: "https://vkusnodoma.net/wp-content/uploads/2015/04/pizza_vetchina.jpg"
  },
];

export const filteredDate = (title) => {
  return CardDate.filter(date =>  date.title === title)
}

export const filteredByDate = (date) => {
  return CardDate.filter(data => data.date === date)
}

export const filteredByCost = (cost) => {
  return CardDate.filter(costs => costs.cost <= cost)
}




// Suragan savolimga example qlib tushuntirganlari yani massivni ichidagi aynan 1 ta elementni qanday olsa bulishi
// const text = CardDate[0].date;
// console.log(text)

// const text = CardDate.find(item => item.id === 2);
// console.log(text)

// const text = CardDate.filter(item => item.cost === 75000)[0]?.cost;
// const text = CardDate.filter(item => item.cost === 75000)[0];
// console.log(text)

// Lengt 1 dan katta busa db misol un va db qanaqadur amal bajarsa buladi
// const text = CardDate.filter(item => item.cost === 75000);
// text.length > 1 && text.map(it => it.title)
// console.log(text.length > 0 && text.map(it => it.title))


