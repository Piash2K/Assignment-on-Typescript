const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    return -1;
  }
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number;
};

const filterByRating = (arrayWithObj: Item[]): Item[] => {
  return arrayWithObj.filter((item) => item.rating >= 4);
};

type Users = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (arrayOfUserObj: Users[]): Users[] => {
  return arrayOfUserObj.filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (obj: Book) => {
  console.log(
    `Title: ${obj.title}, Author: ${obj.author}, Published: ${
      obj.publishedYear
    }, Available: ${obj.isAvailable ? "Yes" : "No"}`
  );
};

type ArrayType = string | number;
const getUniqueValues = (arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] => {
  const newArr: ArrayType[] = [];

  for (let i = 0; i < arr1.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr1[i] === newArr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      newArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr2[i] === newArr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]):number => {
  return products.reduce((total, product) => {
    const totalPrice = product.price * product.quantity;
    const discountedTotalPrice = product.discount
      ? totalPrice * (1 - product.discount / 100)
      : totalPrice;
    return total+discountedTotalPrice;
  }, 0);
};
