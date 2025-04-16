def solution(S):
    # replace words with their corresponding numbers --> converting words to digits
    S = S.replace("one", "1").replace("two", "2")

    total = 0
    num = ''
    sign = '+' # stores the last operator seen. it starts as '+' to correctly handle the first number

    for char in S:
        if char.isdigit(): # if true: if the char is a digit it gets added to num
            num += char
            #print(num)
        else:
            if num: #if the char is not a digit then it is an operator
                total += int(num) if sign == '+' else -int(num)
                #print(total)
                num = '' # need to reset num to prepare for the next one, otherwise digits just keep stacking up into something totally incorrect like "121" or "2112"; P.S. took a while to debug this!!
                #print(num)
            sign = char #remembering the operator

    # handle the last number
    if num:
        total += int(num) if sign == '+' else -int(num)


    return total