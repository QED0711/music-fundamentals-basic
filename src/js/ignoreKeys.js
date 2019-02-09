
// a default list of keys in the score objects to ignore when comparing assignment and answer scores

let ignoreKeys = {};

// add new keys as strings to this list below. ignoreKeys object automatically generated
let keyList = [
    "cx1",
    "cx2",
    "cy1",
    "cy2",
    "ascent",
    "direction",
    "dx",
    "dy",
    "endx",
    "endx",
]

for(let key of keyList){
    ignoreKeys[key] = true;
};

export default ignoreKeys;

