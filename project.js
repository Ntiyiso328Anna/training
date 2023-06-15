function largestPalindromeProduct() {   //the function
   
  let maxPalindrome = 0;        // Initialize the largest palindrome to 0.

  
  for (let i = 999; i >=100; i--) {   // Iterate through all 3-digit numbers,decrementing to find the largest palindromeof productof two digits

   
    for (let j = 999; j >= 100; j--) {      // eliminate all of the smaller products and focus on the larger ones,which will make the search for the palindrome more efficient

      let product = i * j;   // Iterate through all 3-digit numbers.

      // Check if the product is a palindrome.
       
      let strNum = product.toString(); //converting to string
      let reverse_strNum = strNum.split("").reverse().join(""); //start by splitting after reverse an array and put it tohgether

      if(product == reverse_strNum && product >=maxPalindrome){ //testing id the num is equal to string and if num is largest
         maxPalindrome = product; //to get the max number of palindrome

         console.log(maxPalindrome); //display the largest palindrome
         console.log('i', i);    // display the product
      }
    
    }
  }

  // Return the largest palindrome.
  return maxPalindrome;
}