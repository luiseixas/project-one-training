const phrase =  $('.phrase').text();
const sizeWordsPhrase = phrase.split(' ').length;
const sizePhrase = $('#size-phrase');
sizePhrase.text(sizeWordsPhrase);

const campo = $('#campo-digitacao');

campo.on('click', () => {
    console.log('Fui clicado.');
    campo.val();
});


