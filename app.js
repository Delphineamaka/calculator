 Declare a variable  calculator
 START
 displayValue: 0,
 firstOperand: null,
 operator: null,
 waitingForSecondOperand: false,
 END


function INPUT DIGIT digit
// displayValue and waitingForSecondOperand
Declare a variable and Destructure the element of the calculator
// to avoid the second operand from appending to the first, overwrite it
IF(waitingForSecondOperand is true)
calculator.displayValue = Digit
calculator.waitingForSecondOperand = false

ENDIF

ELSE 
// using ternary function
calculator.display Value is equal to display value and display value is equal to zero, 
return digit or return display value + digit
OUTPUT calculator
ENDELSE

 function INPUT DECIMAL dot

IF(waitingForSecondOperand of the calculator = true)
calculator.displayValue = '0.'
calculator.waitingForSecondOperand = false
return
ENDIF


IF(calculator.waitingForSecondOperand is equal to true)
calculator.displayValue = '0.'
calculator.waitingForSecondOperand is false
return
ENDIF
IF(display Value of the calculator does not include ('dot'))
 calculator.displayValue += dot
ENDIF

ENDFunction

function HANDLE OPERATOR  nextOperator
Destructure the properties of the  calculator firstOperand, displayValue, operator
Declare a variable inputValue,  set it to parseFloat and parse displayValue

IF(operator and calculator.waitingForSecondOperand)
calculator.operator = nextOperator
OUTPUT calculator
return
ENDIF

IF(firstOperand is null and isNaN, parse in inputValue)
calculator.firstOperand = inputValue
ENDIF
ELSEIF(operator)
Declare a variable result and calculate firstOperand, inputValue, operator
calculator.displayValue = String(result)
calculator.firstOperand = result
ENDELSE
set calculator.waitingForSecondOperand to true
set calculator.operator to nextOperator

ENDFunction
 
function CALCULATE firstOperand, secondOperand, operator
IF(operator = '+')
INPUT firstOperand + secondOperand
ENDIF

ELSEIF(operator = '*')
INPUT firstOperand * secondOperand
ENDELSEIF

ELSEIF(operator = '-')
INPUT firstOperand - secondOperand
ENDELSEIF

IF(operator = '/')
INPUT firstOperand / secondOperand
ENDELSEIF 
OUTPUT secondOperand
ENDFunction
 

function clear
calculator.displayValue = '0',
calculator.firstOperand = null,
calculator.waitingForSecondOperand = false,
calculator.operator = null,

ENDFunction

 function update Display
 declare a variable display
 use DOM to select the calculator screen
update the value of the element with the contents of the display value
ENDFunction

call:update Display

Declare a variable calKeys
use the DOM to select all the calculator keys
add the click Event listener to all the buttons and pass in Event
Access the clicked element using the Target

Declare a variable target and Destructure the Event listener 

IF(target does not match buttons)
return
ENDIF

IF(target contains operator in the classlist)
OUTPUT handle operator,target.value
call: update Display
ENDIF

IF(target contains decimal in the classlist)
OUTPUT input Decimal, target.value  
call: update Display
ENDIF

IF(target contains all clear in the classlist)
OUTPUT clear, target.value
call:  update Display
ENDIF

IF(target contains num in the classlist)
OUTPUT input Digit, target.value
call: update Display
ENDIF
ENDFunction