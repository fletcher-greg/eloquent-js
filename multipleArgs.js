console.log("hi", 'bye', 2)


function log(...args){
    args.map(arg => {
        process.stdout.write(`${arg} `)
    })
    process.stdout.write('\n')
}


log('hi', 'me')