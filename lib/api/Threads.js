/**
 * [Up one level](/lib/index.html)
 * ### Topics API
 * See the disqus-node [Topics CLI](/lib/cli/topics.html).
 *
 * See the [Topics API on Disqus.com](https://disqus.com/api/docs/topics/).
 */
var methods = {
  listPosts: {
    resource: 'threads',
    name: 'listPosts',
    method: 'GET',
    requiredOptions: ['api_secret'],
    availableOptions: ['thread', 'thread:ident', 'forum', 'cursor', 'since_id', 'limit', 'order']
  }
};

module.exports = function (util) {
  return function Threads(config) {

    /**
     * ### listPosts
     * Returns a list of posts within a thread.
     *
     * Signature:
     * ```js
     * Disqus#topics.listPosts(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.threads.listPosts({
     *     thread: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     cursor: null,
     *     since_id: null,
     *     limit: 25,
     *     order: 'asc'
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.threads.listPosts({
     *     thread: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     cursor: null,
     *     since_id: null,
     *     limit: 25,
     *     order: 'asc'
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.listPosts = function (options, cb) {
      return util.executeAPIMethod(methods.listPosts, options, config, cb);
    };

  };
};
