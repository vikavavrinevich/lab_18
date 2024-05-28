// завдання 1
function createCar(brand, model, year) {
    let car = Object.create(createCar.prototype);
    car.brand = brand;
    car.model = model;
    car.year = year;
    return car;
}
createCar.prototype.displayInfo = function() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
};
createCar.prototype.drive = function() {
    console.log("Рух розпочато");
};
let car1 = createCar("Toyota", "Camry", 2020);
let car2 = createCar("Tesla", "Model S", 2021);
let car3 = createCar("BMW", "X5", 2019);
car1.displayInfo(); 
car1.drive();
car2.displayInfo();
car2.drive(); 
car3.displayInfo(); 
car3.drive(); 

//завдання 2
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    study() {
        console.log(`${this.name}, ${this.age} років, навчається з оцінкою ${this.grade}.`);
    }
}
const student1 = new Student("Cristiano Ronaldo", 39, "A");
const student2 = new Student("Tyler Joseph", 35, "B");
const student3 = new Student("Indigo", 19, "A+");
student1.study(); 
student2.study(); 
student3.study(); 

//завдання 3
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    // Метод для обчислення площі
    area() {
        return Math.PI * this.radius * this.radius;
    }

    // Метод для обчислення периметра
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}

const circle = new Circle("червоний", 3);
console.log(`Колір кола: ${circle.color}`);
console.log(`Площа кола: ${circle.area()}`);

const rectangle = new Rectangle("синій", 5, 8);
console.log(`Колір прямокутника: ${rectangle.color}`);
console.log(`Площа прямокутника: ${rectangle.area()}`);




//завдання 4
 class Button {
    constructor(text, border, color, background) {
        this.text = text;
        this.border = border;
        this.color = color;
        this.background = background;
    }

    // Метод для додавання кнопки на сторінку та обробника кліку
    render() {
        const button = document.createElement('button');
        button.innerText = this.text;
        button.style.border = this.border;
        button.style.color = this.color;
        button.style.background = this.background;
        button.className = 'button';
        button.addEventListener('click', () => {
            console.log(`Кнопка ${this.text} натиснута. Колір кнопки - ${this.background}`);
        });
        document.body.appendChild(button);
    }
}

// Клас RoundedButton, який успадковується від Button
class RoundedButton extends Button {
    constructor(text, border, color, background, borderRadius) {
        super(text, border, color, background);
        this.borderRadius = borderRadius;
    }

    // Метод для додавання кнопки на сторінку та обробника кліку
    render() {
        const button = document.createElement('button');
        button.innerText = this.text;
        button.style.border = this.border;
        button.style.color = this.color;
        button.style.background = this.background;
        button.style.borderRadius = this.borderRadius;
        button.className = 'button';
        button.addEventListener('click', () => {
            console.log(`Кнопка ${this.text} натиснута. Колір кнопки - ${this.background}`);
        });
        button.addEventListener('mouseover', this.dropShadow);
        button.addEventListener('mouseout', this.removeDropShadow);
        document.body.appendChild(button);
    }

    // Метод для додавання тіні при наведенні миші
    dropShadow(event) {
        event.target.style.boxShadow = '2px 2px 12px rgba(0, 0, 0, 0.5)';
    }

    // Метод для видалення тіні при відведенні миші
    removeDropShadow(event) {
        event.target.style.boxShadow = 'none';
    }
}

// Створення екземплярів класу Button
const button1 = new Button('Button 1', '2px solid black', 'black', 'orange');
const button2 = new Button('Button 2',  'black', 'green');
const button3 = new Button('Button 3', '1px solid black', 'red', 'white');

// Створення екземплярів класу RoundedButton
const roundedButton1 = new RoundedButton('Rounded Button 1', '1px solid black', 'white', 'blue', '15px');
const roundedButton2 = new RoundedButton('Rounded Button 2', '1px solid black', 'black', 'green', '15px');
const roundedButton3 = new RoundedButton('Rounded Button 3', '1px dashed black', 'green', 'grey', '15px');


button1.render();
button2.render();
button3.render();

roundedButton1.render();
roundedButton2.render();
roundedButton3.render();