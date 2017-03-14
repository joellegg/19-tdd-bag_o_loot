// const { Database } = require('sqlite3').verbose();
// const db = new Database('example.sqlite', () => console.log('Connected!'));

// let empArray = [
//   { id: null, firstName: 'Fred', lastName: 'Smith', jobTitle: 'Cashier', address: '500 Somewhere Lane', salary: 54000 },
//   { id: null, firstName: 'James', lastName: 'West', jobTitle: 'Full Stack Developer', address: '501 Old Hickory', salary: 108000 },
//   { id: null, firstName: 'Michael', lastName: 'Tamborino', jobTitle: 'Errand Boy', address: '608 This Street', salary: 32000 },
//   { id: null, firstName: 'Billy', lastName: 'Connolly', jobTitle: 'Beetz Maker', address: '12 Nimbus Ct', salary: 58000 },
//   { id: null, firstName: 'Joel', lastName: 'Legg', jobTitle: 'CEO', address: '65 Bologna St', salary: 282000 },
//   { id: null, firstName: 'Sorrel', lastName: 'Brigam', jobTitle: 'CTO', address: 'Somewhere Nashville St', salary: 162000 },
// ];

// empArray.forEach((obj) => {
//   // Using ES6 string templating, we can create an insert statement for each object
//   db.run(`INSERT INTO employees VALUES (${obj.id}, '${obj.firstName}', '${obj.lastName}', '${obj.jobTitle}', '${obj.address}', '${obj.salary}')`);
// });
