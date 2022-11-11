// https://www.agent-grow.com/self20percent/2019/03/25/only-express-and-jest-testing/

const { Get } = require('../root')
 
test('status 200 with id', () => {
  const req = {
    query: {
      id: 'ezak'
    }
  }
 
  const res = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn().mockReturnThis()
  }
 
  Get(req, res)
 
  expect(res.status.mock.calls[0][0]).toBe(200)
})