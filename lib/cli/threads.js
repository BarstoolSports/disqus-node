/**
 * [Up one level](/lib/index.html)
 * ### Threads CLI
 * See the disqus-node [Threads API](/lib/api/threads.html).
 *
 * See the [Threads API on Disqus.com](https://disqus.com/api/docs/threads/).
 */
var container = require('../container');
var Command = container.get('commander').Command;
var threads = new Command('disqus threads');

threads
  .usage('<cmd> [options]');

/**
 * ### details
 * Returns thread details.
 *
 * Output of `disqus threads details --help`:
 * ```
 Usage: disqus threads details [options]

 Options:

 -h, --help                  output usage information
 -H, --https [boolean]       Whether to use https. Defaults to true.
 -L, --logLevel [string]     Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -r, --related [string]      Defaults to "[]". Choices: forum, author, category
 -a, --attach [string]       Defaults to "[]". Choices: topics
 -S, --api_secret <string>   Your application's api_secret.
 -t, --thread <string>       Looks up a thread by ID (slug).
 -i, --thread:ident <string> Looks up a thread by Identifier (slug).
 -f, --forum <string>        Looks up a forum by ID (aka short name).
 * ```
 */
threads
  .command('details')
  .description('Returns thread details.')
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-r, --related [string]', 'Defaults to "[]". Choices: forum, author, category', [])
  .option('-a, --attach [string]', 'Defaults to "[]". Choices: topics', [])
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-t, --thread <string>', 'Looks up a thread by ID.')
  .option('-i, --thread:ident [string]', 'Looks up a thread by Identifier (slug).', null)
  .option('-f, --forum [string]', 'Looks up a forum by ID (aka short name).', null)
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).threads.listPosts(options, container.get('util').printCliResult);
  });

/**
 * ### listPosts
 * Returns a list of posts within a thread.
 *
 * Output of `disqus threads listPosts --help`:
 * ```
 Usage: disqus threads listPosts [options]

 Options:

 -h, --help                  output usage information
 -c, --cursor [string]       Defaults to null.
 -H, --https [boolean]       Whether to use https. Defaults to true.
 -l, --limit [number]        Defaults to 25.
 -L, --logLevel [string]     Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]        Defaults to "asc". Choices: asc, desc.
 -s, --since_id [string]     Defaults to null.
 -S, --api_secret <string>   Your application's api_secret.
 -t, --thread <string>       Looks up a thread by ID (slug).
 -i, --thread:ident <string> Looks up a thread by Identifier (slug).
 -f, --forum <string>        Looks up a forum by ID (aka short name).
 * ```
 */
threads
  .command('listPosts')
  .description('Returns a list of posts within a thread.')
  .option('-c, --cursor [string]', 'Defaults to null.', null)
  .option('-H, --https [boolean]', 'Whether to use https. Defaults to true.', true)
  .option('-l, --limit [number]', 'Defaults to 25.', 25)
  .option('-L, --logLevel [string]', 'Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.', 'info')
  .option('-o, --order [string]', 'Defaults to "asc". Choices: asc, desc.', 'asc')
  .option('-s, --since_id [string]', 'Defaults to null.', null)
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-t, --thread <string>', 'Looks up a thread by ID.')
  .option('-i, --thread:ident [string]', 'Looks up a thread by Identifier (slug).', null)
  .option('-f, --forum [string]', 'Looks up a forum by ID (aka short name).', null)
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).threads.listPosts(options, container.get('util').printCliResult);
  });

/**
 * ### create
 * Creates a new thread.
 *
 * Output of `disqus threads create --help`:
 * ```
 Usage: disqus threads create [options]

 Options:

 -h, --help                  output usage information
 -S, --api_secret <string>   Your application's api_secret.
 -f, --forum <string>        Forum you are creating a thread in. (aka short name)
 -t, --title <string>        Title of the thread
 -c, --category <string>     Looks up a category by ID
 -u, --url <string>          Maximum length of 500
 -d, --date <string>         Unix timestamp
 -m, --message <string>      Unknown
 -i, --identifier <string>   Unknown
 -s, --slug <string>         Unknown
 * ```
 */

threads
  .command('create')
  .description('Returns a list of posts within a thread.')
  .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
  .option('-f, --forum [string]', 'Forum you are creating a thread in. (aka short name)', null)
  .option('-t, --title [boolean]', 'Title of the thread', null)
  .option('-c, --category [number]', 'Looks up a category by ID', null)
  .option('-u, --url [string]', 'Maximum length of 500', null)
  .option('-d, --date [string]', 'Unix timestamp', null)
  .option('-m, --message [string]', 'Unknown', null)
  .option('-i, --identifier [string]', 'Unknown', null)
  .option('-s, --slug [string]', 'Unknown', null)
  .action(function (options) {
    var Disqus = container.get('Disqus');
    new Disqus(options).threads.create(options, container.get('util').printCliResult);
  });

  /**
   * ### remove
   * Removes a new thread.
   *
   * Output of `disqus threads remove --help`:
   * ```
   Usage: disqus threads remove [options]

   Options:

   -h, --help                  output usage information
   -S, --api_secret <string>   Your application's api_secret.
   -t, --thread <string>        Looks up a thread by ID
   -f, --forum <string>        Forum you are creating a thread in. (aka short name)

   * ```
   */

  threads
    .command('remove')
    .description('Returns a list of posts within a thread.')
    .option('-S, --api_secret <string>', 'Your application\'s api_secret.')
    .option('-t, --thread <string>', 'Looks up a thread by ID', null)
    .option('-f, --forum <string>', 'Forum you are creating a thread in. (aka short name)', null)
    .action(function (options) {
      var Disqus = container.get('Disqus');
      new Disqus(options).threads.remove(options, container.get('util').printCliResult);
    });

module.exports = threads;
