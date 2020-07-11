function nameLastName(name, lastName) {
    if (!name && !lastName) return false;
    
    console.log(`Your name ${name}. Your Lastname ${lastName}`);
    return true;
}

function getName(question) {
    return prompt(question);
}

getError(nameLastName(getName('What is you name?'), getName('What is you LastName?')), 'You answered incorrectly!');

function getError(statusError, massege) {
    if (!statusError) {
        massege = massege || 'Error';
        console.error(massege)
    }
}
