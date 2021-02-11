def wave(str):
    new_array=[]
    for i in range(len(str)):
        if str[i] == " ": continue
        new_array.append(str[:i]+ str[i].upper()+ str[i+1:])
    return new_array

