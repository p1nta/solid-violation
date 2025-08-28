// This code violates the Dependency Inversion Principle
// High-level module directly depends on low-level module
// class MySQLDatabase {
//     save(data: string): void {
//         console.log(`Saving data to MySQL: ${data}`);
//     }
// }

// // UserService directly depends on MySQLDatabase implementation
// class UserService {
//     private database: MySQLDatabase;

//     constructor() {
//         this.database = new MySQLDatabase();  // Direct dependency on concrete class
//     }

//     saveUser(userData: string): void {
//         this.database.save(userData);
//     }
// }

interface Database {
    save(data: string): void;
}

class MySQLDatabase implements Database {
    save(data: string): void {
        console.log(`Saving data to MySQL: ${data}`);
    }
}

class UserService {
    private database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    saveUser(userData: string): void {
        this.database.save(userData);
    }
}

// Usage
const mySQLDatabase = new MySQLDatabase();
const userService = new UserService(mySQLDatabase);
userService.saveUser('John Doe');