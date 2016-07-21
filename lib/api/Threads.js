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
  },
  create: {
    resource: 'threads',
    name: 'create',
    method: 'POST',
    requiredOptions: ['api_secret', 'forum', 'title'],
    availableOptions: ['category', 'url', 'date', 'message', 'identifier', 'slug', 'access_token']
  },
  remove: {
    resource: 'threads',
    name: 'remove',
    method: 'POST',
    requiredOptions: ['thread'],
    availableOptions: ['thread:ident', 'forum', 'access_token']
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
     * disqus.threads.details({
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
      return util.executeAPIMethod(methods.details, options, config, cb);
    };

    /**
     * ### listPosts
     * Returns a list of posts within a thread.
     *
     * Signature:
     * ```js
     * Disqus#threads.listPosts(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
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

    /**
     * ### create
     * Creates a new thread.
     *
     * Signature:
     * ```js
     * Disqus#threads.create(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.threads.create({
     *     title: '', // required
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     category: null,
     *     url: null,
     *     date: null,
     *     message: null,
     *     identifier: null,
     *     slug: null
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.threads.create({
     *     title: '', // required
     *     forum: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     category: null,
     *     url: null,
     *     date: null,
     *     message: null,
     *     identifier: null,
     *     slug: null
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.create = function (options, cb) {
     console.log('Options: ', options);
     return util.executeAPIMethod(methods.create, options, config, cb);
    };

    /**
     * ### remove
     * Removes a thread.
     *
     * Signature:
     * ```js
     * Disqus#threads.remove(options[, cb])
     * ```
     *
     * Usage:
     * ```js
     * // Node-style
     * disqus.threads.remove({
     *     thread: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     forum: '' // required
     * }, function (err, result) {...})
     *
     * // Promise-style
     * disqus.threads.remove({
     *     thread: '', // required
     *     api_secret: 'asdfghkj', // required, can be set globally
     *     // optional, defaults shown
     *     forum: '' // required
     * })
     * .then(function (result) {...})
     * .catch(function (err) {...})
     * .error(function (err) {...});
     * ```
     */
    this.remove = function (options, cb) {
     return util.executeAPIMethod(methods.remove, options, config, cb);
    };

  };
};
