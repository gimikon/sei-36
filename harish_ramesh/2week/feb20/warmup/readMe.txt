Implement Ceasar/Shift cipher
Don't be scared, this one is much simpler. The cipher takes in a message and using a given key 'shifts' every character by that ammount.

Examples
When given key = 1 'a' will become 'b', because we shift it by one character in the alphabet. A string please help this is boring becomes qmfbtf ifmq uijt jt cpsjoh.

Bonus
Make cipher ignore special characters like .,/?! so remember to account for that. A string please help, this is boring becomes qmfbtf ifmq, uijt jt cpsjoh.

Hint
Don't read if you want some challenge Have a look at converting characters to ASCII numbers.

tips
-----
charCodeAt()
String.fromCharCode()  --- inbuilt javascript function is the key
Regex101.com - regular expressions - any word character
/\w/.test(string)