'use strict';

const mock = require('egg-mock');

describe('test/probe.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/probe-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, probe')
      .expect(200);
  });
});
