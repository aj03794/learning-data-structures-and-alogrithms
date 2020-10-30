const same = (arr1, arr2) => {
    const tracker = {}
    if (arr1.length !== arr2.length) {
        return false
    }
    arr1.forEach(el => {
        if (tracker[el * 2]) {
            tracker[el * 2]++
        } else {
            tracker[el * 2] = 1
        }
    })

    const tracker2 = {}
    arr2.forEach(el => {
        if (tracker2[el]) {
            tracker2[el]++
        } else {
            tracker2[el] = 1
        }
    })


    const match = true
    for (const [key, value] of Object.entries(tracker)) {
        if (!tracker2[key] || !tracker2[key] === value) {
            match = false
        }
    }
    return match
}

const res = same([1,2,3], [2, 4, 6])
console.log({ res })

const res2 = same([1,2,3], [1])
console.log({ res2 })

const res3 = same([1,1], [2])
console.log({ res3 })

module.exports = same