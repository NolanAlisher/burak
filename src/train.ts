// TASK R

// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

// MASALAN: calculate("1 + 3"); return 4;
// 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.

function calculate(expression: string): number {
  const parts = expression.split(" ");
  const num1 = Number(parts[0]);
  const operator = parts[1];
  const num2 = Number(parts[2]);

  if (operator === "+") {
    return num1 + num2;
  } else {
    throw new Error("Use only + sign");
  }
}

console.log(calculate("1 + 3"));
console.log(calculate("101 + 100"));

// TASK Q:

// Shunday function yozing, u 2 ta parametrga ega bo'lib
// birinchisi object, ikkinchisi string bo'lsin.
// Agar qabul qilinayotgan ikkinchi string, objectning
// biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
// Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "year"); return false;
// Ushbu misolda, ikkinchi argument sifatida berilayotgan 'year' objectning
// propertysida mavjud bo'lmaganligi uchun 'false' natijani qaytarmoqda.

// function hasProperty(obj: object, key: string): boolean {
//   return key in obj;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));

// TASK P:

// Parametr sifatida yagona object qabul qiladigan function yozing.
// Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(obj: { [key: string]: any }): [string, any][] {
//   return Object.entries(obj);
// }

// const result = objectToArray({ a: 10, b: 20 });
// console.log("result:", result);

// TASK O:

// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

// Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
// Qolganlari nested bo'lib yoki type'lari number emas.
// function calculateSumOfNumbers(arr: any[]): number {
//   let sum = 0;

//   for (const item of arr) {
//     if (typeof item === "number") {
//       sum += item;
//     }
//   }

//   return sum;
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));

// TASK N:

// Parametr sifatida yagona string qabul qiladigan function tuzing.
// Va bu function string'ni palindrom so'z yoki palindrom so'z emasligini aniqlab (boolean)
// 'true' yokida 'false' qaytarsin.

// MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false;
// Birinchi misolda 'dad' so'zini ikkala tarafdan o'qilganda ham bir xil ma'noni beradi (true)
// Ikkinchi misolda 'son' so'zini ikkala tarafdan o'qilganda bir xil ma'noni bermaydi (false)

// *Palindrom so'z deb o'ngdan chapga ham ~ chapdan o'ngga ham o'qilganda
// bir xil ma'noni beradigan so'zga aytiladi

// function palindromCheck(word: string): boolean {
//   const reversed = word.split("").reverse().join("");
//   return word === reversed;
// }

// console.log(palindromCheck("hannah"));
// console.log(palindromCheck("nolan"));
// TASK M:

// Shunday function tuzing, u raqamlardan tashkil topgan array qabul qilsin
// va array ichidagi har bir raqam uchun raqamning o'zi va hamda o'sha raqamni kvadratidan
// tashkil topgan object hosil qilib, hosil bo'lgan objectlarni array ichida qaytarsin

// MASALAN: MASALAN: getSquareNumbers([1, 2, 3]) return [{ number: 1, square: 1 }, { number: 2, square: 4 }, { number: 3, square: 9 }];

// type NumberWithSquare = {
//   number: number;
//   square: number;
// };

// function getSquareNumbers(numbers: number[]): NumberWithSquare[] {
//   return numbers.map((num) => ({
//     number: num,
//     square: num * num,
//   }));
// }
// const result = getSquareNumbers([1, 2, 3]);
// console.log("result:", result);

// TASK L:

// So'zlarni ketma - ketligini buzmasdan har bir so'zni
// alohida teskarisiga o'girib beradigan fucntion tuzing.
// Funtion yagona string qabul qilsin

// MASALAN: reverseSentence("we like coding!") return "ew ekil !gnidoc";
// Qaytayotgan natijaga e'tibor bersangiz, so'zlar joyi o'zgarmasdan turgan o'rnida teskarisiga o'girilmoqda

// function reverseSentence(sentence: string): string {
//   return sentence
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }

// console.log(reverseSentence("we like coding!"));

// TASK K:

// Berilayotgan parametr tarkibida nechta unli harf bor
// ekanligini aniqlovchi function tuzing

// MASALAN: countVowels("string"); return 1

// Yuqoridagi misolda 'string' so'zi tarkibida yagona unli harf 'i'
// bo'lganligi uchun '1'ni qaytarmoqda

// function countVowels(text: string): number {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;

//   // Har bir harfni tekshiramiz
//   for (let i = 0; i < text.length; i++) {
//     const char = text[i].toLowerCase();
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countVowels("string"));

// TASK J:

// Shunday function tuzing, u string qabul qilsin.
// Va string ichidagi eng uzun so'zni qaytarsin.

// MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

// Yuqoridagi text tarkibida 'Uzbekistan'
// eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda

// function findLongestWord(text: string): string {
//   const words = text.split(" ");
//   let longestWord = "";

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord("Hello world, hello Uzbekistan, and Turkmenistan"));

// TASK I:

// Shunday function tuzing, u parametrdagi array ichida eng ko'p
// takrorlangan raqamni topib qaytarsin.

// MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

// Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.

// function majorityElement(arr: number[]): number {
//   let counts: any = {};
//   let max = 0;
//   let kopSon = arr[0];

//   for (let num of arr) {
//     counts[num] = (counts[num] || 0) + 1;

//     if (counts[num] > max) {
//       max = counts[num];
//       kopSon = num;
//     }
//   }

//   return kopSon;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

/** PROJECT STANDARTS:
    - LOGGING standarts
    - NAMING standarts:
      camel case: function, varable, method
      pascal case: class
      kebab case: folder, file
      snake case: css
    - ERROR handling
 */

/**
    TRADITIONAL API
    REST API
    GRAPGHQL API
 */

// console.log("Train.ts Ishga tushdi");

// // H2-TASK:

// // Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// // MASALAN: getDigits("m14i1t") return qiladi "141"

// function getDigits(input: string): string {
//   let result = "";

//   for (let i = 0; i < input.length; i++) {
//     const char = input[i];
//     if (char >= "0" && char <= "9") {
//       result += char;
//     }
//   }

//   return result;
// }

// const result = getDigits("m14i1t");
// console.log("result:", result);

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
