const parseArgs = () => {

    const argPrefix = '--';
    const result = [];

    for (let i = 0; i < process.argv.length; i++ ){
        const item = process.argv[i];
        if (item.startsWith(argPrefix) && process.argv[i+1]){
                result.push(`${item} is ${process.argv[i+1]} `)
                i++;
            } 
        }
    console.log(result.join())
};

parseArgs();