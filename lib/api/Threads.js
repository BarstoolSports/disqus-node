/**
 * [Up one level](/lib/index.html)
 * ### Threads API
 * See the disqus-node [Topics CLI](/lib/cli/threads.html).
 *
 * See the [Threads API on Disqus.com](https://disqus.com/api/docs/threads/).
 */
var methods = {
  details: {
    resource: 'threads',
    name: 'details',
    method: 'GET',
    requiredOptions: ['api_secret'],
    availableOptions: ['thread', 'thread:ident', 'forum', 'related', 'attach']
  },
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
     * ### details
     * Returns thread details.
     *
     * Signature:
     * ```js
     * Disqus#threads.details(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.threads.details({
     *     thread: '', // required
     *     // or both of the following values
     *     'thread:ident': '', // required
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     related: [],
     *     attach: []
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.threads.listPosts({
     *     thread: '', // required
     *     // or both of the following values
     *     'thread:ident': '', // required
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     related: [],
     *     attach: []
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.details = function (options, cb) {
      return util.executeAPIMethod(methods.listPosts, options, config, cb);
    };

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
     * disqus.threads.details({
     *     thread: '', // required
     *     // or both of the following values
     *     'thread:ident': '', // required
     *     forum: '', // required
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
     *     // or both of the following values
     *     'thread:ident': '', // required
     *     forum: '', // required
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
