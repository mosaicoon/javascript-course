function print() {
    console.log(JSON.stringify(json, undefined, 2) + '\n');
}

//Execution

print();

getAllPlatforms();
print();

getTotalImpressions();
print();

getTotalClicks()
print();

getClicksMedia()
print();

addClicks("2018-03-15T00:00:00.000Z", 3256);
print();