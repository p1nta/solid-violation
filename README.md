# SOLID Principles Violations Examples

This repository contains examples of SOLID principles violations in TypeScript and demonstrates how they can be identified and fixed.

## What are SOLID Principles?

SOLID is an acronym that represents five fundamental principles of object-oriented programming and design:

### 1. Single Responsibility Principle (SRP)
- **Definition**: A class should have only one reason to change.
- **Example**: See `srp-violation.ts`
- **Why Important**: Classes with a single responsibility are easier to maintain, understand, and modify.
- **Common Violations**: Classes that handle multiple concerns like data access, business logic, and UI rendering all in one place.

### 2. Open-Closed Principle (OCP)
- **Definition**: Software entities should be open for extension but closed for modification.
- **Example**: See `ocp-violation.ts`
- **Why Important**: Allows adding new functionality without changing existing code, reducing the risk of bugs.
- **Common Violations**: Using if/else or switch statements to handle different types or variants of behavior.

### 3. Liskov Substitution Principle (LSP)
- **Definition**: Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.
- **Example**: See `lsp-violation.ts`
- **Why Important**: Ensures that inheritance hierarchies are properly designed and maintains behavioral compatibility.
- **Common Violations**: Subclasses that throw exceptions for methods they inherit, or override methods with incompatible behavior.

### 4. Interface Segregation Principle (ISP)
- **Definition**: Clients should not be forced to depend on interfaces they do not use.
- **Example**: See `isp-violation.ts`
- **Why Important**: Prevents classes from being forced to implement irrelevant methods.
- **Common Violations**: "Fat" interfaces that force classes to implement methods they don't need.

### 5. Dependency Inversion Principle (DIP)
- **Definition**: High-level modules should not depend on low-level modules. Both should depend on abstractions.
- **Example**: See `dip-violation.ts`
- **Why Important**: Reduces coupling between modules and makes the system more flexible and testable.
- **Common Violations**: Directly instantiating dependencies inside a class instead of injecting them.

## Repository Structure

This repository contains five TypeScript files, each demonstrating a violation of one SOLID principle:

1. `srp-violation.ts` - Demonstrates violation of Single Responsibility Principle
2. `ocp-violation.ts` - Demonstrates violation of Open-Closed Principle
3. `lsp-violation.ts` - Demonstrates violation of Liskov Substitution Principle
4. `isp-violation.ts` - Demonstrates violation of Interface Segregation Principle
5. `dip-violation.ts` - Demonstrates violation of Dependency Inversion Principle

## How to Use This Repository

1. Study each file to understand how it violates its respective SOLID principle
2. Think about how you would refactor the code to follow the principle
3. Implement your solution
4. Compare with others' solutions

## Learning Objectives

After working with these examples, you should be able to:
- Identify violations of SOLID principles in code
- Understand why these violations are problematic
- Know how to refactor code to adhere to SOLID principles
- Apply these principles in your own code

## Contributing

Feel free to submit pull requests with:
- Additional examples of SOLID principles violations
- Solutions to the existing violations
- Improved documentation or explanations
- Additional test cases

## License

This project is licensed under the MIT License - see the LICENSE file for details.