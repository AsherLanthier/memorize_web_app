var used_words = [];
var words;
var punctuation = ['.', ',', '!', '?', '$', ';', ':', '(', ')', '%'];

function set_text(){
    var text = document.getElementById("text_input");
    localStorage.setItem("text to memorize", text.value);
}

function string_to_array(my_string){
    my_array = my_string.split(' ');

    return my_array;
}

function array_to_string(my_array){
    my_string = '';
    for(i = 0; i < my_array.length; i++){
        my_string += my_array[i] + ' ';
    }

    return my_string;
}

document.addEventListener('DOMContentLoaded', function() {

        var text_display = document.getElementById("text_display");
        var text_input = document.getElementById("text_input");
        color = localStorage.getItem('bg_color');
        document.body.style.backgroundColor = color;
        
        
        if (text_input != null){
            text_input.value = localStorage.getItem("text to memorize");
        }

        if (text_display != null){
            text_display.textContent = localStorage.getItem("text to memorize");
            var text_to_memorize = localStorage.getItem('text to memorize');
            words = string_to_array(text_to_memorize);
        }
    });

function remove_word(){
    var length_of_text = words.length;

    if (used_words.length != length_of_text){

        var word_index = Math.floor(Math.random() * length_of_text);

        while(used_words.includes(word_index)){
            word_index = Math.floor(Math.random() * length_of_text);
        }

        used_words.push(word_index);
        word = words[word_index];

        for(i = 0; i < word.length; i++){
            if (!punctuation.includes(word[i])) {
                word = word.replace(word[i], '_');
            }
        }

        words[word_index] = word;
        console.log(words);

        text_display.textContent = array_to_string(words);
    }
}

function change_bg(){
    var color = document.getElementById('bg_color').value;
    localStorage.setItem('bg_color', color);
    document.body.style.backgroundColor = color;
}