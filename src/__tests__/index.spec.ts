import greeting from "../index"

describe('Greeting function', () => {
  it('returns hello world', () => {
    expect(greeting.sayHello()).toBe("Hello World!")
  })
})
