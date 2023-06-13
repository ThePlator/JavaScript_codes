//Log number
console.log(100);

// Log String
console.log("sameer ");

// Log multiple value 
console.log(10, 'sameer', true);

// Log with variable 
let x =10;
console.log(x+10);

//cosole error and warning 
console.error('Alert');
console.warn('warning');

//Log object as table 
console.table({name: 'sameer', resistration_number:'22103131002'});

// Group console command 
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

//add CSS to log
const style = 'padding: 10px;background-color: white; color: green; boder-radius: 50px';
console.log('%c Hello world ', style);