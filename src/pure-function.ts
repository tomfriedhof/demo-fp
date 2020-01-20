const request = require('request-promise-native');

export class Calculator {
  private state: number;
  private result: number;

  output(): number {
    return this.result || 0;
  }

  addPure(a: number, b: number): number {
    return a + b;
  }

  addImpure (a:number, b:number): number {
    return this.state + a + b;
  }

  setState(a:number) {
    this.state = a;
  }

  async getRandomNumber() {
    const randomNumber = await request('http://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new');
    this.state = +randomNumber;
  }

}
