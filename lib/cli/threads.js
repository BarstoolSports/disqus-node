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
 * ### listFollowers
 * Returns a list of posts within a thread.
 *
 * Output of `disqus threads listPosts --help`:
 * ```
 Usage: disqus threads listPosts [options]

 Options:

 -h, --help                 output usage information
 -c, --cursor [string]      Defaults to null.
 -H, --https [boolean]      Whether to use https. Defaults to true.
 -l, --limit [number]       Defaults to 25.
 -L, --logLevel [string]    Output log level. Choices: debug, info, notice, warning, error, critical, alert, emergency.
 -o, --order [string]       Defaults to "asc". Choices: asc, desc.
 -s, --since_id [string]    Defaults to null.
 -S, --api_secret <string>  Your application's api_secret.
 -t, --thread <string>       Looks up a thread by ID (slug).
 -t, --thread <string>       Looks up a thread by ID (slug).
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

module.exports = threads;

/*

Public: xWhOqTacPke17NLzt8L7Pp6V3z6fIpV45MAmeg9vX8lr7RNmioNIpTIW27o6FsKO
Secret: qioTQ1uq9NjQV5ESLvwEzIUItpwIMYkUT3SXc8PU5Sw6XEHox0QZ9C1DF9aa35VD

disqus threads listPosts -L debug -t 123 -S qioTQ1uq9NjQV5ESLvwEzIUItpwIMYkUT3SXc8PU5Sw6XEHox0QZ9C1DF9aa35VD
disqus threads listPosts -L debug -i my-identifier -f bobross -S qioTQ1uq9NjQV5ESLvwEzIUItpwIMYkUT3SXc8PU5Sw6XEHox0QZ9C1DF9aa35VD
disqus threads listPosts -L debug -i my-identifier -f bobross -S qioTQ1uq9NjQV5ESLvwEzIUItpwIMYkUT3SXc8PU5Sw6XEHox0QZ9C1DF9aa35VD

disqus threads listPosts -L debug -i wake-up-with-josh-donaldson-going-yard-in-colorado -f barstool -S qioTQ1uq9NjQV5ESLvwEzIUItpwIMYkUT3SXc8PU5Sw6XEHox0QZ9C1DF9aa35VD
disqus threads details -L debug -i wake-up-with-josh-donaldson-going-yard-in-colorado -f barstool -S qioTQ1uq9NjQV5ESLvwEzIUItpwIMYkUT3SXc8PU5Sw6XEHox0QZ9C1DF9aa35VD

disqus forums listThreads -S qioTQ1uq9NjQV5ESLvwEzIUItpwIMYkUT3SXc8PU5Sw6XEHox0QZ9C1DF9aa35VD -f barstoolsports

https://disqus.com/api/3.0/threads/listPosts.json?api_secret=qioTQ1uq9NjQV5ESLvwEzIUItpwIMYkUT3SXc8PU5Sw6XEHox0QZ9C1DF9aa35VD&thread:ident=my-identifier&forum=bobross&limit=25&order=asc

*/
