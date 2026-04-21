<h1 align="center">boss Lang</h1>
<p align="center">
<a href="https://lgtm.com/projects/g/DulLabs/boss-lang/alerts/"><img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/DulLabs/boss-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://lgtm.com/projects/g/DulLabs/boss-lang/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/DulLabs/boss-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://github.com/DulLabs/boss-lang/actions/workflows/node.js.yml/badge.svg"><img alt="Build" src="https://github.com/DulLabs/boss-lang/actions/workflows/node.js.yml/badge.svg"/></a>
<a href="https://bhailang.js.org/"><img alt="Build" src="https://img.shields.io/badge/website-bhailang.js.org-orange"/></a>
<a href="https://www.npmjs.com/package/bhailang"><img alt="Build" src="https://img.shields.io/badge/npm-bhailang-orange"/></a>
  
</p>
<p align="center">
  This is official repository for boss-lang.<br><br>
  <b>boss lang is a toy programming language written in Typescript.</b>
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g bhailang
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file (<code>test.boss</code>)</h4>


<h4 align="left">Edit the file with a text editor.
You can also try out your code on <a href="https://bhailang.js.org/#playground">boss Lang PlayGround</a></h4>

```
hi boss
  bol boss "Hello boss";
bye boss

```

<h4 align="left">Run</h4>

```
bhailang test.boss
```

<h4 align="left">Output</h4>

```
hello boss
```

<h2 align="center">Documentation</h2>

<h3 align="center">General</h3>
<p align="center"><code>hi boss</code> is the entrypoint for the program and all program must end with <code>bye boss</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

hi boss
// Write code here
bye boss

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>boss ye hai</code>.</p>

```

hi boss
  boss ye hai a = 10;
  boss ye hai b = "two";
  boss ye hai c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
bye boss
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>nalla</code>. <code>sahi</code> and <code>galat</code> are the boolean values.</p>

```

hi boss
  boss ye hai a = 10;
  boss ye hai b = 10 + (15*20);
  boss ye hai c = "two";
  boss ye hai d = 'ok';
  boss ye hai e = nalla;
  boss ye hai f = sahi;
  boss ye hai g = galat;
bye boss
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>bol boss</code> to print anything to console.</p>

```

hi boss
  bol boss "Hello World";
  boss ye hai a = 10;
  {
    boss ye hai b = 20;
    bol boss a + b;
  }
  bol boss 5, 'ok', nalla , sahi , galat;
bye boss
```

<h3 align="center">Conditionals</h3>
<p align="center">Bhailang supports if-else-if ladder construct , <code>agar boss</code> block will execute if condition is <code>sahi</code>, otherwise one of the subsequently added <code>nahi to boss</code> blocks will execute if their respective condition is <code>sahi</code>, and the <code>warna boss</code> block will eventually execute if all of the above conditions are <code>galat</code>

```

hi boss
  bhai ye hai a = 10;
  agar boss (a < 20) {
    bol boss "a is less than 20";
  } nahi to boss ( a < 25 ) {
    bol boss "a is less than 25";
  } warna boss {
    bol boss "a is greater than or equal to 25";
  }
bye boss
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>jab tak boss</code> blocks are executed as long as a specified condition evaluates to sahi. If the condition becomes <code>galat</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>bas kar boss</code> to break the loop and <code className="language-cpp">agla dekh boss</code> to continue within loop.</p>


```

hi boss
  bhai ye hai a = 0;
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
```

<h2 align="center">Development</h2>
<p align="center">You can explore abstract syntax tree(AST) of bhailang <a href="https://bhailang-ast.netlify.app/" target="_blank">here</a>.</p>









"# bosslang" 
"# bosslang" 
