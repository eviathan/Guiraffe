import { Notes } from './General.constants';

class Tuning {
    constructor(name, notes) {
        this.name = name;
        this.notes = notes;
    }
}

export default {
    standard: new Tuning("Standard", Notes.for("E", "A", "D", "G", "B", "E")),
    dropD: new Tuning("Drop D", Notes.for("D", "A", "D", "G", "B", "E")),
    dadgad: new Tuning("DADGAD", Notes.for("D", "A", "D", "G", "A", "E")),
}