const key_c = {
    'c': 1, 'b#': 1, 'c#': 2, 'd♭': 2, 'd': 3, 'd#': 4, 'e♭': 4, 'e': 5, 'f♭': 5, 'e#': 6, 'f': 6, 'f#': 7, 'g♭': 7, 'g': 8, 'g#': 9, 'a♭': 9,
    'a': 10, 'a#': 11, 'b♭': 11, 'b': 12, 'c♭': 12
};
const key_g = {
    'g': 1, 'g#': 2, 'a♭': 2, 'a': 3, 'a#': 4, 'b♭': 4, 'b': 5, 'c♭': 5, 'b#': 6, 'c': 6, 'c#': 7, 'd♭': 7, 'd': 8, 'd#': 9, 'e♭': 9,
    'e': 10, 'f♭': 10, 'e#': 11, 'f': 11, 'f#': 12, 'g♭': 12
};
const key_d = {
    'd': 1, 'd#': 2, 'e♭': 2, 'e': 3, 'f♭': 3, 'e#': 4, 'f': 4, 'f#': 5, 'g♭': 5, 'g': 6, 'g#': 7, 'a♭': 7, 'a': 8, 'a#': 9, 'b♭': 9,
    'b': 10, 'c♭': 10, 'b#': 11, 'c': 11, 'c#': 12, 'd♭': 12
};
const key_a = {
    'a': 1, 'a#': 2, 'b♭': 2, 'b': 3, 'c♭': 3, 'b#': 4, 'c': 4, 'c#': 5, 'd♭': 5, 'd': 6, 'd#': 7, 'e♭': 7, 'e': 8, 'f♭': 8, 'e#': 9, 'f': 9, 'f#': 10,
    'g♭': 10, 'g': 11, 'g#': 12, 'a♭': 12
};
const key_e = {
    'e': 1, 'f♭': 1, 'e#': 2, 'f': 2, 'f#': 3, 'g♭': 3, 'g': 4, 'g#': 5, 'a♭': 5, 'a': 6, 'a#': 7, 'b♭': 7, 'b': 8, 'c♭': 8, 'c': 9, 'b#': 9, 'c#': 10,
    'd♭': 10, 'd': 11, 'd#': 12, 'e♭': 12
};
const key_b = {
    'b': 1, 'c♭': 1, 'b#': 2, 'c': 2, 'c#': 3, 'd♭': 3, 'd': 4, 'd#': 5, 'e♭': 5, 'e': 6, 'f♭': 6, 'e#': 7, 'f': 7, 'f#': 8, 'g♭': 8, 'g': 9, 'g#': 10,
    'a♭': 10, 'a': 11, 'a#': 12, 'b♭': 12
};
const key_gb = {
    'g♭': 1, 'f#': 1, 'g': 2, 'g#': 3, 'a♭': 3, 'a': 4, 'a#': 5, 'b♭': 5, 'b': 6, 'c♭': 6, 'b#': 7, 'c': 7, 'c#': 8, 'd♭': 8, 'd': 9,
    'd#': 10, 'e♭': 10, 'e': 11, 'f♭': 11, 'e#': 12, 'f': 12
};
const key_db = {
    'd♭': 1, 'c#': 1, 'd': 2, 'd#': 3, 'e♭': 3, 'e': 4, 'f♭': 4, 'e#': 5, 'f': 5, 'f#': 6, 'g♭': 6, 'g': 7, 'g#': 8, 'a♭': 8, 'a': 9,
    'a#': 10, 'b♭': 10, 'b': 11, 'c♭': 11, 'b#': 12, 'c': 12
};
const key_ab = {
    'a♭': 1, 'g#': 1, 'a': 2, 'a#': 3, 'b♭': 3, 'b': 4, 'c♭': 4, 'b#': 5, 'c': 5, 'c#': 6, 'd♭': 6, 'd': 7, 'd#': 8, 'e♭': 8, 'e': 9, 'f♭': 9,
    'e#': 10, 'f': 10, 'f#': 11, 'g♭': 11, 'g': 12
};
const key_eb = {
    'e♭': 1, 'd#': 1, 'e': 2, 'f♭': 2, 'e#': 3, 'f': 3, 'f#': 4, 'g♭': 4, 'g': 5, 'g#': 6, 'a♭': 6, 'a': 7, 'a#': 8, 'b♭': 8, 'b': 9,
    'c': 10, 'c#': 11, 'd♭': 11, 'd': 12
};
const key_bb = {
    'b♭': 1, 'a#': 1, 'b': 2, 'c♭': 2, 'b#': 3, 'c': 3, 'c#': 4, 'd♭': 4, 'd': 5, 'd#': 6, 'e♭': 6, 'e': 7, 'f': 8, 'f#': 9, 'g♭': 9,
    'g': 10, 'g#': 11, 'a♭': 11, 'a': 12
};
const key_f = {
    'f': 1, 'e#': 1, 'f#': 2, 'g♭': 2, 'g': 3, 'g#': 4, 'a♭': 4, 'a': 5, 'a#': 6, 'b♭': 6, 'b': 7, 'c♭': 7, 'b#': 8, 'c': 8, 'c#': 9, 'd♭': 9,
    'd': 10, 'd#': 11, 'e♭': 11, 'e': 12, 'f♭': 12
};

