import React from 'react';
import './App.css';

// 1. Base Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name}.`;
  }
}

// 2. Student Subclass (Inheritance)
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  // Method Overriding
  greet() {
    return `Hello, my name is ${this.name} and I'm studying ${this.major}.`;
  }
}

// 3. Teacher Subclass (Inheritance)
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  // Method Overriding
  greet() {
    return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
  }
}

function App() {
  // Creating instances (Polymorphism in action)
  const people = [
    new Person("Alex Johnson", 30),
    new Student("Emma Watson", 20, "Computer Science"),
    new Teacher("Dr. James Wilson", 45, "Mathematics")
  ];

  return (
    <div className="container">
      <h1>Person Class Hierarchy</h1>
      {people.map((p, index) => (
        <div key={index} className="card">
          <h2>{p.name} ({p.constructor.name})</h2>
          <p className="age">Age: {p.age}</p>
          <p className="greeting"><em>{p.greet()}</em></p>
          {p.major && <p><strong>Major:</strong> {p.major}</p>}
          {p.subject && <p><strong>Teaching:</strong> {p.subject}</p>}
        </div>
      ))}
    </div>
  );
}

export default App;