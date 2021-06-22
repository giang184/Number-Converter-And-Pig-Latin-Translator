// Utility Logic
function checkVowel(text) {
  if (text === 'a' || text === 'A' || text === 'e' || text === 'E' || text === 'i' || text === 'I' || text === 'o' || text === 'O' || text === 'u' || text === 'U') {
    return true;
  }
  else {
    return false;
  }
}
function noInputtedWord() {
  for (let i=0; i < arguments.length; i++) {
    console.log(arguments[i]);
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}
// Business Logic
function pigLatin(word) {
  if(noInputtedWord(word)){
    return "";
  }
  else if (checkVowel(word[0])) {
    return word + "way";
  }
  else {    
    if ((word[0] === 'q' || word[0] === 'Q') && (word[1] === 'u' || word[1] === 'U')) {
      return word.slice(2) + word.slice(0, 2) + "ay";
    }
    let marker = 0;   
    for (let index = 0; index < word.length; index++) {
      if (checkVowel(word[index])) {
        if (!(word[index] === 'u' && word[index - 1] === 'q')) {
          marker = index;
          break;
        }
      }
    }
    return word.slice(marker) + word.slice(0, marker) + "ay";
  }
}

//value = "1001"   index = 2
function binaryConverter(value) {
  value = value.toString();
  sum = 0;
  let power = 0;
  for(let index = value.length -1; index >= 0; index--)
  {
    sum += parseInt(value[index])*Math.pow(2, power);
    power++;
  }
  return sum;
}

function hexConverter(value) {
  sum = 0;
  let power = 0;
  for(let index = value.length -1; index >= 0; index--)
  {
    if(value[index]==='a')
    {
      sum += 10*Math.pow(16, power);
    }
    else if(value[index]==='b')
    {
      sum += 11*Math.pow(16, power);
    }
    else if(value[index]==='c')
    {
      sum += 12*Math.pow(16, power);
    }
    else if(value[index]==='d')
    {
      sum += 13*Math.pow(16, power);
    }
    else if(value[index]==='e')
    {
      sum += 14*Math.pow(16, power);
    }
    else if(value[index]==='f')
    {
      sum += 15*Math.pow(16, power);
    }
    else {
      sum += parseInt(value[index])*Math.pow(16, power);
    }
    console.log(power);
    console.log(sum);
    power++;
  }
  return sum;
}

function romanNumeral(num) {
  let result = "";
  const digits = (''+num).split('');

  const ones = ['','i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix'];
  const tens = ['','x', 'xx', 'xxx', 'xl', 'l', 'lx', 'lxx', 'lxxx', 'xc'];
  const hundreds = ['','c', 'cc', 'ccc', 'cd', 'd', 'dc', 'dcc', 'dccc', 'cm'];

  if(digits.length === 1)
  {
    return ones[parseInt(digits[0])];
  }
  else if(digits.length === 2)
  {
    return tens[parseInt(digits[0])]   + ones[parseInt(digits[1])];
  }
  else if(digits.length === 3)
  {
    return hundreds[parseInt(digits[0])]   + tens[parseInt(digits[1])] + ones[parseInt(digits[2])];
  }
};

// UI Logic
$(document).ready(function(){
  $("form#pig").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const binaryNum = $("#binaryNumber").val();
    const hexNum = $("#hexNumber").val();
    const decimal = $("#decimal").val();
    let pigResult = "";
    let array = passage.split(' ');
    for(let i = 0; i < array.length; i++)
    {
      pigResult += " " + pigLatin(array[i].replace(/[,.]/g, ""));
    }

    $("#pigLatin").html(pigResult);
    $("#binaryNum").html(binaryConverter(binaryNum));
    $("#hexNum").html(hexConverter(hexNum));
    $("#romanNumerals").html(romanNumeral(decimal));  
    $(".result").show();
  });
});