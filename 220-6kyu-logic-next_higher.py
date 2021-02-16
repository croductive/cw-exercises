def next_higher(value):
    bin_num1 = bin(value)
    num_ones1 = bin_num1.count('1')
    max = value * 2 + 1
    while value < max:
        value += 1
        bin_num2 = bin(value)
        num_ones2 = bin_num2.count('1')
        if num_ones1 == num_ones2:
            return value


print(next_higher(128), 256)
print(next_higher(1), 2)
print(next_higher(1022), 1279)
print(next_higher(127), 191)
print(next_higher(1253343), 1253359)
