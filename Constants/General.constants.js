export const Notes = {
    "A": 0,
    "A#": 1,
    "B": 2,
    "C": 3,
    "C#": 4,
    "D": 5,
    "D#": 6,
    "E": 7,
    "F": 8,
    "F#": 9,
    "G": 10,
    "G#": 11,
    for: (...notes) => {
        return notes.map((note) => this[note])
    }
};

// Scale degrees
export const I = 0;
export const ii = 1;
export const II = 2;
export const iii = 3;
export const III = 4;
export const IV = 5;
export const V = 6;
export const vi = 7;
export const VI = 8;
export const vii = 9;
export const VII = 10;