const minor2 = 1;
const major2 = 2;
const minor3 = 3;
const major3 = 4;
const perfect4 = 5;
const tritone = 6;
const perfect5= 7;
const augmented5 = 8;
const minor6 = 8;
const major6 = 9;
const minor7 = 10;
const major7 = 11;

let chord_found = false;

// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function display values
function display(display_value) {
    let value_no_space = display_value.substring(1);
    
    //clear screen if chord name is already displayed
    if(chord_found == true){
        clearScreen();
        chord_found = false;
    }

    //display value and delete first character if it is a space
    if(document.getElementById('result').value.includes(value_no_space) == false) {
        document.getElementById("result").value += display_value;
        if (document.getElementById("result").value.charAt(0) == ' ') {
            document.getElementById("result").value = document.getElementById("result").value.substring(1);
        }
    }

    if(document.getElementById('result').value.length !== 0 && display_value == '♭' && document.getElementById('result').value.charAt(document.getElementById('result').value.length - 1) !== display_value) {
        document.getElementById("result").value += display_value;
    }

    if(document.getElementById('result').value.length !== 0 && display_value == '#' && document.getElementById('result').value.charAt(document.getElementById('result').value.length - 1) !== display_value) {
        document.getElementById("result").value += display_value;
    }
}

//This function deletes the last character entered
function backspace() {
    document.getElementById('result').value = document.getElementById('result').value.slice(0,-1);
    
    if(document.getElementById('result').value.charAt(document.getElementById('result').value.length - 1) == ' ') {
        document.getElementById('result').value = document.getElementById('result').value.slice(0,-1);
    }
    
}

// This function evaluates the expression and returns result
function calculate() {
    if(chord_found == false)
    {
        var notes_in_chord = document.getElementById("result").value.split(" ");
        switch (notes_in_chord.length){
            case 0:
                document.getElementById('result').value = "Enter 2 or more notes";
                chord_found = true;
                break;
            case 1:
                document.getElementById('result').value = "Enter 2 or more notes";
                chord_found = true;
                break;
            case 2:
                document.getElementById('result').value = two_notes(notes_in_chord);
                display_history(input_history);
                break;
            case 3:
                document.getElementById('result').value = three_notes(notes_in_chord);
                display_history(input_history);
                break;
            case 4:
                document.getElementById('result').value = four_notes(notes_in_chord);
                display_history(input_history);
                break;
            case 5:
                document.getElementById('result').value = five_notes(notes_in_chord);
                display_history(input_history);
                break;
            case 6:
                document.getElementById('result').value = six_notes(notes_in_chord);
                display_history(input_history);
                break;
            case 7:
                document.getElementById('result').value = seven_notes(notes_in_chord);
                display_history(input_history);
                break;
        }
    } else {
        clearScreen();
    }
}

