export const denominations: Array<number> = [500, 200, 100, 50, 20, 10];
export const balance = 1000000;

export interface ResultObject {
    count: number | undefined;
    note: number;
}

export const calculateNoteDispense = (amount: string | null | undefined,
                                      denome?: string | null | undefined): Array<ResultObject> | undefined => {
    if (!!amount) {
        try {
            let numericAmount: number = parseInt(amount, 10);
            const prefferedDenome: number = parseInt(denome, 10);
            if (isNaN(numericAmount)) {
                return void 0;
            }
            const tempCount: Array<number> = [];
            const resultArray: Array<ResultObject> = [];
            const selectedDenominations = isNaN(prefferedDenome) ? denominations : denominations.filter(e => e <= prefferedDenome);
            selectedDenominations.forEach((note: number, index: number) => {
                if (numericAmount >= note) {
                    tempCount[index] = Math.floor(numericAmount / note);
                    numericAmount = numericAmount - (tempCount[index] * note);
                }
            });
            selectedDenominations.forEach((note: number, index: number) => {
                resultArray[index] = typeof tempCount[index] === 'undefined' ? { count: 0, note } : { count: tempCount[index], note };
            });

            return resultArray;
        } catch (err) {
            return void 0;
        }
    }
    return void 0;
};

