var text = "";
var total = 0;

for (var i = 0; i < 6; i++) {
    if (i == 3) {
        text = "finish";
        break;
    } else if(i == 5) {
        i++;
    }
    total += i;
}

console.log(text + " at the nubmer " + i + " with a total of " + total);