// import openDatabase hook
import { openDatabase } from "react-native-sqlite-storage";

// use hook to create database
const shopperDB = openDatabase({name: 'Shopper.db'});
const listsTableName = 'lists';

module.exports = {
    // declare function that will create the lists table
    createListsTable: async function () {
        // declare a transaction that will execute a SQL statement
        (await shopperDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${listsTableName}(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    store TEXT,
                    date TEXT
                );`,
                // arguments needed when using an SQL prepared statement
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log('Lists table created successfully');
                },
                error => {
                    console.log('Error creating lists table ' + error.message);
                },
            );
        });
    },

    // declare function that will insert a row into the lists table
    addList: async function (name, store, date) {
        // declare a transaction that will execute an SQL statement
        (await shopperDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `INSERT INTO ${listsTableName} (name, store, date) VALUES ("${name}", "${store}", "${date}")`,
                // arguments passed when using SQL prepared statements
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log(name + " added successfully");
                },
                error => {
                    console.log('Error adding list ' + error.message);
                },
            );
        });
    },
};