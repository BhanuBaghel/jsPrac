function printName(first, last) {
    if (last) {
        console.log(first, last);
    } else {
        console.log(first);
    }
    console.log("running");
    return (first + " " + last);
}