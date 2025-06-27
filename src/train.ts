console.log("Train.ts Ishga tushdi");

// H2-TASK:

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

function getDigits(input: string): string {
  let result = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char >= "0" && char <= "9") {
      result += char;
    }
  }

  return result;
}

const result = getDigits("m14i1t");
console.log("result:", result);

// H-TASK:

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// function getPositive(numbers: number[]) {
//   const positiveNumbers: number[] = numbers.filter((char) => char > 0);
//   const result: string = positiveNumbers.join("");
//   return result;
// }

// console.log(getPositive([1, -4, 2]));

// TASK G:

// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.

// function findHighest(arr: number[]) {
//   const max = Math.max(...arr);
//   return max;
// }

// const result = findHighest([5, 21, 12, 21, 8, 44]);
// console.log("Result:", result);
