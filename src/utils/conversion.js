// src/utils/conversion.js
const DIGITS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function charToValue(ch) {
  return DIGITS.indexOf(String(ch).toUpperCase());
}

function valueToChar(v) {
  return DIGITS[v] || '?';
}

function isValidForBase(str, base) {
  if (typeof str !== 'string') return false;
  if (base < 2 || base > 36) return false;
  const s = str.trim();
  if (s.length === 0) return false;
  let seenDot = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (i === 0 && c === '-') continue;
    if (c === '.') {
      if (seenDot) return false;
      seenDot = true;
      continue;
    }
    const v = charToValue(c);
    if (v === -1 || v >= base) return false;
  }
  return true;
}

function toDecimalParts(inputStr, fromBase, precision = 12) {
  const s = inputStr.trim();
  const sign = s.startsWith('-') ? -1n : 1n;
  const core = s.startsWith('-') ? s.slice(1) : s;
  const [intS = "0", fracS = ""] = core.split('.');

  let intVal = 0n;
  for (let i = 0; i < intS.length; i++) {
    const d = charToValue(intS[i]);
    intVal = intVal * BigInt(fromBase) + BigInt(d);
  }

  let fracVal = 0;
  let denom = fromBase;
  for (let i = 0; i < Math.min(fracS.length, precision); i++) {
    const d = charToValue(fracS[i]);
    fracVal += d / denom;
    denom *= fromBase;
  }

  return { sign, intPart: intVal, fracPart: fracVal };
}

function decimalPartsToTarget(intBigInt, fracNumber, toBase, precision = 12) {
  let intDigits;
  if (intBigInt === 0n) {
    intDigits = "0";
  } else {
    const parts = [];
    let n = intBigInt;
    while (n > 0n) {
      const rem = Number(n % BigInt(toBase));
      parts.push(valueToChar(rem));
      n = n / BigInt(toBase);
    }
    intDigits = parts.reverse().join('');
  }

  let frac = fracNumber;
  const fracParts = [];
  for (let i = 0; i < precision && frac > 1e-15; i++) {
    frac *= toBase;
    const digit = Math.floor(frac + 1e-12);
    fracParts.push(valueToChar(digit));
    frac -= digit;
  }

  return { intDigits, fracDigits: fracParts.join('') };
}

function convertBase(inputStr, fromBase, toBase, precision = 12) {
  if (!isValidForBase(inputStr, fromBase)) {
    return { ok: false, error: `Input "${inputStr}" is not valid for base ${fromBase}` };
  }
  const { sign, intPart, fracPart } = toDecimalParts(inputStr, fromBase, precision);
  const { intDigits, fracDigits } = decimalPartsToTarget(intPart, fracPart, toBase, precision);
  const signPrefix = sign < 0n ? "-" : "";
  const result = fracDigits.length ? `${signPrefix}${intDigits}.${fracDigits}` : `${signPrefix}${intDigits}`;
  return { ok: true, result };
}

module.exports = {
  convertBase,
  isValidForBase,
  toDecimalParts,
  decimalPartsToTarget
};
