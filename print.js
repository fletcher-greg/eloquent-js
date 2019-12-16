module.exports = (...args) => {
    args.map(arg => {
        process.stdout.write(`${arg} `)
    })
    process.stdout.write('\n')
}


