class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}

// This defines a basic HashTable class in JavaScript with a private _hash function that:

// Converts each character in the key to a numeric value.

// Uses a prime number multiplier (31) to reduce collisions.

// Uses modulo to stay within array bounds (this.keyMap.length).