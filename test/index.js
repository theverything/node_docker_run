var expect = require('chai').expect;
var dockerRun = require('../');

describe('docker_run', function () {
  it('docker run', function (done) {
    dockerRun('../example.json', function (err, file) {
      // expect(file.tty).to.equal(false);
      console.log(file);
      done();
    });
  });
});
