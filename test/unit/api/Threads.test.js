module.exports = function (container, assert, sinon) {
  return function () {
    var threads;
    var Threads;
    var config;
    var options;
    var cb;
    var executeApiMethod;

    beforeEach(function () {
      config = {
        api_secret: '1234'
      };
      options = {
        stuff: 'stuff'
      };
      cb = function () {
      };

      executeApiMethod = sinon.spy();

      Threads = container.get('Threads', {
        util: {
          executeAPIMethod: executeApiMethod
        }
      });

      threads = new Threads(config);
    });

    describe('listPosts', function () {
      it('should call util.executeApiMethod with the correct arguments', function () {
        threads.listPosts(options, cb);
        assert.isTrue(executeApiMethod.calledWithExactly({
          resource: 'threads',
          name: 'listThreads',
          method: 'GET',
          requiredOptions: ['api_secret', 'thread'],
          availableOptions: ['cursor', 'since_id', 'limit', 'order']
        }, options, config, cb), 'util.executeApiMethod should have been called with the correct arguments');
      });
    });

  };
};
