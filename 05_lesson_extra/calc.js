"use strict"
let rpn = input => {
    console.log(input);
    const result = input.reduce((stack, elem) => {
        console.log(stack, elem);
        if (!Number.isNaN(+elem)) {
            stack.push(+elem);
            return stack;
        }
        
        let b = stack.pop();
        let a = stack.pop();
        if (elem === '+') stack.push(a+b);
        else if (elem === '*') stack.push(a * b);
        else if (elem === '/') stack.push(a / b);
        else if (elem === '-') stack.push(a - b);
    
        return stack;
    }, [])
    return (result.length === 1 && !Number.isNaN(result[0])) ? result.pop() : 'error';
}

// подсмотрел здесь (https://eddmann.com/posts/implementing-the-shunting-yard-algorithm-in-javascript/) и модифицировал
let yard = (infixArray) => {
    let ops = {'+': 1, '-': 1, '*': 2, '/': 2}; // операторы с приоритетами
    let peek = (a) => a[a.length - 1];
    let stack = [];
    
    console.log(infixArray);
    return infixArray
        .reduce((output, token) => {
            //Если токен — число, то добавить его в очередь вывода.
            if (!Number.isNaN(+token)) output.push(token);
    
            //Если токен — оператор op1, то:
            //Пока присутствует на вершине стека токен оператор op2, чей приоритет выше или равен приоритету op1:
            //переложить op2 из стека в выходную очередь;
            //Положить op1 в стек.
            if (token in ops) {
                while (peek(stack) in ops && ops[token] <= ops[peek(stack)]) {
                    output.push(stack.pop());
                }
                stack.push(token);
            }
    
            // Если токен — открывающая скобка, то положить его в стек
            if (token == '(') stack.push(token);
    
            // Если токен — закрывающая скобка:
            // Пока токен на вершине стека не является открывающей скобкой, перекладывать операторы из стека в выходную очередь.
            // Выкинуть открывающую скобку из стека, но не добавлять в очередь вывода.
            if (token == ')') {
                while (peek(stack) != '(') {
                    output.push(stack.pop());
                }
                stack.pop();
            }
    
            return output;
        }, [])
        .concat(stack.reverse());
};
