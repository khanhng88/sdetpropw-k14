
/**
input height and weight then calculate BMI
underweight <= 18.5
normalweight 18.5 - 24.9
overweight 25 - 29.9
obesity 30 or greater
BMI = weight / (height * height)
 */


const MIN_NORMALWEIGHT_BMI = 18.5
const MAX_NORMALWEIGHT_BMI = 24.9
const MIN_OVERWEIGHT_BMI = 25
const MAX_OVERWEIGHT_BMI = 29.9
const OBESITY_BMI = 30

let weight = 43
let height = 1.56

let bmi = weight / (height * height)
let diff = 0
console.log('bmi is: ', bmi);

if(bmi < MIN_NORMALWEIGHT_BMI) {
    diff = (MIN_NORMALWEIGHT_BMI * (height * height)) -  weight
    console.log(`underweight. You need to gain at least ${diff} kg to be normal`);

}else if(bmi <= MAX_NORMALWEIGHT_BMI) {
    console.log('normal weight');

}else if(bmi <= MAX_OVERWEIGHT_BMI) {
    diff = weight - (MAX_NORMALWEIGHT_BMI * (height * height))
    console.log(`overweight. You need to lose ${diff} kg to be normal`);

}else{
    diff = weight - (MAX_NORMALWEIGHT_BMI * (height * height))
    console.log(`obesity. You must lose at least ${diff} kg to be normal`);
}
