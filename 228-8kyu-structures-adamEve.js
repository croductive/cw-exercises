class God {
  /**
   * @returns Human[]
   */
  static create() {
    // code
    const Adam = new Man();
    const Eve = new Woman();
    return [Adam, Eve];
  }
}
// code

class Human {
  constructor() {}
}

class Man extends Human {
  constructor() {
    super();
  }
}

class Woman extends Human {
  constructor() {
    super();
  }
}

let humans = God.create();
console.log(humans[0] instanceof Man, true, "Expected Adam to be a Man");
