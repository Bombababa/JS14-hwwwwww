// Приклад масиву користувачів
const users = [
    {
      name: "Alice",
      eyeColor: "blue",
      gender: "female",
      isActive: true,
      email: "alice@example.com",
      age: 25
    },
    {
      name: "Bob",
      eyeColor: "brown",
      gender: "male",
      isActive: false,
      email: "bob@example.com",
      age: 30
    },
    {
      name: "Charlie",
      eyeColor: "green",
      gender: "male",
      isActive: true,
      email: "charlie@example.com",
      age: 35
    },
    {
      name: "Diana",
      eyeColor: "blue",
      gender: "female",
      isActive: false,
      email: "diana@example.com",
      age: 40
    },
    {
      name: "Eve",
      eyeColor: "hazel",
      gender: "female",
      isActive: true,
      email: "eve@example.com",
      age: 22
    }
  ];
  
  
  const getNames = users => users.map(user => user.name);
  console.log(getNames(users));  
  
 
  const getUsersByEyeColor = (users, eyeColor) => users.filter(user => user.eyeColor === eyeColor);
  console.log(getUsersByEyeColor(users, "blue"));  
  

  
  const getNamesByGender = (users, gender) => users.filter(user => user.gender === gender).map(user => user.name);
  console.log(getNamesByGender(users, "female"));  
  
  
  const getInactiveUsers = users => users.filter(user => !user.isActive);
  console.log(getInactiveUsers(users));  
 
  

  const getUserByEmail = (users, email) => users.find(user => user.email === email);
  console.log(getUserByEmail(users, "charlie@example.com"));  
 
  
 
  const getUsersByAgeRange = (users, min, max) => users.filter(user => user.age >= min && user.age <= max);
  console.log(getUsersByAgeRange(users, 25, 35));  
 