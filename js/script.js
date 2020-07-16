function binaryEncode() {
  var string = document.getElementById("inputText").value;
  var encodedString = "";
  for (var i = 0; i < string.length; i++) {
    var res = string.charCodeAt(i);
    encodedString = encodedString + parseInt(res, 10).toString(2) + " ";
  }
  console.log(encodedString);
  document.getElementById("outputText").value = encodedString;
}

function binaryDecode() {
  var binary = document.getElementById("inputDecodeText").value;
  var decodedString = binary
    .split(" ") //Split string in array of binary chars
    .map((bin) => String.fromCharCode(parseInt(bin, 2))) //Map every binary char to real char
    .join(""); //Join the array back to a string

  console.log(decodedString);
  document.getElementById("outputDecodeText").value = decodedString;
}

function morseEncoder() {
  var text = document.getElementById("inputText").value;
  var morseText = "";
  var converter = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    _: "..--.-",
    '"': ".-..-.",
    $: "...-..-",
    "@": ".--.-.",
    " ": " ",
  };
  for (var i = 0; i < text.length; i++) {
    morseText += converter[text.charAt(i).toLowerCase()] + " ";
  }
  console.log(morseText);
  document.getElementById("outputText").value = morseText;
}

function morseDecoder() {
  var morsetext = document.getElementById("inputDecodeText").value;
  var decodedText = "";
  var alpha = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-.-.-": ".",
    "--..--": ",",
    "..--..": "?",
    ".----.": "'",
    "-.-.--": "!",
    "-..-.": "/",
    "-.--.": "(",
    "-.--.-": ")",
    ".-...": "&",
    "---...": ":",
    "-.-.-.": ";",
    "-...-": "=",
    ".-.-.": "+",
    "-....-": "-",
    "..--.-": "_",
    ".-..-.": "''",
    "...-..-": "$",
    ".--.-.": "@",
    " ": " ",
  };
  var morseTextArray = morsetext.split(" ");
  for (var i = 0; i < morseTextArray.length; i++) {
    decodedText += alpha[morseTextArray[i]];
  }
  var trimmedString = decodedText.trim();
  document.getElementById("outputDecodeText").value = trimmedString;
}

function base64Encoder() {
  var inputString = document.getElementById("inputText").value;
  document.getElementById("outputText").value = btoa(inputString);
}

function base64Decoder() {
  var inputString = document.getElementById("inputDecodeText").value;
  document.getElementById("outputDecodeText").value = atob(inputString);
}

function ceaserEncoder() {
  window.alert(
    "Make sure you enter alphabets only, Ceaser did't know about ASCII"
  );
  var inputString = document.getElementById("inputText").value;
  var text = inputString.toUpperCase();
  console.log(text);
  var output = "";

  var key = parseInt(
    prompt("Enter the Key for Encryption/Decryption (key should be a number)")
  );
  for (var i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      output += " ";
    } else {
      output += String.fromCharCode(
        ((text.charCodeAt(i) - 65 + key) % 26) + 65
      );
    }
  }
  document.getElementById("outputText").value = output;
  console.log(output);
}

function ceaserDecoder() {
  var inputString = document.getElementById("inputDecodeText").value;
  var text = inputString.toUpperCase();
  var output = "";
  var key = parseInt(
    prompt("Enter the Key for Encryption/Decryption (key should be a number)")
  );
  console.log(key);

  for (var i = 0; i < text.length; i++) {
    var alphaCode = text.charCodeAt(i) - 65 - key;
    if (text[i] == " ") {
      output += " ";
    } else if (alphaCode < 0) {
      alphaCode += 26;
      output += String.fromCharCode((alphaCode % 26) + 65);
    } else {
      output += String.fromCharCode((alphaCode % 26) + 65);
    }
  }
  document.getElementById("outputDecodeText").value = output;
}

function update() {
  if (document.getElementById("mySelect").value == "binary") {
    binaryEncode();
  } else if (document.getElementById("mySelect").value == "morse") {
    morseEncoder();
  } else if (document.getElementById("mySelect").value == "base64") {
    base64Encoder();
  } else if (document.getElementById("mySelect").value == "ceaser") {
    ceaserEncoder();
  }
}
function copy() {
  var copyText = document.getElementById("outputText");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Encoded text copied: " + copyText.value);
}

function decoders() {
  if (document.getElementById("decodeSelect").value == "binaryDecode") {
    binaryDecode();
  } else if (document.getElementById("decodeSelect").value == "morseDecode") {
    morseDecoder();
  } else if (document.getElementById("decodeSelect").value == "base64Decode") {
    base64Decoder();
  } else if (document.getElementById("decodeSelect").value == "ceaserDecode") {
    ceaserDecoder();
  }
}
