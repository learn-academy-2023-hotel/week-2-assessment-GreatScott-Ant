// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.

//Python??

def find_first_vowel_index(input_string):
    vowels = "AEIOUaeiou"
    
    for index, char in enumerate(input_string):
        if char in vowels:
            return index
    
    # Return -1 if no vowel is found in the string
    return -1

# Example usage:
input_string = "Hello, World!"
result = find_first_vowel_index(input_string)
if result != -1:
    print(f"The first vowel is at index {result}")
else:
    print("No vowels found in the string.")
This function, find_first_vowel_index, iterates through each character in the input string and checks if it's a vowel (both uppercase and lowercase). If it finds a vowel, it returns the index of that vowel. If no vowels are found, it returns -1 to indicate that there are no vowels in the string.



//Javascript

function findFirstVowelIndex(inputString) {
    const vowels = 'AEIOUaeiou';
  
    for (let i = 0; i < inputString.length; i++) {
      if (vowels.includes(inputString[i])) {
        console.log(`The first vowel is at index ${i}`);
        return;
      }
    }
  
    console.log('No vowels found in the string.');
  }
  
  // Example usage:
  const inputString = 'Hello, World!';
  findFirstVowelIndex(inputString);
  



// Critique the code output. 
// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 

//When I initally pasted the prompt into ChatGPT, I did not include the coding language, so I believe it gave me the response in Python. I went back and 
//included "Javascript", and received the latter code output. It was more of what I expected and was not too surprised by the results. I found it intersting
//that for the declarative statement nothing was chosen (var, let, const); instead it just said "function". What confused me was the placement of the return at the end of the code and after the first call
//for console.log. I was also surprised how it configured the console.log for if there weren't any vowels to output a string stating that. Overall the structure and method used is the general approach I 
//thought to take: creating a variable that listed the vowels, including the vowels capitalized as well, using a for/let statement. 