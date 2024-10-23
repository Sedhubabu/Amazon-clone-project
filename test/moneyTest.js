import { formatCurrency } from "../scripts/utils/money.js";



console.log('convert cents into dollars')
if(formatCurrency(2095) === '20.95'){
    console.log('passed')
}else{
    console.log('failed')
}

console.log('work with o')
if(formatCurrency(0) === '0.00'){
    console.log('passed')
}else{
    console.log('failed')
}

console.log('work with float value')
if(formatCurrency(2000.5) === '20.01'){
    console.log('passed')
}else{
    console.log('failed')
}