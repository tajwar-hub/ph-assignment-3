function countHashtags(caption) {
    if (typeof caption !== "string") {
        return "Invalid";
    }

    const words = caption.split(" ");
    let hashCount = 0;
    let longTag = "";

    for (let i = 0; i < words.length; i++) {

        let currentWord = words[i];
        if (currentWord.startsWith("#")) {
            hashCount++;

            let textWithoutHash = currentWord.slice(1);
            if (textWithoutHash.length > longTag.length) {
                longTag = textWithoutHash;
            }
        }
    }

    return { hashtagCount: hashCount, longestTag: longTag };
}


// let captions = "I am Rhythm"
// const word = captions.split(" ");
// console.log(word)

// const text = "apple,banana,mango";
// const result = text.split(",");
// console.log(result);