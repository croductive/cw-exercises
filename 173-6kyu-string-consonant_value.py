import re

def solve(s):
    groups = re.split(r'[aeiou]+',s)
    total = 0
    for group in groups:
        temp = 0
        for c in group:
            temp += ord(c.lower()) - 96
        if temp > total:
            total = temp
    return total

print(solve("zodiac"),26)
print(solve("chruschtschov"),80)
print(solve("khrushchev"),38)
print(solve("strength"),57)
print(solve("catchphrase"),73)
print(solve("twelfthstreet"),103)
print(solve("mischtschenkoana"),80)
