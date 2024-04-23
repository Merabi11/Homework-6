let age = Number(prompt('შეიყვანეთ თქვენი ასაკი.'));

let type = prompt('შეიყვანეთ როგორი ტიპის ფილმი გსურთ (Regular or 3D)');

let time = prompt(
  'შეიყვანეთ რომელ დღის რეჟიმში გსურთ ფილმი (Morning or Evening)'
);

let ticket = prompt('გაქვთ თუ არა ფასდაკლების ვაუჩერი (Yes or No)');

let price = 0;

if (age < 10) {
  price += 5;
} else if (age >= 10 && age <= 65) {
  price += 15;
} else if (age > 65) {
  price += 10;
}

if (type === '3D') {
  price += 5;
} else if (type === 'Regular') {
  price += 5;
}

if (time === 'Evening') {
  price += 5;
}

//! გამოთვლა სვიჩზე გადავიყვანე!

// if (ticket === 'Yes') {
//   price += -5;
// } else if (ticket === 'No') {
//   alert('თქვენ არ გაქვთ ფასდაკლების ვაუჩერი');
// }

//!

switch (ticket) {
  case 'Yes':
    price += -5;
    break;
  case 'No':
    alert('თქვენ არ გაქვთ ფასაკლების ვაუჩერი');
    break;
}

alert(`თქვენი საფასურია: ${price}`);
