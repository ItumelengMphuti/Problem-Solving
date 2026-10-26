function decrypt(message, key) {
  let result = "";

  for (let i = 0; i < message.length; i++) {
    let char = message[i];

    if (char >= "a" && char <= "z") {
      let code = char.charCodeAt(0) - 97;
      let decrypted = ((code - key)% 26 + 26) % 26;

      result += String.fromCharCode(decrypted + 97);
    } else {
      result += char;
    }
  }

  return result;
}

console.log(decrypt("def", 3)); // abc
console.log(decrypt("abc", 3)); // xyz
console.log(decrypt("hello!", 0)); // hello!
