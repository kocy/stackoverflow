var shell = require('shelljs');

// Run external tool synchronously
var cmd = 'node --version';
var task = shell.exec(cmd);

if (task.code !== 0) {
    shell.echo("execute command: '" + cmd + "' fail: " + task.stdout);
    shell.exit(1);
}