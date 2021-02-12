def cyclops (n):
    bn = bin(n)
    bn = bn[2:]
    bn = bn.split('0')
    
    if len(bn)==2 and bn[0]==bn[1]:
        return True
    return False
    
    

print(cyclops(1), False)
print(cyclops(5), True)
print(cyclops(3), False)
print(cyclops(11), False)
print(cyclops(13), False)
print(cyclops(23), False)
print(cyclops(27), True)