//This function calculates the interval based off of two notes
function two_notes(notes) {
    let int_in_chord = [];
    let result;
    let note1 = notes[0].toLowerCase();
    let note2 = notes[1].toLowerCase();
    let key_sig;
    let notes_str = notes.toString();

    for (let i=0; i < notes.length; i++){
        notes[i] = notes[i].toLowerCase();
    }

    switch(notes[0]) {
        case 'c':
            key_sig = key_c;
            break;
        case 'b#':
            key_sig = key_c;
            break;
        case 'g':
            key_sig = key_g;
            break;
        case 'd':
            key_sig = key_d;
            break;
        case 'a':
            key_sig = key_a;
            break;
        case 'e':
            key_sig = key_e;
            break;
        case 'f♭':
            key_sig = key_e;
            break;
        case 'b':
            key_sig = key_b;
            break;
        case 'c♭':
            key_sig = key_b;
            break;
        case 'g♭':
            key_sig = key_gb;
            break;
        case 'f#':
            key_sig = key_gb;
            break;
        case 'd♭':
            key_sig = key_db;
            break;
        case 'c#':
            key_sig = key_db;
            break;
        case 'a♭':
            key_sig = key_ab;
            break;
        case 'g#':
            key_sig = key_ab;
            break;
        case 'e♭':
            key_sig = key_eb;
            break;
        case 'd#':
            key_sig = key_eb;
            break;
        case 'b♭':
            key_sig = key_bb;
            break;
        case 'a#':
            key_sig = key_bb;
            break;
        case 'f':
            key_sig = key_f;
            break;
        case 'e#':
            key_sig = key_f;
            break;
    }

    while (chord_found == false) {
        let num_note1 = key_sig[note1];
        let num_note2 = key_sig[note2];
        let int1and2 = num_note2 - num_note1;

        int_in_chord.push(int1and2);

        if(int_in_chord.includes(minor2)){
            chord_found = true;
            result = 'Minor 2nd (♭2)';
        } else if(int_in_chord.includes(major2)){
            chord_found = true;
            result = 'Major 2nd (2)';
        } else if(int_in_chord.includes(minor3)){
            chord_found = true;
            result = 'Minor 3rd (♭3)';
        } else if(int_in_chord.includes(major3)){
            chord_found = true;
            result = 'Major 3rd (3)';
        } else if(int_in_chord.includes(perfect4)){
            chord_found = true;
            result = 'Perfect 4th (4)';
        } else if(int_in_chord.includes(tritone)){
            chord_found = true;
            result = 'Tri-tone (#4/♭5)';
        } else if(int_in_chord.includes(perfect5)){
            chord_found = true;
            result = 'Perfect 5th (5)';
        } else if(int_in_chord.includes(minor6)){
            chord_found = true;
            result = 'Minor 6th (♭6)';
        } else if(int_in_chord.includes(major6)){
            chord_found = true;
            result = 'Major 6 (6)';
        } else if(int_in_chord.includes(minor7)){
            chord_found = true;
            result = 'Minor 7th (♭7)';
        } else if(int_in_chord.includes(major7)){
            chord_found = true;
            result = 'Major 7th (7)';
        } else {
            chord_found = true;
            result = 'Not Found';
        }
    }
    
    //display history
    let input_and_result = document.createElement('p');
    notes_str = notes_str.toUpperCase();
    let result_str = result.toString();
    notes_str = notes_str.replaceAll(',', ' ');
    input_and_result.innerHTML = notes_str + ' = ' + result_str;
    document.getElementById('history').insertBefore(input_and_result, document.getElementById('history').children[2]);
    return result;
}

