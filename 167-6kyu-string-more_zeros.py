def filter_binaries(val):
    zero_counter=0
    while val >0:
        if val & 1:
            zero_counter -= 1
        else:
            zero_counter += 1
        val >>= 1
    return zero_counter>0

def more_zeros(s):
    temp =[]
    for c in s:
        if c not in temp and filter_binaries(ord(c)):
            temp.append(c)
    return temp

print(more_zeros('abcde'), ['a', 'b', 'd'])
print(more_zeros('thequickbrownfoxjumpsoverthelazydog'), ['h', 'b', 'p', 'a', 'd'])
print(more_zeros('THEQUICKBROWNFOXJUMPSOVERTHELAZYDOG'), ['T', 'H', 'E', 'Q', 'I', 'C', 'B', 'R', 'F', 'X', 'J', 'P', 'L', 'A', 'D'])
print(more_zeros('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_'), ['a', 'b', 'd', 'h', 'p', 'A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'L', 'P', 'Q', 'R', 'T', 'X', '0'])
print(more_zeros('DIGEST'), ['D', 'I', 'E', 'T'])
