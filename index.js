function letterCount(s) {
    let arr = s.split("").sort()
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1
        } else obj[arr[i]] += 1
    }
    return obj
}