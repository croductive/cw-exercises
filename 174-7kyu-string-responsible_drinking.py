def hydrate(drink_string):
    # your code here
    total = sum([int(c) for c in drink_string if c.isdigit()])
    word = 'glasses' if total > 1 else 'glass'
    return f'{total} {word} of water'


print(hydrate("1 beer"), "1 glass of water")
print(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"),
      "10 glasses of water")
