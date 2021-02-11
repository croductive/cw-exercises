import re
def to_camel_case(text):
    if not text:
        return text
    words = ''.join([x.title() for x in re.split(r'[_-]', text)])
    
    if not (text[0].isupper()):
        new_string = words[0].lower()+words[1:]
        return new_string
    return words

print(to_camel_case('')) #, '', "An empty string was provided but not returned")
print(to_camel_case("the_stealth_warrior")) #, "theStealthWarrior", "to_camel_case('the_stealth_warrior') did not return correct value")
print(to_camel_case("The-Stealth-Warrior")) #, "TheStealthWarrior", "to_camel_case('The-Stealth-Warrior') did not return correct value")
print(to_camel_case("A-B-C"))#, "ABC", "to_camel_case('A-B-C') did not return correct value")
