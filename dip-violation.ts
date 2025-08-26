// This code violates the Dependency Inversion Principle
// High-level module directly depends on low-level module
class MySQLDatabase {
    save(data: string): void {
        console.log(`Saving data to MySQL: ${data}`);
    }
}

// UserService directly depends on MySQLDatabase implementation
class UserService {
    private database: MySQLDatabase;

    constructor() {
        this.database = new MySQLDatabase();  // Direct dependency on concrete class
    }

    saveUser(userData: string): void {
        this.database.save(userData);
    }
}

// Usage
const userService = new UserService();
userService.saveUser('John Doe');