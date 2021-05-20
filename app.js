const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');

//ecoute les keys  
keys.addEventListener('click', event => {
    //exclus les border de la grid
    /* La méthode Element.closest() renvoie l'ancêtre le plus proche de l'élément courant */
   if(!event.target.closest('button')) return 
   const key = event.target;
   const keyValue = key.textContent;
   const displayValue = display.textContent;

   /* La propriété HTMLElement.dataset fournit un accès en mode lecture et écriture, à tous les attributs de données sur mesure (data-*) définis sur l'élément. Une clef abcDef sera transformée dans le DOM en attribut data-abc-def */
   const type = key.dataset.type;
   const previousKeyType = calculator.dataset.previousKeyType;

//condition pour ajouter chiffre, operateur, ou calculer resultat

    if(type === 'number'){
        if(displayValue === '0' || previousKeyType === 'operator'){
        display.textContent = keyValue; 
        }else{
        display.textContent = displayValue + keyValue
        }
    }

    if(type === 'operator'){
        const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
        // ajoute dans le DOM pour chaque operator key selected un data-state et un etat 'selected' pour l'operator selected. 
        operatorKeys.forEach(element => {element.dataset.state = ''})
        
        key.dataset.state = 'selected'

        calculator.dataset.firstNumber = displayValue;
        calculator.dataset.operator = key.dataset.key;
    }

    if(type === 'equal'){
        const firstNumber = calculator.dataset.firstNumber;
        const operator = calculator.dataset.operator;
        const secondNumber = displayValue;
        display.textContent = calculate (firstNumber, operator, secondNumber);
    }

    if(type === 'clear'){
        calculator.dataset.firstNumber = ''
        calculator.dataset.operator = ''
        display.textContent = '0'
    }

        calculator.dataset.previousKeyType = type;
})

    function calculate (firstNumber, operator, secondNumber){
        // parseInt analyse la string fournie en argument et renvoie un chiffre entier
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);
    
        if(operator === 'plus') return firstNumber + secondNumber;
        if(operator === 'minus') return firstNumber - secondNumber;
        if(operator === 'times') return firstNumber * secondNumber;
        if(operator === 'divide') return firstNumber / secondNumber;
        return result
    }

    