//This function calculates the chord based off of three notes
function three_notes(notes) {
    let int_in_chord = [];
    let result = 'Not Found';
    let tries = 0;
    let key_sig;
    let notes_str = notes.toString();

    for (let i=0; i < notes.length; i++){
        notes[i] = notes[i].toLowerCase();
    }

    while (chord_found == false){
        let note1 = notes[0].toLowerCase();
        let note2 = notes[1].toLowerCase();
        let note3 = notes[2].toLowerCase();

        switch(notes[0]) {
            case 'c':
                key_sig = key_c;
                break;
            case 'b#':
                key_sig = key_c;
                break;
            case 'g':
                key_sig = key_g;
                break;
            case 'd':
                key_sig = key_d;
                break;
            case 'a':
                key_sig = key_a;
                break;
            case 'e':
                key_sig = key_e;
                break;
            case 'f♭':
                key_sig = key_e;
                break;
            case 'b':
                key_sig = key_b;
                break;
            case 'c♭':
                key_sig = key_b;
                break;
            case 'g♭':
                key_sig = key_gb;
                break;
            case 'f#':
                key_sig = key_gb;
                break;
            case 'd♭':
                key_sig = key_db;
                break;
            case 'c#':
                key_sig = key_db;
                break;
            case 'a♭':
                key_sig = key_ab;
                break;
            case 'g#':
                key_sig = key_ab;
                break;
            case 'e♭':
                key_sig = key_eb;
                break;
            case 'd#':
                key_sig = key_eb;
                break;
            case 'b♭':
                key_sig = key_bb;
                break;
            case 'a#':
                key_sig = key_bb;
                break;
            case 'f':
                key_sig = key_f;
                break;
            case 'e#':
                key_sig = key_f;
                break;
        }

        var num_note1 = key_sig[note1];
        var num_note2 = key_sig[note2];
        var num_note3 = key_sig[note3];
        var int1and2 = num_note2 - num_note1;
        var int1and3 = num_note3 - num_note1;

        int_in_chord.push(int1and2, int1and3);

        if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5)){
            chord_found = true;
            result = note1.toUpperCase() + 'm';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5)){
            chord_found = true;
            result = note1.toUpperCase();
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(major7)){
            chord_found = true;
            result = note1.toUpperCase() + 'maj7 (no 5th)';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(minor7)){
            chord_found = true;
            result = note1.toUpperCase() + 'm7 (no 5th)';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor7)){
            chord_found = true;
            result = note1.toUpperCase() + '7 (no 5th)';
        } else if(int_in_chord.includes(major2) && int_in_chord.includes(perfect5)){
            chord_found = true;
            result = note1.toUpperCase() + 'sus2';
        } else if(int_in_chord.includes(perfect4) && int_in_chord.includes(perfect5)){
            chord_found = true;
            result = note1.toUpperCase() + 'sus4';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(tritone)){
            chord_found = true;
            result = note1.toUpperCase() + 'dim';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor6)){
            chord_found = true;
            result = note1.toUpperCase() + 'aug';
        } else {
            int_in_chord = [];
            notes.push(notes.shift());
            tries++;
            if(tries == notes.length) {
                chord_found = true;
            }
        }
    }

    //display history
    let input_and_result = document.createElement('p');
    notes_str = notes_str.toUpperCase();
    let result_str = result.toString();
    notes_str = notes_str.replaceAll(',', ' ');
    input_and_result.innerHTML = notes_str + ' = ' + result_str;
    document.getElementById('history').insertBefore(input_and_result, document.getElementById('history').children[2]);
    
    return result;
}

