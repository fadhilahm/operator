function compute(operation) {
  let op1 = operation.operand1;
  let op2 = operation.operand2;
  if (typeof op1 === "object") {
    op1 = compute(op1);
  }
  if (typeof op2 === "object") {
    op2 = compute(op2);
  }
  switch (operation.op) {
    case "+":
      return op1 + op2;
    case "*":
      return op1 * op2;
  }
}

let test = {
  operand1: 1,
  op: "+",
  operand2: 2
};

let test1 = {
  operand1: {
    operand1: 1,
    op: "+",
    operand2: 2
  },
  op: "+",
  operand2: 2
};

let test2 = {
  operand1: {
    operand1: 1,
    op: "+",
    operand2: 2
  },
  op: "+",
  operand2: {
    operand1: 1,
    op: "+",
    operand2: 4
  }
};

let test3 = {
    operand1: {
      operand1: 10,
      op: "*",
      operand2: 2
    },
    op: "+",
    operand2: {
      operand1: 1,
      op: "+",
      operand2: 4
    }
  };

// driver code
console.log(compute(test)); // 3
console.log(compute(test1)); // 5
console.log(compute(test2)); // 8
console.log(compute(test3)); //25

// 37:00