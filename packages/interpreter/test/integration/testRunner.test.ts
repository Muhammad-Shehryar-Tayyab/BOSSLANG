import { RuntimeException } from "../../src";
import Interpreter from "../../src/components/interpreter";
import InterpreterModule from "../../src/module/interpreterModule";

import { NegativeTestCases } from "./negativeTestsProvider";
import {
  NoOutputPositiveTests,
  WithOutputPositiveTests
} from "./positiveTestsProvider";


let interpreter: Interpreter = InterpreterModule.getInterpreter();

console.log = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

NoOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();
  });
});

WithOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();

    expect(console.log).toHaveBeenCalledWith(testCase.output);
  });
});

NegativeTestCases.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).toThrowError(
      testCase.exception
    );
  });
});

test("test redeclaring & printing variables in different scopes", () => {
  expect(() =>
    interpreter.interpret(`hi boss;
    boss ye hai a = 4;
    {
      boss ye hai a = 90;
      bol boss a;
    }
    bol boss a;
    bye boss;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("test assigning variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`hi boss;
    boss ye hai a = 4;
    {
      a = 90;
      bol boss a;
    }
    bol boss a;
    bye boss;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("90");
});

test("test accessing variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`hi boss;
    boss ye hai a = 4;
    {
      bol boss a;
    }
    bol boss a;
    bye boss;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("whileStatement test with 2 times loop, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi boss;
    boss ye hai a = 0;
    jab tak boss (a < 2) {
      bol boss "boss";
      a += 1;
    }
    bye boss;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("boss");
  expect(console.log).toHaveBeenCalledWith("boss");
});

test("whileStatement test with nested loops - 2, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi boss;
    boss ye hai a = 0, b = 0;
    jab tak boss (a < 2) {
      jab tak boss (b < 1) {
        bol boss "boss";
        b += 1;
      }
      a += 1;
    }
    bye boss;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("boss");
});

test("whileStatement test with nested loops - 3, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi boss;
    boss ye hai a = 0;
    jab tak boss (a < 2) {
      boss ye hai b = 0;
      jab tak boss (b < 2) {
        bol boss "boss";
        b += 1;
        agar boss (b == 1)
          bas kar boss;
      }
      a += 1;
    }
    bye boss;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("boss");
  expect(console.log).toHaveBeenCalledWith("boss");
});


test("whileStatement test with nested loops - 4, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi boss
    boss ye hai a = 0;
    jab tak boss (a < 10) {
      bol boss a;
      a += 1;
      agar boss (a == 6) {
        bas kar boss;
      }
    }
    bol boss "done";
    bye boss
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 5, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi boss
    boss ye hai a = 0;
    jab tak boss (a < 10) {
      bol boss a;
      a += 1;
      agar boss (a == 6)
        bas kar boss;
    }
    bol boss "done";
    bye boss
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 6, should success", () => {
  expect(() =>
    interpreter.interpret(`
    hi boss
    boss ye hai a = 0;
    jab tak boss (a < 10) {
      bol boss a;
      a += 1;
      agar boss (a == 3) {
        bas kar boss;
      }
      bol boss "2 baar hi chapunga";
    }
    bol boss "done";
    bye boss
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
});

test("whileStatement test with infinite loop, should throw runtime exception after 5000 executions", () => {
  expect(() =>
    interpreter.interpret(`
    hi boss
    
    jab tak boss (sahi) {
      bol boss "boss";
    }
    bye boss;
    
    `)
  ).toThrowError(RuntimeException);

  expect(console.log).toHaveBeenCalledTimes(5001);
  expect(console.log).toHaveBeenCalledWith("boss");
});

test("if-else ladders one after the other, should be evaluated separately", () => {
  expect(() =>
    interpreter.interpret(`
    hi boss
    boss ye hai x = 6;
    agar boss (x < 5) {
      bol boss "x < 5";
    } nahi to boss (x < 8) {
      bol boss "x < 8";
    } agar boss (x < 4) {
      bol boss "x < 4";
    } warna boss {
      bol boss "x > 4";
    }
    bye boss;
    
    `)
  ).not.toThrowError();

  expect(console.log).toHaveBeenCalledWith("x < 8");
  expect(console.log).toHaveBeenCalledWith("x > 4");
});

// test("jest", () => {
//     interpreter.interpret(`
//     hi boss
//     boss ye hai a = 0;
//     jab tak boss (a < 10) {
//       bol boss a;
//       a += 1;
//       agar boss (a == 3) {
//         bas kar boss;
//       }
//       bol boss "2 baar hi chapunga";
//     }
//     bol boss "done";
//     bye boss
//     `);
// });

