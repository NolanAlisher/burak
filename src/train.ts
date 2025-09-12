// TASK ZH

// Shunday function yozing, u berilgan array parametri ichidagi
// raqamlar orasidan, tartib bo'yicha eng kichik raqamdan, eng katta raqamgacha
// tushirib qoldirilgan sonlarni o'zinigina topib bir array sifatida qaytarsin.

// MASALAN: findDisappearedNumbers([1, 3, 4, 7]); return [2, 5, 6];

// Yuqoridagi misolda, eng katta raqam bu 7 va eng kichik raqam bu 1.
// Function'ning vazifasi berilgan sonlar ichidan tushirib qoldirilgan
// sonlarnigina topib qaytarmoqda.

function findDisappearedNumbers(nums: number[]): number[] {
  if (nums.length === 0) return [];

  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const numSet = new Set(nums);
  const result: number[] = [];

  for (let i = min; i <= max; i++) {
    if (!numSet.has(i)) {
      result.push(i);
    }
  }

  return result;
}

console.log(findDisappearedNumbers([1, 3, 4, 7]));
// TASK ZG

// String sifatida berilgan string parametrni
// snake case'ga o'tkazib beradigan function yozing.

// MASALAN: convertToSnakeCase('name should be a string')
// return 'name_should_be_a_string'

// function convertToSnakeCase(input: string): string {
//   return input.trim().toLowerCase().replace(/\s+/g, "_");
// }

// console.log(convertToSnakeCase("name should be a string"));

// TASK ZF

// Shunday function yozing, uni string parametri bo'lsin.
// Ushbu function, har bir so'zni bosh harflarini katta harf qilib qaytarsin.
// Lekin uzunligi 1 yoki 2 harfga teng bo'lgan so'zlarni esa o'z holicha
// qoldirsin.

// MASALAN: capitalizeWords('name should be a string'); return 'Name Should be a String';

// Yuqoridagi misolda, bizning function, uzunligi 2 harfdan katta bo'lgan so'zlarnigina,
// birinchi harfini katta harf bilan qaytarmoqda.
// function capitalizeWords(sentence: string): string {
//   return sentence
//     .split(" ")
//     .map((word) => {
//       if (word.length <= 2) {
//         return word;
//       }
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// }

// console.log(capitalizeWords("name should be a string"));

// TASK ZE

// Shunday function yozing, uniygona string parametri mavjud bo'lsin.
// Bu function string tarkibidagi takrorlangan xarflarni olib tashlab qolgan
// qiymatni qaytarsin.

// MASALAN: removeDuplicate('stringg') return 'string'

// Yuqoridagi misolda, 'stringg' so'zi tarkibida 'g' harfi takrorlanmoqda
// funktsiyamiz shu bittadan ortiq takrorlangan harfni olib natijani
// qaytarmoqda.

// function removeDuplicate(str: string): string {
//   let result = "";

//   for (let char of str) {
//     if (!result.includes(char)) {
//       result += char;
//     }
//   }

//   return result;
// }

// console.log(removeDuplicate("ccooddee"));

// TASK ZD

// Shunday function yozing. Bu function o'ziga, parametr sifatida
// birinchi oddiy number, keyin yagona array va uchinchi bo'lib oddiy number
// qabul qilsin. Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
// shu aniqlangan indeksni uchinchi number parametr bilan alashtirib, natija sifatida
// yangilangan arrayni qaytarsin.

// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2];

// Yuqoridagi misolda, birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
// Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib,
// yangilangan arrayni qaytarmoqda.

// function changeNumberInArray(
//   index: number,
//   arr: number[],
//   newValue: number
// ): number[] {
//   let updatedArray = [...arr];

//   updatedArray[index] = newValue;

//   return updatedArray;
// }

// console.log(changeNumberInArray(1, [1, 3, 7, 2], 2));

// TASK ZC

// Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
// Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.

// MASALAN: celsiusToFahrenheit(0) return 32;
// MASALAN: celsiusToFahrenheit(10) return 50;

// Yuqoridagi misolda, 0°C, 32°F'ga teng.
// Yoki 10 gradus Selsiy, 50 Farenhaytga teng.

// °C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.

// function celsiusToFahrenheit(celsius: number): number {
//   return (celsius * 9) / 5 + 32;
// }

// console.log(celsiusToFahrenheit(10));

// TASK ZA

// Shunday function yozing, u array ichidagi objectlarni
// 'age' qiymati bo'yicha sortlab bersin.

// MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]

// Yuqoridagi misolda, kichik raqamlar katta raqamlar tomon
// tartiblangan holatda return bo'lmoqda.
// export interface T {
//   [key: string]: any;
// }

// function sortByAge(arr: T[]): T[] {
//   return arr.sort((a, b) => a.age - b.age);
// }

// const people: T[] = [{ age: 23 }, { age: 21 }, { age: 13 }];
// const sorted = sortByAge(people);

// console.log(sorted);

// TASK Z