//This function calculates the chord based off of four notes
function four_notes(notes) {
    let int_in_chord = [];
    let result = 'Not Found';
    let tries = 0;
    let key_sig;
    let notes_str = notes.toString();

    for (let i=0; i < notes.length; i++){
        notes[i] = notes[i].toLowerCase();
    }

    while (chord_found == false){
        let note1 = notes[0].toLowerCase();
        let note2 = notes[1].toLowerCase();
        let note3 = notes[2].toLowerCase();
        let note4 = notes[3].toLowerCase();

        switch(notes[0]) {
            case 'c':
                key_sig = key_c;
                break;
            case 'b#':
                key_sig = key_c;
                break;
            case 'g':
                key_sig = key_g;
                break;
            case 'd':
                key_sig = key_d;
                break;
            case 'a':
                key_sig = key_a;
                break;
            case 'e':
                key_sig = key_e;
                break;
            case 'f♭':
                key_sig = key_e;
                break;
            case 'b':
                key_sig = key_b;
                break;
            case 'c♭':
                key_sig = key_b;
                break;
            case 'g♭':
                key_sig = key_gb;
                break;
            case 'f#':
                key_sig = key_gb;
                break;
            case 'd♭':
                key_sig = key_db;
                break;
            case 'c#':
                key_sig = key_db;
                break;
            case 'a♭':
                key_sig = key_ab;
                break;
            case 'g#':
                key_sig = key_ab;
                break;
            case 'e♭':
                key_sig = key_eb;
                break;
            case 'd#':
                key_sig = key_eb;
                break;
            case 'b♭':
                key_sig = key_bb;
                break;
            case 'a#':
                key_sig = key_bb;
                break;
            case 'f':
                key_sig = key_f;
                break;
            case 'e#':
                key_sig = key_f;
                break;
        }

        var num_note1 = key_sig[note1];
        var num_note2 = key_sig[note2];
        var num_note3 = key_sig[note3];
        var num_note4 = key_sig[note4];
        var int1and2 = num_note2 - num_note1;
        var int1and3 = num_note3 - num_note1;
        var int1and4 = num_note4 - num_note1;

        int_in_chord.push(int1and2, int1and3, int1and4);

        if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7)){
            chord_found = true;
            result = note1.toUpperCase() + 'm7';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7)){
            chord_found = true;
            result = note1.toUpperCase() + 'maj7';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor6) && int_in_chord.includes(major7)){
            chord_found = true;
            result = note1.toUpperCase() + 'maj7#5';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(minor6) && int_in_chord.includes(minor7)){
            chord_found = true;
            result = note1.toUpperCase() + 'min7#5';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7)){
            chord_found = true;
            result = note1.toUpperCase() + '7';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor6) && int_in_chord.includes(minor7)){
            chord_found = true;
            result = note1.toUpperCase() + '7#5';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(tritone) && int_in_chord.includes(minor7)){
            chord_found = true;
            result = note1.toUpperCase() + '7♭5';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7)){
            chord_found = true;
            result = note1.toUpperCase() + 'min/maj7';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major2)){
            chord_found = true;
            result = note1.toUpperCase() + 'add2';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major2)){
            chord_found = true;
            result = note1.toUpperCase() + 'm add2';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(tritone) && int_in_chord.includes(minor7)){
            chord_found = true;
            result = note1.toUpperCase() + 'm7♭5';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(tritone) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + 'dim7';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(perfect4)){
            chord_found = true;
            result = note1.toUpperCase() + 'add4';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(perfect4)){
            chord_found = true;
            result = note1.toUpperCase() + 'm add4';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + 'm6';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + '6';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(major7) && int_in_chord.includes(major2)){
            chord_found = true;
            result = note1.toUpperCase() + 'maj9 (no 5th)';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(minor7) && int_in_chord.includes(major2)){
            chord_found = true;
            result = note1.toUpperCase() + 'm9 (no 5th)';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor7) && int_in_chord.includes(major2)){
            chord_found = true;
            result = note1.toUpperCase() + '9 (no 5th)';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor7) && int_in_chord.includes(minor3)){
            chord_found = true;
            result = note1.toUpperCase() + '7#9 (no 5th)';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor7) && int_in_chord.includes(perfect4)){
            chord_found = true;
            result = note1.toUpperCase() + '11 (no 5th)';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor7) && int_in_chord.includes(tritone)){
            chord_found = true;
            result = note1.toUpperCase() + '7#11 (no 5th)';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor7) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + '13 (no 5th)';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(major7) && int_in_chord.includes(major2)){
            chord_found = true;
            result = note1.toUpperCase() + 'min/maj9 (no 5th)';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(major7) && int_in_chord.includes(perfect4)){
            chord_found = true;
            result = note1.toUpperCase() + 'min/maj11 (no 5th)';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(major7) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + 'min/maj13 (no 5th)';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(major6) && int_in_chord.includes(major2)){
            chord_found = true;
            result = note1.toUpperCase() + '6/9 (no 5th)';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(major6) && int_in_chord.includes(major2)){
            chord_found = true;
            result = note1.toUpperCase() + 'm6/9 (no 5th)';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(major7) && int_in_chord.includes(perfect4)){
            chord_found = true;
            result = note1.toUpperCase() + 'maj11 (no 5th)';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(minor7) && int_in_chord.includes(perfect4)){
            chord_found = true;
            result = note1.toUpperCase() + 'm11 (no 5th)';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(minor7) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + 'm13 (no 5th)';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(major7) && int_in_chord.includes(tritone)){
            chord_found = true;
            result = note1.toUpperCase() + 'maj7#11 (no 5th)';

        } else {
            int_in_chord = [];
            notes.push(notes.shift());
            tries++;
            if(tries == notes.length) {
                chord_found = true;
            }
        }
    }
    //display history
    let input_and_result = document.createElement('p');
    notes_str = notes_str.toUpperCase();
    let result_str = result.toString();
    notes_str = notes_str.replaceAll(',', ' ');
    input_and_result.innerHTML = notes_str + ' = ' + result_str;
    document.getElementById('history').insertBefore(input_and_result, document.getElementById('history').children[2]);

    return result;
}

