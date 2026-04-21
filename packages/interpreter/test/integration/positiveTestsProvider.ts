export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      hi boss
      bye boss
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      hi boss
      bye boss
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      hi boss
      ;
      bye boss
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      hi boss
      ;
      ;
      ;;
      bye boss
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      hi boss
      {};
      bye boss
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      hi boss
      {
        boss ye hai a = 4;
      }
      bye boss
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      hi boss
      boss ye hai a, b, c;
      bye boss
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      hi boss
      boss ye hai a = 10, b = "crap";
      bye boss
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      hi boss
      boss ye hai a = 10, b = 5;
      bye boss
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      hi boss
      boss ye hai a = 7 + 90;
      bye boss
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      hi boss
      boss ye hai a = sahi;
      a = 4;
      bye boss
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      hi boss
      boss ye hai a = 2;
      a *= 4;
      bye boss
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      hi boss
      boss ye hai a = 2;
      (a + 4);
      bye boss
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      hi boss
      boss ye hai a = 2;
      (a + 4) * 10 + (5 - 4);
      bye boss
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      hi boss
      boss ye hai a = 2;
      (a * (4 + 8) + 10);
      bye boss
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    hi boss
    boss ye hai x = 9;
    agar boss (x != 9) {
      x = 5;
      bol boss x;
    } warna boss (x >= 9);
    bye boss;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      hi boss;
      boss ye hai a , b;
      a = b = 60;
      bol boss a, b;
      bye boss
    `,
    output: "60 60",
  },
  {
    name: `binaryExpression print test with nalla and "==", should success`,
    input: `
      hi boss;
      boss ye hai a;
      agar boss (a == nalla) {
        bol boss a;
      }
      bye boss
    `,
    output: "nalla",
  },
  {
    name: `binaryExpression print test with nalla without any operator, should success`,
    input: `
      hi boss;
      boss ye hai a;
      agar boss (a) {
        bol boss a;
      } warna boss {
        bol boss "not nalla";
      }
      bye boss
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test - comparing nalla with nalla "==", should success`,
    input: `
      hi boss;
      agar boss (nalla == nalla) {
        bol boss "hai nalla";
      }
      bye boss
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a", should success`,
    input: `
      hi boss;
      boss ye hai a;
      agar boss (nalla == a) {
        bol boss "hai nalla";
      }
      bye boss
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a" explicit initialization, should success`,
    input: `
      hi boss;
      boss ye hai a = nalla;
      agar boss (nalla == a) {
        bol boss "hai nalla";
      }
      bye boss
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      hi boss;
      boss ye hai a = nalla;
      agar boss ("nalla" == a) {
        bol boss "hai nalla";
      } warna boss {
        bol boss "not nalla";
      }
      bye boss
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      hi boss;
      boss ye hai a = "nalla";
      agar boss (nalla == a) {
        bol boss "hai nalla";
      } warna boss {
        bol boss "not nalla";
      }
      bye boss
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string null, should success`,
    input: `
      hi boss;
      boss ye hai a = "null";
      agar boss (nalla == a) {
        bol boss "hai nalla";
      } warna boss {
        bol boss "not nalla";
      }
      bye boss
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 0, should success`,
    input: `
      hi boss;
      boss ye hai a;
      boss ye hai b;
      agar boss (a == b) {
        bol boss "hai nalla";
      } warna boss {
        bol boss "nahi nalla";
      }
      bye boss
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 1, should success`,
    input: `
      hi boss;
      boss ye hai a;
      boss ye hai b = nalla;
      agar boss (a == b) {
        bol boss "hai nalla";
      } warna boss {
        bol boss "nahi nalla";
      }
      bye boss
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" -2, should success`,
    input: `
      hi boss;
      boss ye hai a;
      boss ye hai b = "nalla";
      agar boss (a == b) {
        bol boss "hai nalla";
      } warna boss {
        bol boss "nahi nalla";
      }
      bye boss
    `,
    output: "nahi nalla",
  },
  // Boolean test
  {
    name: `binaryExpression print test with boolean expression - sahi, should success`,
    input: `
      hi boss;
      boss ye hai a = sahi;
      agar boss (sahi == a) {
        bol boss "hai sahi";
      } warna boss {
        bol boss "nahi sahi";
      }
      bye boss
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat, should success`,
    input: `
      hi boss;
      boss ye hai a = galat;
      agar boss (galat == a) {
        bol boss "hai galat";
      } warna boss {
        bol boss "nahi galat";
      }
      bye boss
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi with string sahi, should success`,
    input: `
      hi boss;
      boss ye hai a = "sahi";
      agar boss (sahi == a) {
        bol boss "hai sahi";
      } warna boss {
        bol boss "nahi sahi";
      }
      bye boss
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression, should success`,
    input: `
      hi boss;
      boss ye hai a = 7;
      agar boss (sahi == (a > 5)) {
        bol boss "hai sahi";
      } warna boss {
        bol boss "nahi sahi";
      }
      bye boss
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & string "sahi", should success`,
    input: `
      hi boss;
      boss ye hai a = 7;
      agar boss ("sahi" == (a > 5)) {
        bol boss "hai sahi";
      } warna boss {
        bol boss "nahi sahi";
      }
      bye boss
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & two expressions, should success`,
    input: `
      hi boss;
      boss ye hai a = sahi;
      agar boss ("sahi" == (a == sahi)) {
        bol boss "hai sahi";
      } warna boss {
        bol boss "nahi sahi";
      }
      bye boss
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression -3, should success`,
    input: `
      hi boss;
      boss ye hai a = sahi;
      agar boss ((a == sahi) == (a == sahi)) {
        bol boss "hai sahi";
      } warna boss {
        bol boss "nahi sahi";
      }
      bye boss
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 4, should success`,
    input: `
      hi boss;
      boss ye hai a;
      agar boss ((a == nalla) == (a == sahi)) {
        bol boss "hai sahi";
      } warna boss {
        bol boss "nahi sahi";
      }
      bye boss
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      hi boss;
      boss ye hai a;
      agar boss ((a == nalla) == (a == sahi)) {
        bol boss "hai sahi";
      } warna boss {
        bol boss "nahi sahi";
      }
      bye boss
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      hi boss;
      boss ye hai a;
      boss ye hai b = galat;
      agar boss (a == b) {
        bol boss "hai sahi";
      } warna boss {
        bol boss "nahi sahi";
      }
      bye boss
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison, should success`,
    input: `
      hi boss;
      boss ye hai a = galat;
      boss ye hai b = galat;
      agar boss (a == b) {
        bol boss "hai galat";
      } warna boss {
        bol boss "nahi galat";
      }
      bye boss
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison with string galat, should success`,
    input: `
      hi boss;
      boss ye hai a = "galat";
      boss ye hai b = galat;
      agar boss (a == b) {
        bol boss "hai galat";
      } warna boss {
        bol boss "nahi galat";
      }
      bye boss
    `,
    output: "nahi galat",
  },
  {
    name: "float value addition with integer value test, should success",
    input: `
      hi boss
      boss ye hai a = 1.2, b = 2;
      bol boss a + b;
      bye boss
    `,
    output: "3.2"
  },
  {
    name: "float value addition with float value value test, should success",
    input: `
      hi boss
      boss ye hai a = 1.2, b = 2.3;
      bol boss a + b;
      bye boss
    `,
    output: "3.5"
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      hi boss;
      boss ye hai a = 2, b = 60;
      bol boss (a * (4 + 8) + 10), b;
      bye boss
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      hi boss;
      boss ye hai a = 2, b = 60;

      a = b + 3;
      bol boss a, b;
      bye boss
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      hi boss;
      bol boss "hello", sahi, galat;
      bye boss
    `,
    output: "hello sahi galat",
  },
  {
    name: "printStatement test with nalla, should success",
    input: `
      hi boss;
      bol boss nalla;
      bye boss;
    `,
    output: "nalla",
  },
  {
    name: "printStatement test with nalla as second parameter, should success",
    input: `
      hi boss;
      bol boss 10, nalla;
      bye boss;
    `,
    output: "10 nalla",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      hi boss;
      bol boss "hello" + "crap";
      bye boss;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including nalla, should success",
    input: `
      hi boss;
      boss ye hai a = 70;
      bol boss 6*5, nalla, "jamtara", a;
      bye boss;
    `,
    output: "30 nalla jamtara 70",
  },
  {
    name: "printStatement test with nalla variable, should success",
    input: `
      hi boss;
      boss ye hai a;
      bol boss a;
      bye boss;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      hi boss;
      bol boss "undefined";
      bye boss;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with nalla variable, should success`,
    input: `
      hi boss;
      boss ye hai a;
      bol boss a;
      bye boss;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with sahi variable, should success`,
    input: `
      hi boss;
      boss ye hai a = sahi;
      bol boss a;
      bye boss;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with galat variable, should success`,
    input: `
      hi boss;
      boss ye hai a = galat;
      bol boss a;
      bye boss;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      hi boss;
      boss ye hai a;
      bol boss a = 90;
      bye boss;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      hi boss;
      bol boss 9 && 10;
      bye boss;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi boss;
      bol boss 9 || 10;
      bye boss;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      hi boss;
      bol boss galat && sahi;
      bye boss;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    hi boss;
    boss ye hai a = sahi;
    bol boss a && galat;
    bye boss;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    hi boss;
    boss ye hai a = sahi;
    bol boss a && sahi;
    bye boss;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      hi boss;
      bol boss 9 == 10;
      bye boss;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      hi boss;
      bol boss 9 != 10;
      bye boss;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi boss;
      bol boss 9 || 10;
      bye boss;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      hi boss;
      bol boss galat || sahi;
      bye boss;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi galat and logical, should success`,
    input: `
      hi boss;
      bol boss sahi != 10;
      bye boss;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi and string "sahi", should success`,
    input: `
      hi boss;
      bol boss "sahi" == sahi;
      bye boss;
    `,
    output: "galat",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      hi boss;
      boss ye hai a = 0;
      jab tak boss (a < 1) {
        bol boss "boss";
        a += 1;
      }
      bye boss;
    `,
    output: "boss",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      hi boss;
      jab tak boss (sahi) 
        bas kar boss;
      bol boss "end";
      bye boss;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      hi boss;
      boss ye hai a = 0;
      jab tak boss (a < 2) {
        jab tak boss (sahi)
          bas kar boss;
        bol boss "hello";
        agar boss (sahi)
          bas kar boss;
      }
      bye boss;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      hi boss;
      boss ye hai a = 0;
      jab tak boss (a < 2) {
        bol boss "hello";
        agar boss (sahi)
          bas kar boss;
        bas kar boss;
        bas kar boss;
      }
      bye boss;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    hi boss
    agar boss (sahi) {
      bol boss "boss";
    }
    bye boss;
    `,
    output: "boss",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    hi boss
    agar boss (sahi) {
      bol boss "sahi";
    } warna boss {
      bol boss "galat";
    }
    bye boss;
    `,
    output: "sahi",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    hi boss
    boss ye hai x = 9;
    agar boss (x >= 9) {
      x = 5;
      bol boss x;
    } 
    bye boss;
    `,
    output: "5",
  },
  // else-if statement tests
  {
    name: `else-if statement success test - 1: if with one else-if, should success`,
    input: `
    hi boss
    agar boss (galat) {
      bol boss "galat";
    } nahi to boss (sahi) {
      bol boss "sahi";
    }
    bye boss;
    `,
    output: "sahi",
  },
  {
    name: `else-if statement success test - 2: if with multiple else-ifs, should success`,
    input: `
    hi boss
    boss ye hai x = 10;
    agar boss (x < 5) {
      bol boss "x < 5";
    } nahi to boss (x < 8) {
      bol boss "x < 8";
    } nahi to boss (x < 12) {
      bol boss "x < 12";
    } nahi to boss (x < 15) {
      bol boss "x < 15";
    }
    bye boss;
    `,
    output: "x < 12",
  },
  {
    name: `else-if statement success test - 3: nested if-else-if ladder, should success`,
    input: `
    hi boss
    boss ye hai a = 15;
    agar boss (a < 0) {
      bol boss "a < 0";
    } nahi to boss (a > 0) {
      agar boss (a < 10) {
        bol boss "a < 10";
      } nahi to boss (a < 20) {
        bol boss "a < 20";
      }
    }
    bye boss
    `,
    output: "a < 20",
  },
  {
    name: `else-if statement success test - 4: if-else-if ladder evaluating to else, should success`,
    input: `
    hi boss
    boss ye hai x = 15;
    agar boss (x < 5) {
      bol boss "x < 5";
    } nahi to boss (x < 8) {
      bol boss "x < 8";
    } nahi to boss (x < 12) {
      bol boss "x < 12";
    } warna boss {
      bol boss "x > 12";
    }
    bye boss;
    `,
    output: "x > 12",
  },
  // logical expression test
  {
    name: `logical "&&" test with sahi galat, should success`,
    input: `
        hi boss
        agar boss (sahi && galat) {
          bol boss "sahi";
        } warna boss {
          bol boss "galat";
        }
        bye boss;
      `,
    output: `galat`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        hi boss
        bol boss 90 % 9;
        bye boss;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi boss
        bol boss 27 % 5;
        bye boss;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi boss
        bol boss 5 % 20;
        bye boss;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      hi boss;
      boss ye hai a = 5;
      boss ye hai step = 0;
      jab tak boss (a > 0) {
        step += 1;
        agar boss (a % 2 != 0){
          a -= 2;
          agla dekh boss;
        }
        a -= 1;
      }
      bol boss step;
      bye boss;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      hi boss;
      boss ye hai a = 5;
      boss ye hai step = 0;
      jab tak boss (a > 0) {
        step += 1;
        agar boss (a % 2 == 0){
          a -= 2;
          agla dekh boss;
        }
        a -= 1;
        agla dekh boss;
        bol boss "oye oye oye.. yha tk nhi aana tha boss";
      }
      bol boss step;
      bye boss;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      hi boss;
      boss ye hai a = 10;
      boss ye hai step = 0;
      jab tak boss (a > 0) {
        agar boss (a % 2 == 0){
          a -= 3;
          agla dekh boss;
        }
        a -= 1;
        agar boss (step == 1) agla dekh boss
        step += 1;
      }
      bol boss step;
      bye boss;
    `,
    output: "1",
  },
];
