def find_screen_height(width, ratio): 
    # your code here
    r = ratio.split(':')
    height = int(width / int(r[0])*int(r[1]))
    return f'{width}x{height}'

print(find_screen_height(1024, "4:3"), "1024x768")
print(find_screen_height(1280, "16:9"), "1280x720")
print(find_screen_height(3840, "32:9"), "3840x1080")
