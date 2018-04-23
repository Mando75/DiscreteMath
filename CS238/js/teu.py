import math

def teu_loops(i):
    val = 1
    sum = 0
    ones = 0

    while val > 0:
        # print('started loop')
        if ones > 1:
            # print('ones greater than 1')
            return False
        if val % 10 == 1:
            ones += 1
            # print('ones:', ones)
        sum += val % 10
        # print(sum)
        val = math.floor(val / 10)
    if sum != 17:
        return False
    return True


counter = 0
for i in range(0, 1000000):
    if teu_loops(i):
        print('hello there')
        counter += 1

print( counter)
