const stringToHtml = (stringHtml) => {

    const el = document.createElement('div');
    el.innerHTML = stringHtml;
    return el.firstElementChild;
}
export default stringToHtml;


