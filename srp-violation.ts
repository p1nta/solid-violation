// This class violates the Single Responsibility Principle
// It handles both user data management and email notifications
class UserManager {
    private users: { id: number; email: string; name: string }[] = [];

    public addUser(name: string, email: string): void {
        const id = this.users.length + 1;
        this.users.push({ id, email, name });
        this.sendWelcomeEmail(email);
        this.logUserActivity(id, 'created');
    }

    private sendWelcomeEmail(email: string): void {
        // Email sending logic
        console.log(`Sending welcome email to ${email}`);
    }

    private logUserActivity(userId: number, activity: string): void {
        // Logging logic
        console.log(`User ${userId}: ${activity}`);
    }
}