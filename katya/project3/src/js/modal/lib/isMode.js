const modeAlert = 'alert';
const modeConfirm = 'confirm';
const modePromt = 'promt';

function isMode(mode){
    return (mode === modeAlert || mode === modeConfirm || mode === modePromt);
}


export {modeAlert,modeConfirm,modePromt};

export default isMode;
