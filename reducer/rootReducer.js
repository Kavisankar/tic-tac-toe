
function getDefaultState() {
    return{
        history: [{
            values:Array.from({length:9},(v,k) => '-'),
            stepNumber: 0,
            hasWinner: false,
        }],
        undoHistory: [],
    }
}

function getHasWinner(values){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let line of lines){
        if(values[line[0]]!='-' && values[line[0]]==values[line[1]] && values[line[0]]==values[line[2]]){
            return true;
        }
    }
    return false;
}

function placeValue(state,id){
    let history = [...state.history];
    let current = {...history[history.length-1]};
    let values = [...current.values];
    let stepNumber = current.stepNumber;
    let hasWinner = current.hasWinner;
    if(!hasWinner){
        values[id] = stepNumber%2?'O':'X';
        hasWinner = getHasWinner(values);
        stepNumber++;
        history = history.concat({values,stepNumber,hasWinner});
    }
    return {
        history:history,
        undoHistory:[],
    }
}

function undo(state){
    let history = [...state.history];    
    let undoHistory = state.undoHistory;
    let historyLength = history.length;
    if (historyLength>1){
        let current = {...history[historyLength-1]};
        history = history.slice(0,historyLength-1);
        undoHistory = undoHistory.concat(current);
    }
    return{
        history,
        undoHistory,
    }
}

function redo(state){
    let history = [...state.history];    
    let undoHistory = state.undoHistory;
    let undoHistoryLength = undoHistory.length;
    if (undoHistoryLength>0){
        let current = {...undoHistory[undoHistoryLength-1]};
        undoHistory = undoHistory.slice(0,undoHistoryLength-1);
        history = history.concat(current);
    }
    return{
        history,
        undoHistory,
    }
}

export default function rootReducer(state=getDefaultState(),action){
    switch(action.type){
        case 'PLACE-VALUE':
            return placeValue(state,action.payload);
        case 'Restart':
            return getDefaultState();
        case 'Undo':
            return undo(state);
        case 'Redo':
            return redo(state);
        default:
            break;
    }
    return state;
}