//This function calculates the chord based off of five notes
function five_notes(notes) {
    let int_in_chord = [];
    let result = 'Not Found';
    let tries = 0;
    let key_sig;
    let notes_str = notes.toString();


    for (let i=0; i < notes.length; i++){
        notes[i] = notes[i].toLowerCase();
    }

    while (chord_found == false){
        let note1 = notes[0].toLowerCase();
        let note2 = notes[1].toLowerCase();
        let note3 = notes[2].toLowerCase();
        let note4 = notes[3].toLowerCase();
        let note5 = notes[4].toLowerCase();

        switch(notes[0]) {
            case 'c':
                key_sig = key_c;
                break;
            case 'b#':
                key_sig = key_c;
                break;
            case 'g':
                key_sig = key_g;
                break;
            case 'd':
                key_sig = key_d;
                break;
            case 'a':
                key_sig = key_a;
                break;
            case 'e':
                key_sig = key_e;
                break;
            case 'f♭':
                key_sig = key_e;
                break;
            case 'b':
                key_sig = key_b;
                break;
            case 'c♭':
                key_sig = key_b;
                break;
            case 'g♭':
                key_sig = key_gb;
                break;
            case 'f#':
                key_sig = key_gb;
                break;
            case 'd♭':
                key_sig = key_db;
                break;
            case 'c#':
                key_sig = key_db;
                break;
            case 'a♭':
                key_sig = key_ab;
                break;
            case 'g#':
                key_sig = key_ab;
                break;
            case 'e♭':
                key_sig = key_eb;
                break;
            case 'd#':
                key_sig = key_eb;
                break;
            case 'b♭':
                key_sig = key_bb;
                break;
            case 'a#':
                key_sig = key_bb;
                break;
            case 'f':
                key_sig = key_f;
                break;
            case 'e#':
                key_sig = key_f;
                break;
        }

        var num_note1 = key_sig[note1];
        var num_note2 = key_sig[note2];
        var num_note3 = key_sig[note3];
        var num_note4 = key_sig[note4];
        var num_note5 = key_sig[note5];
        var int1and2 = num_note2 - num_note1;
        var int1and3 = num_note3 - num_note1;
        var int1and4 = num_note4 - num_note1;
        var int1and5 = num_note5 - num_note1;

        int_in_chord.push(int1and2, int1and3, int1and4, int1and5);

        if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(major2)){
            chord_found = true;
            result = note1.toUpperCase() + 'm9';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(major2)){
            chord_found = true;
            result = note1.toUpperCase() + 'maj9';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(major2)){
            chord_found = true;
            result = note1.toUpperCase() + '9';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(minor6)){
            chord_found = true;
            result = note1.toUpperCase() + '9#5';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(tritone) && int_in_chord.includes(minor7) && int_in_chord.includes(major2)){
            chord_found = true;
            result = note1.toUpperCase() + '9♭5';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(minor2)){
            chord_found = true;
            result = note1.toUpperCase() + '7♭9';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(minor3)){
            chord_found = true;
            result = note1.toUpperCase() + '7#9';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(perfect4)){
            chord_found = true;
            result = note1.toUpperCase() + '11';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(tritone)){
            chord_found = true;
            result = note1.toUpperCase() + '7#11';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor6) && int_in_chord.includes(minor7) && int_in_chord.includes(minor3)){
            chord_found = true;
            result = note1.toUpperCase() + '7#5#9';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(tritone) && int_in_chord.includes(minor7) && int_in_chord.includes(minor3)){
            chord_found = true;
            result = note1.toUpperCase() + '7♭5#9';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor6) && int_in_chord.includes(minor7) && int_in_chord.includes(minor2)){
            chord_found = true;
            result = note1.toUpperCase() + '7#5♭9';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(tritone) && int_in_chord.includes(minor7) && int_in_chord.includes(minor2)){
            chord_found = true;
            result = note1.toUpperCase() + '7♭5♭9';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + '13';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(major2)){
            chord_found = true;
            result = note1.toUpperCase() + 'min/maj9';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(perfect4)){
            chord_found = true;
            result = note1.toUpperCase() + 'min/maj11';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + 'min/maj13';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major6) && int_in_chord.includes(major2)){
            chord_found = true;
            result = note1.toUpperCase() + '6/9';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major6) && int_in_chord.includes(major2)){
            chord_found = true;
            result = note1.toUpperCase() + 'm6/9';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(perfect4)){
            chord_found = true;
            result = note1.toUpperCase() + 'maj11';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(perfect4)){
            chord_found = true;
            result = note1.toUpperCase() + 'm11';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + 'm13';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(tritone)){
            chord_found = true;
            result = note1.toUpperCase() + 'maj7#11';
        }  else if(int_in_chord.includes(major3) && int_in_chord.includes(major7) && int_in_chord.includes(perfect4) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + 'maj13 (no 5th)';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(major7) && int_in_chord.includes(major2) && int_in_chord.includes(perfect4)){
            chord_found = true;
            result = note1.toUpperCase() + 'maj11 (no 5th)';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor7) && int_in_chord.includes(major2) && int_in_chord.includes(perfect4)){
            chord_found = true;
            result = note1.toUpperCase() + '11 (no 5th)';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(major7) && int_in_chord.includes(major2) && int_in_chord.includes(perfect4)){
            chord_found = true;
            result = note1.toUpperCase() + 'min/maj11 (no 5th)';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(major7) && int_in_chord.includes(major2) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + 'min/maj13 (no 5th)';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(major7) && int_in_chord.includes(perfect4) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + 'min/maj13 (no 5th)';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(major7) && int_in_chord.includes(major2) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + 'maj13 (no 5th)';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(minor7) && int_in_chord.includes(major2) && int_in_chord.includes(perfect4)){
            chord_found = true;
            result = note1.toUpperCase() + 'm11 (no 5th)';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(minor7) && int_in_chord.includes(major2) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + 'm13 (no 5th)';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(minor7) && int_in_chord.includes(perfect4) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + 'm13';

        } else {
            int_in_chord = [];
            notes.push(notes.shift());
            tries++;
            if(tries == notes.length) {
                chord_found = true;
            }
        }
    }

    //display history
    let input_and_result = document.createElement('p');
    notes_str = notes_str.toUpperCase();
    let result_str = result.toString();
    notes_str = notes_str.replaceAll(',', ' ');
    input_and_result.innerHTML = notes_str + ' = ' + result_str;
    document.getElementById('history').insertBefore(input_and_result, document.getElementById('history').children[2]);

    return result;
}

