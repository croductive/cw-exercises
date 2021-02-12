def save(sizes, hd): 
    acc =0
    for i, item in enumerate(sizes):
        if acc + item > hd:
            return i
        acc += item
    return len(sizes)

console.log(save([4,4,4,3,3], 12), 3)
console.log(save([4,4,4,3,3], 11), 2)
console.log(save([4,8,15,16,23,42], 108), 6)
console.log(save([13], 13), 1)
console.log(save([1,2,3,4], 250), 4)
console.log(save([100], 500), 1)
console.log(save([11,13,15,17,19], 8), 0)
console.log(save([45], 12), 0)
