import Snippet from "./Snippet";


/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "General",
    description: (
      <>
        <code className="language-cpp">hi boss</code> is the entrypoint for the
        program and all program must end with{" "}
        <code className="language-cpp">bye boss</code>. Anything outside of it
        will be ignored.
      </>
    ),
    code: `This will be ignored

hi boss
  // Write code here
bye boss

This too
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables can be declared using{" "}
        <code className="language-cpp">boss ye hai</code>.
      </>
    ),
    code: `hi boss
    boss ye hai a = 10;
    boss ye hai b = "two";
    boss ye hai c = 15;
    a = a + 1;
    b = 21;
    c *= 2;
bye boss
    `,
  },
  {
    name: "Types",
    description: (
      <>
        Numbers and strings are like other languages. Null values can be denoted
        using <code className="language-cpp">nalla</code>.{" "}
        <code className="language-cpp">sahi</code> and{" "}
        <code className="language-cpp">galat</code> are the boolean values.
      </>
    ),
    code: `hi boss
    boss ye hai a = 10;
    boss ye hai b = 10 + (15*20);
    boss ye hai c = "two";
    boss ye hai d = 'ok';
    boss ye hai e = nalla;
    boss ye hai f = sahi;
    boss ye hai g = galat;
bye boss
    `,
  },
  {
    name: "Built-ins",
    description: (
      <>
        Use <code className="language-cpp">bol boss</code> to print anything to
        console.
      </>
    ),
    code: `hi boss
    bol boss "Hello World";
    boss ye hai a = 10;
    {
       boss ye hai b = 20;
       bol boss a + b;
    }
    bol boss 5, 'ok', nalla , sahi , galat;
bye boss
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        BOSSLANG supports if-else-if ladder construct , <code className="language-cpp">agar boss</code> block will execute if condition is <code className="language-cpp">sahi</code>, otherwise one of the subsequently added <code className="language-cpp">nahi to boss</code> blocks will execute if their respective condition is <code className="language-cpp">sahi</code>, and the <code className="language-cpp">warna boss</code> block will eventually execute if all of the above conditions are <code className="language-cpp">galat</code>.
      </>
    ),
    code: `hi boss
    boss ye hai a = 10;
    agar boss (a < 20) {
      bol boss "a is less than 20";
    } nahi to boss ( a < 25 ) {
      bol boss "a is less than 25";
    } warna boss {
      bol boss "a is greater than or equal to 25";
    }
bye boss
    `
  },
  {
    name: "Loops",
    description: (
      <>
        Statements inside <code className="language-cpp">jab tak boss</code> blocks are executed as long as a specified condition evaluates to <code className="language-cpp">sahi</code>. If the condition becomes <code className="language-cpp">galat</code>, statement within the loop stops executing and control passes to the statement following the loop. 
        Use <code className="language-cpp">bas kar boss</code> to break the loop and <code className="language-cpp">agla dekh boss</code> to continue within loop.
      </>
    ),
    code: `hi boss
    boss ye hai a = 0;
    jab tak boss (a < 10) {
      a += 1;
      agar boss (a == 5) {
        bol boss "andar se bol boss ", a;
        agla dekh boss;
      }
      agar boss (a == 6) {
        bas kar boss;
      }
      bol boss a;
    }
    bol boss "done";
bye boss
    `
  }

];

export default function Documentation() {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Documentation
          </h2>
          <p className="mt-4 text-gray-300">
            BOSSLANG is dynamically typed toy programming language, based on an
            inside joke, written in Typescript.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <div className="font-medium text-gray-300">{feature.name}</div>
                <div className="mt-2 text-sm text-gray-200">
                  {feature.description}
                </div>
                <Snippet code={feature.code} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

