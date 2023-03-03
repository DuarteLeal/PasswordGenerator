const lowercase_alphabet = "abcdefghijklmnopqrstuvwxyz";
const uppercase_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "=+'|,;.:-_ºª*«»#£$§%&/{[]}";

let password_size = prompt("Size of the password:");

let password = "";

for (i = 0; i < password_size; i++) {
  const character_type = Math.floor(Math.random() * 4) + 1;

  switch (character_type) {
    case 1:
      password += lowercase_alphabet.charAt(Math.floor(Math.random() * lowercase_alphabet.length));
      break;
    case 2:
      password += uppercase_alphabet.charAt(Math.floor(Math.random() * uppercase_alphabet.length));
      break;
    case 3:
      password += numbers.charAt(Math.floor(Math.random() * numbers.length));
      break;
    case 4:
      password += symbols.charAt(Math.floor(Math.random() * symbols.length));
      break;
  }
}

console.log(password);