//This function calculates the chord based off of six notes
function six_notes(notes) {
    let int_in_chord = [];
    let result = 'Not Found';
    let tries = 0;
    let key_sig;
    let notes_str = notes.toString();

    for (let i=0; i < notes.length; i++){
        notes[i] = notes[i].toLowerCase();
    }

    while (chord_found == false){
        let note1 = notes[0].toLowerCase();
        let note2 = notes[1].toLowerCase();
        let note3 = notes[2].toLowerCase();
        let note4 = notes[3].toLowerCase();
        let note5 = notes[4].toLowerCase();
        let note6 = notes[5].toLowerCase();

        switch(notes[0]) {
            case 'c':
                key_sig = key_c;
                break;
            case 'b#':
                key_sig = key_c;
                break;
            case 'g':
                key_sig = key_g;
                break;
            case 'd':
                key_sig = key_d;
                break;
            case 'a':
                key_sig = key_a;
                break;
            case 'e':
                key_sig = key_e;
                break;
            case 'f♭':
                key_sig = key_e;
                break;
            case 'b':
                key_sig = key_b;
                break;
            case 'c♭':
                key_sig = key_b;
                break;
            case 'g♭':
                key_sig = key_gb;
                break;
            case 'f#':
                key_sig = key_gb;
                break;
            case 'd♭':
                key_sig = key_db;
                break;
            case 'c#':
                key_sig = key_db;
                break;
            case 'a♭':
                key_sig = key_ab;
                break;
            case 'g#':
                key_sig = key_ab;
                break;
            case 'e♭':
                key_sig = key_eb;
                break;
            case 'd#':
                key_sig = key_eb;
                break;
            case 'b♭':
                key_sig = key_bb;
                break;
            case 'a#':
                key_sig = key_bb;
                break;
            case 'f':
                key_sig = key_f;
                break;
            case 'e#':
                key_sig = key_f;
                break;
        }

        var num_note1 = key_sig[note1];
        var num_note2 = key_sig[note2];
        var num_note3 = key_sig[note3];
        var num_note4 = key_sig[note4];
        var num_note5 = key_sig[note5];
        var num_note6 = key_sig[note6];
        var int1and2 = num_note2 - num_note1;
        var int1and3 = num_note3 - num_note1;
        var int1and4 = num_note4 - num_note1;
        var int1and5 = num_note5 - num_note1;
        var int1and6 = num_note6 - num_note1;

        int_in_chord.push(int1and2, int1and3, int1and4, int1and5, int1and6);

        if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(perfect4) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + 'maj13';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(major2) && int_in_chord.includes(perfect4)){
            chord_found = true;
            result = note1.toUpperCase() + 'maj11';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(major2) && int_in_chord.includes(perfect4)){
            chord_found = true;
            result = note1.toUpperCase() + '11';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(major2) && int_in_chord.includes(perfect4)){
            chord_found = true;
            result = note1.toUpperCase() + 'min/maj11';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(major2) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + 'min/maj13';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(perfect4) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + 'min/maj13';
        } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(major2) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + 'maj13';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(major2) && int_in_chord.includes(perfect4)){
            chord_found = true;
            result = note1.toUpperCase() + 'm11';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(major2) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + 'm13';
        } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(perfect4) && int_in_chord.includes(major6)){
            chord_found = true;
            result = note1.toUpperCase() + 'm13';
        } else {
            int_in_chord = [];
            notes.push(notes.shift());
            tries++;
            if(tries == notes.length) {
                chord_found = true;
            }
        }
    }
    
    //display history
    let input_and_result = document.createElement('p');
    notes_str = notes_str.toUpperCase();
    let result_str = result.toString();
    notes_str = notes_str.replaceAll(',', ' ');
    input_and_result.innerHTML = notes_str + ' = ' + result_str;
    document.getElementById('history').insertBefore(input_and_result, document.getElementById('history').children[2]);
    
    return result;
}

//Clear history
function clearHistory() {
    let remove_element = document.getElementById('history');
    for(let i = remove_element.children.length; i > 2; i--){
        remove_element.removeChild(remove_element.lastElementChild);
    }
}
