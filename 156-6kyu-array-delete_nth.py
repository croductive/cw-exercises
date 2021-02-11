def delete_nth(order,max_e):
    new_list = []
    counts = {}
    for element in order:
        if element not in counts.keys():
            counts[element] = 1
        else:
            counts[element]+=1
        if counts[element]<= max_e:
            new_list.append(element)
    
    return new_list

print(delete_nth([20,37,20,21], 1), [20,37,21])
print(delete_nth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])
