// This class violates the Single Responsibility Principle
// It handles both user data management and email notifications

// class UserManager {
//     private users: { id: number; email: string; name: string }[] = [];

//     public addUser(name: string, email: string): void {
//         const id = this.users.length + 1;
//         this.users.push({ id, email, name });
//         this.sendWelcomeEmail(email);
//         this.logUserActivity(id, 'created');
//     }

//     private sendWelcomeEmail(email: string): void {
//         // Email sending logic
//         console.log(`Sending welcome email to ${email}`);
//     }

//     private logUserActivity(userId: number, activity: string): void {
//         // Logging logic
//         console.log(`User ${userId}: ${activity}`);
//     }
// }

interface User {
    id: number;
    email: string;
    name: string;
}
class UserRepository {
    private users: User[] = [];

    public addUser(name: string, email: string): User {
        const id = this.users.length + 1;
        const user: User = { id, email, name };
        this.users.push(user);
        return user;
    }
}
class EmailService {
    public sendWelcomeEmail(email: string): void {
        // Email sending logic
        console.log(`Sending welcome email to ${email}`);
    }
}

class LoggerService {
    public logUserActivity(userId: number, activity: string): void {
        // Logging logic
        console.log(`User ${userId}: ${activity}`);
    }
}
class UserManager {
    constructor(
        private userRepository: UserRepository,
        private emailService: EmailService,
        private logger: LoggerService
    ) {}

    public addUser(name: string, email: string): void {
        const user = this.userRepository.addUser(name, email);
        this.emailService.sendWelcomeEmail(email);
        this.logger.logUserActivity(user.id, 'created');
    }
}