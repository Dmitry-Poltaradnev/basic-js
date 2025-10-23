const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();

    let keyIndex = 0;

    const res = [...message].map(char => {
      if (/[A-Z]/.test(char)) {
        const shift = (char.charCodeAt(0) - 65 + key[keyIndex % key.length].charCodeAt(0) - 65) % 26;
        keyIndex++;
        return String.fromCharCode(shift + 65);
      }
      return char;
    }).join('');

    return this.isDirect ? res : res.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();

    let keyIndex = 0;

    const res = [...message].map(char => {
      if (/[A-Z]/.test(char)) {
        const shift = (char.charCodeAt(0) - key[keyIndex % key.length].charCodeAt(0) + 26) % 26;
        keyIndex++;
        return String.fromCharCode(shift + 65);
      }
      return char;
    }).join('');

    return this.isDirect ? res : res.split('').reverse().join('');
  }
}


module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
