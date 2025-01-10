{
  let person = {
    name: "mohammad",
    age: 18,
    email: "mohammedziadeh6@gmail.com",
  };
  console.log(person);

  person = JSON.stringify(person);
  console.log(person);

  person = JSON.parse(person);
  console.log(person);
}
console.log("2-");
//##################################Task 2########################################
{
  let person = {
    name: "mohammad",
    age: 18,
    email: "mohammedziadeh6@gmail.com",
  };
  let JSONperson = JSON.stringify(person);
  function personal(someone) {
    let parsed = JSON.parse(someone);
    let key = Object.keys(parsed);
    let length = key.length;
    console.log(length);
  }
  personal(JSONperson);
}
console.log("3-");
//##################################Task 3########################################
{
  let books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publicationDate: 1960,
    },
    {
      title: "1984",
      author: "George Orwell",
      publicationDate: 1949,
    },
    {
      title: "kafka on the shore",
      author: "Haruki Murakami",
      publicationDate: 2002,
    },
  ];
  let JSONbooks = JSON.stringify(books);
  function bookTitle() {
    let parsed = JSON.parse(JSONbooks);
    let title = parsed.map((book) => book.title);
    console.log(title);
  }
  bookTitle();
}
console.log("4-");
//##################################Task 4########################################
{
  let students = [
    {
      name: "mohammad",
      age: 18,
      grade: 100,
    },
    {
      name: "ali",
      age: 18,
      grade: 70,
    },
    {
      name: "ahmed",
      age: 18,
      grade: 95,
    },
    {
      name: "sara",
      age: 18,
      grade: 65,
    },
  ];
  let JSONstudents = JSON.stringify(students);
  function average() {
    let parsed = JSON.parse(JSONstudents);
    let total = 0;
    for (i = 0; i < parsed.length; i++) {
      total += parsed[i].grade;
    }
    let aveGrade = total / parsed.length;
    console.log(aveGrade);
  }
  average();
}
console.log("5-");
//##################################Task 5########################################
{
  let students = [
    {
      name: "mohammad",
      age: 18,
      grade: 100,
    },
    {
      name: "ali",
      age: 18,
      grade: 70,
    },
    {
      name: "ahmed",
      age: 18,
      grade: 95,
    },
    {
      name: "sara",
      age: 18,
      grade: 65,
    },
  ];
  let JSONstudents = JSON.stringify(students);
  function sort() {
    let parsed = JSON.parse(JSONstudents);
    parsed.sort((a, b) => a["grade"] - b["grade"]);
    console.log(parsed);
  }
  sort();
}

console.log("6-");
//##################################Task 6########################################
{
  let cities = [
    {
      name: "cairo",
      population: 26000000,
      country: "Egypt",
    },
    {
      name: "tokyo",
      population: 13780000,
      country: "Japan",
    },
    {
      name: "delhi",
      population: 30000000,
      country: "India",
    },
    {
      name: "moscow",
      population: 12690000,
      country: "Russia",
    },
  ];
  let JSONcities = JSON.stringify(cities);
  function deSort() {
    let parsed = JSON.parse(JSONcities);
    parsed.sort((a, b) => b["population"] - a["population"]);
    let cityName = parsed.map((city) => city.name);
    console.log(cityName);
  }
  deSort();
}

console.log("7-");
//##################################Task 7########################################
{
  const fetchData = fetch("data.json");
  fetchData
    .then((response) => {
      if (!response.ok) {
        throw "I can't fetch the data";
      }
      return response.json();
    })
    .then((data) => {
      const products = data.products;
      function totalRevenue() {
        let total = 0;
        for (let i = 0; i < products.length; i++) {
          total += products[i].price * products[i].quantity;
        }
        console.log(total);
      }

      totalRevenue();
    });
}

