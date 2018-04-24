
module.exports = function PWD () {
        const pwdString = process.cwd();
        process.stdout.write(pwdString);
        process.stdout.write('\nprompt > ')
        
    }
    

