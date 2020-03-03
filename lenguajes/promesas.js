function asyncPromise() {
    return new Promise(
        (resolve, reject) => {
            setTimeout( () => {
                let n = Math.random()
                if (n < 0.7) {
                    resolve(`Acierto de valor ${n}`)
                } else {
                    reject(new Error(n))
                }
            }, 2000)
        }
    )
}

asyncPromise()
.then( (response) => {console.log(response)} )
.catch( (error) => {console.log('Error', error.message)})