// Shunday function yozing. Bu function sonlardan iborat array
// qabul qilsin. Function'ning vazifasi array tarkibidagi juft
// sonlarni topib ularni yig'disini qaytarsin.

// MASALAN:
// sumEvens([1, 2, 3]); return 2;
// sumEvens([1, 2, 3, 2]); return 4;

// Yuqoridagi misolda, bizning funktsiya
// berilayotgan array tarkibidagi sonlar ichidan faqatgina juft bo'lgan
// sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda.

// function sumEvens(arr: number[]): number {
//   return arr.filter((num) => num % 2 === 0).reduce((sum, num) => sum + num, 0);
// }

// console.log(sumEvens([1, 2, 3]));
// console.log(sumEvens([1, 2, 3, 2]));
// console.log(sumEvens([10, 5, 7, 6]));

// TASK Y

// Shunday function yozing, uni 2'ta array parametri bo'lsin.
// Bu function ikkala arrayda ham ishtirok etgan bir xil
// qiymatlarni yagona arrayga joylab qaytarsin.

// MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// Yuqoridagi misolda, argument sifatida berilayotgan array'larda
// o'xshash sonlar mavjud. Function'ning vazifasi esa ana shu
// ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga
// joylab return qilmoqda.

// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   return arr1.filter(
//     (value, index) => arr2.includes(value) && arr1.indexOf(value) === index
//   );
// }

// console.log(findIntersection([1, 2, 3], [3, 2, 0]));

// TASK X

// Shunday function yozing, uni object va string parametrlari bo'lsin.
// Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
// necha marotaba takrorlanganlini sanab qaytarsin.

// Eslatma => Nested object'lar ham sanalsin

// MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
// Funktsiya, shu ikkinchi argument 'model', birinchi argument object
// tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda

// function countOccurrences(obj: Record<string, any>, key: string): number {
//   let count = 0;

//   function helper(currentObj: Record<string, any>): void {
//     for (let k in currentObj) {
//       if (k === key) {
//         count++;
//       }
//       if (typeof currentObj[k] === "object" && currentObj[k] !== null) {
//         helper(currentObj[k]);
//       }
//     }
//   }

//   helper(obj);
//   return count;
// }

// console.log(
//   countOccurrences(
//     { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } },
//     "model"
//   )
// );

// TASK W

// Shunday function yozing, u o'ziga parametr sifatida
// yagona array va number qabul qilsin. Siz tuzgan function
// arrayni numberda berilgan uzunlikda kesib bo'laklarga
// ajratgan holatida qaytarsin.
// MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

// Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
// asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti

// function chunkArray<T>(arr: T[], size: number): T[][] {
//   if (size <= 0) {
//     throw new Error("Chunk size must be greater than 0");
//   }

//   const result: T[][] = [];

//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }

//   return result;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// TASK V

// Shunday function yozing, uni string parametri bo'lsin.
// Va bu function stringdagi har bir harfni o'zi bilan
// necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.

// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// Yuqoridagi misolda, 'hello' so'zi tarkibida
// qatnashgan harflar necha marotaba takrorlangini bilan
// object sifatida qaytarilmoqda.

// function countChars(str: string): Record<string, number> {
//   const result: Record<string, number> = {};

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     if (result[char]) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }

//   return result;
// }

// console.log(countChars("sunny"));

/** 
TASK U

Shunday function tuzing, uni number parametri bo'lsin.
Va bu function berilgan parametrgacha, 0'dan boshlab
oraliqda nechta toq sonlar borligini aniqlab return qilsi.

MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud. 
Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.
*/
// function sumOdds(number: number): number {
//   let count = 0;

//   for (let i = 0; i < number; i++) {
//     if (i % 2 !== 0) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(sumOdds(9));
// console.log(sumOdds(11));
/** TASK T

Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda. */
// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   const add = [...arr1, ...arr2];
//   return add.sort((a, b) => a - b);
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

//  TASK S

// Shunday function tuzing, u numberlardan tashkil topgan array qabul qilsin
// va o'sha numberlar orasidagi tushib qolgan sonni topib uni return qilsin.

// MASALAN: missingNumber([3, 0, 1]); return 2

// Yuqoridagi misolda, berilayotgan sonlar tarkibini tartiblasak
// '2' soni tushib qolgan

// function missingNumber(nums: number[]): number {
//   const n = nums.length;
//   const expectedSum = (n * (n + 1)) / 2;

//   const actualSum = nums.reduce((sum, num) => sum + num, 0);

//   return expectedSum - actualSum;
// }

// console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([3, 0, 6, 8, 1]));

// TASK R

// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

// MASALAN: calculate("1 + 3"); return 4;
// 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.

// function calculate(expression: string): number {
//   const parts = expression.split(" ");
//   const num1 = Number(parts[0]);
//   const operator = parts[1];
//   const num2 = Number(parts[2]);

//   if (operator === "+") {
//     return num1 + num2;
//   } else {
//     throw new Error("Use only + sign");
//   }
// }

// console.log(calculate("1 + 3"));
// console.log(calculate("101 + 100"));

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
