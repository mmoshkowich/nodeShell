// create an output

const importPWD = require('./pwd.js');
process.stdout.write('prompt > ');

//stdin === data event fires after user types a line



process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    
    if (cmd === 'pwd'){
        importPWD();
    }
    else
    {process.stdout.write('you typed ' + cmd);
    process.stdout.write('\nprompt > ')}
})