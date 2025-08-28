// This code violates the Interface Segregation Principle
// The interface is too large and forces classes to implement methods they don't need
// interface Worker {
//     work(): void;
//     eat(): void;
//     sleep(): void;
//     code(): void;
//     test(): void;
//     deploy(): void;
//     manageMeetings(): void;
// }

// // This class is forced to implement methods it doesn't need
// class QAEngineer implements Worker {
//     work() { console.log('Working...'); }
//     eat() { console.log('Eating lunch...'); }
//     sleep() { console.log('Sleeping...'); }
    
//     // These methods are not relevant for QA but must be implemented
//     code() { throw new Error('QA does not code'); }
//     deploy() { throw new Error('QA does not deploy'); }
//     manageMeetings() { throw new Error('QA does not manage meetings'); }
    
//     test() { console.log('Testing the application...'); }
// }

interface BasicWorker {
    work(): void;
    eat(): void;
    sleep(): void;
}

interface Coding {
    code(): void;
}

interface Testing {
    test(): void;
}

interface Deployment {
    deploy(): void;
}

interface Managing {
    manageMeetings(): void;
}

class QAEngineer implements BasicWorker, Testing {
    work() { console.log('Working...'); }
    eat() { console.log('Eating lunch...'); }
    sleep() { console.log('Sleeping...'); }
    
    test() { console.log('Testing the application...'); }
}
