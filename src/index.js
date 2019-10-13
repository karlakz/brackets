module.exports = function check(str, bracketsConfig) {
    // Store all sets of brackets and their opposites
    let brackets = {
        '(':')',
        '{':'}',
        '[':']',
        '|':'|',
        '1':'2',
        '3':'4',
        '5':'6',
        '7':'7',
        '8':'8'
    }

    let inp = str;
    let stack = [];

    //Check every character in stack
    for (let i = 0; i < inp.length; i++) {
        if (brackets[stack[stack.length - 1]] == inp[i]) {
        stack.pop();
        } else {
        stack.push(inp[i]);
        }
    }

    return !stack.length;
}
