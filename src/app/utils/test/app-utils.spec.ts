import { ResultObject, calculateNoteDispense } from '../app-utils';


let resultArray: Array<ResultObject> | undefined = void 0;

const referenceOutput1 = [
    { count: 2, note: 500 },
    { count: 0, note: 200 },
    { count: 1, note: 100 },
    { count: 0, note: 50 },
    { count: 0, note: 20 },
    { count: 0, note: 10 }
];

const referenceOutput2 = [
    { count: 1, note: 500 },
    { count: 0, note: 200 },
    { count: 1, note: 100 },
    { count: 1, note: 50 },
    { count: 0, note: 20 },
    { count: 0, note: 10 }
];

const referenceEmptyOutput = [
    { count: 0, note: 500 },
    { count: 0, note: 100 },
    { count: 0, note: 50 },
    { count: 0, note: 20 },
    { count: 0, note: 10 }
];

it('dispencer function returns undefined for null input parameter', () => {
    resultArray = calculateNoteDispense(null);
    expect(resultArray).toBeUndefined();
});

it('dispencer function returns undefined for undefined input parameter', () => {
    resultArray = calculateNoteDispense(void 0);
    expect(resultArray).toBeUndefined();
});

it('dispencer function returns all counts a zero for empty string', () => {
    resultArray = calculateNoteDispense(' ');
    expect(resultArray).toBeUndefined();
});

it('dispencer function returns undefined for empty string', () => {
    resultArray = calculateNoteDispense(' ');
    expect(resultArray).toBeUndefined();
    resultArray = calculateNoteDispense('');
    expect(resultArray).toBeUndefined();
});

it('dispencer function returns undefined for an invalid string', () => {
    resultArray = calculateNoteDispense('S_eudjh@2');
    expect(resultArray).toBeUndefined();
});

it('returns proper array and counts for proper input', () => {
    resultArray = calculateNoteDispense('1100');
    expect(resultArray).toEqual(referenceOutput1);
    resultArray = calculateNoteDispense('650');
    expect(resultArray).toEqual(referenceOutput2);
});
