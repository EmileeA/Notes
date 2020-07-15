// const companies = [
//   {name: "Company One", category: "Finance", start: 1981, end: 2003},
//   {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//   {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//   {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//   {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//   {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//   {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//   {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//   {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
// ];

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }
// // TODO: ForEach() - 3:25 - 5:30
// //asynchronos call back function. Can take in three different things. Iterator/index/array
// companies.forEach(function(Company){
//   console.log(company.name);
// });

// // Filter() - 5:30 - 15:30   (8:55 One liner filter code) (filter will returns an array - meaning you do not need a separate variable for an array)
// //this is how you do it with a for loop
// // let canDrink = [];
// // for (let i=0; i<ages.length; i++) {
// //   if (ages[i] >= 21) {
// //     canDrink.push(ages[i]);
// //   }
// // }

// //Filter
// // const canDrink = ages.filter(function(age) {
// //   if(age>=21) {
// //     return true;
// //   }
// // });

// // TODO: FILTER
// const canDrink = ages.filter(age => age >=21);
// console.log(canDrink);

// // FILTER RETAIL COMPANIES
// //ES5
// // const retailCompanies = companies.filter(function(company) {
// //   if(company.category === 'Retail') {
// //     return true;
// //   }
// // });

// const retailCompanies = companies.filter(company => company.category === 'Retail')
// console.log(retailCompanies);

// // FILTER 80s COMPANIES
// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990 ));
// console.log(eightiesCompanies);

// // FILTER LASTED 10 YEARS OR MORE
// const lastedTenYears = companies.filter(company => (company.end - company.start >= 10 ));
// console.log(lastedTenYears);

// // TODO: Map() - 15:45 - 21:05  (20:30 You can link multiple Map() like .then() from promises)
// // CREATE ARRAY OF COMPANY NAMES
// const companyNames = companies.map(function(company) {
//   return company.name;
// });
// console.log(companyNames);

// // Name with start to end date
// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);

// // AGES usings math square
// const agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare);

// // AGES times two
// const agesTimesTwo = ages
// .map(age => Math.sqrt(age));
// .map(age => age *2);
// console.log(agesTimesTwo);


// // TODO: Reduce() - 25:50 - 30:55 (Reduces the array to a single value - from LEFT to RIGHT)

// // let ageSum = 0;
// // for(let i = 0; i< ages.length; i++) {
// //   ageSum += ages[i];
// // }


// //SUM OF AGES
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// // TOTAL YEARS FOR ALL COmpanies
// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalYears);

// // Sort() - 21:10 - 25:50 (Takes two params)
// const sortAges = ages.sort((a,b) => a-b);
// console.log(sortAges);

// // Extra : 31:05 - 33:40 (Combine all four methods)

// const combined = ages
// .map(age => age * 2)
// .filter(age => age >= 40)
// .sort((a, b) => a -b)
// .reduce((a, b) => a + b, 0);

// console.log(combined);