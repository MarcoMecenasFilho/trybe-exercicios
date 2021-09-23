const uppercase = require('../src/upperCase')

it('uppercase "dormir" to "DORMIR"', (done) => {
  uppercase('dormir', (str) => {
    try {
      expect(str).toBe('DORMIR');
      done();
    } catch (error) {
      done(error);
    }
  });
});