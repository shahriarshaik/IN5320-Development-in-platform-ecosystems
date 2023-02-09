function sammenligningAvToTall() {
    let a = 4
    let b = 2

    if (a > b) {
        console.log("a er større enn b");
    }
    else{
        console.log("b er større enn a");
    }
}

function MinListe() {
    let minListe = [3, 132, 14]
    console.log(minListe[0]);
    let liste2 = []
    liste2.push("Hei")
    liste2.push("verden!")
    console.log(liste2);
}

function FaktaOmLand(land) {
    let hovedstad = {"Norge": "Oslo", "Nederland": "Amsterdam", "Spania": "Madrid"}
    let spraak = {"Norge": "Norsk", "Nederland": "Nederlandsk", "Spania": "Spansk"}
    let innbyggere = {"Norge": 5391369, "Nederland": 17282163, "Spania": 46733038}

    console.log(hovedstad[land]);
    console.log(spraak[land]);
    console.log(innbyggere[land]);
}

const onlyLongWords = sentence => {
    let splitta = sentence.split(' ')
    let bareLange = splitta.filter(x => x.length >= 3)
    return bareLange.join(' ')
    }

/*
console.log(onlyLongWords("If you give up what you want most for what you think you should want more, you'll end up miserable."));
console.log(onlyLongWords("Searching for something that cannot be found."));
console.log(onlyLongWords("For every Push, there is a Pull. A consequence."));
*/

const oddOrEven = x => {
    if(x % 2 === 0){
        return "even"
    }
    else{
        return "odd"
    }
}

/*
    console.log(oddOrEven(1));
    console.log(oddOrEven(154));
    console.log(oddOrEven(7));
    console.log(oddOrEven(0));
    console.log(oddOrEven(-1));
    console.log(oddOrEven(-4));
*/

const numToWord = x => {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    if (x >= 0 && x<= 10){
        return numbers[x].toString()
    }
    else{
        return x.toString()
    }
}
/*
    console.log(numToWord(0));
    console.log(numToWord(1));
    console.log(numToWord(2));
    console.log(numToWord(3));
    console.log(numToWord(4));
    console.log(numToWord(5));
    console.log(numToWord(6));
    console.log(numToWord(7));
    console.log(numToWord(8));
    console.log(numToWord(9));
    console.log(numToWord(10));
    console.log(numToWord(-1));
    console.log(numToWord(123));
*/


const translateSentence = sentence => {
    return sentence
    }

    /*
console.log(translateSentence("the oak fought the wind and was broken, the willow bent when it must and survived."));
console.log(translateSentence("life is a dream from which we all must wake before we can dream again."));
console.log(translateSentence("at my age, if i make it up, it's still an old saying."));
*/

const factorial = n => {
    m = 1
    for(let i = n; i >= 1; i--){
        m = m * i
        //console.log(i);
    }
    return m
}

//console.log(factorial(1));
//console.log(factorial(2));
//console.log(factorial(3));
//console.log(factorial(4));
//console.log(factorial(10));

//factorial(1)
//factorial(2)
//factorial(3)
//factorial(4)
//factorial(10)


const slowMultiplication = (x, y) => {
    return new Promise((resolve, reject) => {
        resolve(x * y)
    })
    }
    
    const returnedPromise = slowMultiplication(2, 3)
    console.log(`linje 128: ${returnedPromise}`);
    returnedPromise.then(result => {console.log(`result = ${result}`)})
    
    console.log("Hi there")


const getPicture_async = async userName => {
    const id = await userApi.getId(userName)
    const imageServer = await serverApi.getServer(id)
    const picture = await imageApi.getPicture(imageServer, id)
    return picture
    }

const getPicture_promise = userName => {
    return new Promise((resolve, reject) => {
        useApi.getId(userName)
        .then(id => serverApi.getServer(id))
        .then(imageServer => imageApi.getPicture(imageServer, id))
    })
    }



