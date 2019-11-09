const colors = require('colors');
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'cyan',
    debug: 'blue',
    error: 'red'
});
export const myConsole = (...args) => {
    console.log('### Start of my very cool console function ###'.cyan);
    console.log(args);
    console.log('### End  ###'.cyan);
};
