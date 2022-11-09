const { Type, conn } = require('../../src/db.js');

xdescribe('Type model', () => {
  beforeAll(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Validators', () => {
    beforeEach(() => Type.sync({ force: true }));

    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Type.create({})
          .then(() => done())
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Type.create({ name: 'fire' });
      });
    });
  });
});
