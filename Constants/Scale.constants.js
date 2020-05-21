import { I, ii, II, iii, III, IV, v, V, vi, VI, vii, VII } from './General.constants';

const scales = {
    // Major Modes
    ionian: [I, II, III, IV, V, VI, VII],
    dorian: [I, II, iii, IV, V, VI, vii],
    phrygian: [I, ii, iii, IV, V, vi, vii],
    lydian: [I, II, III, v, V, VI, VII],
    mixolydian: [I, II, III, IV, V, VI, vii],
    aeolian: [I, II, iii, IV, V, vi, vii],
    aeolian: [I, ii, iii, IV, v, vi, vii],
}

scales.major = scales.ionian;


export default scales;