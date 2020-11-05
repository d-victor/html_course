function getErrorModeMessadge(messadge,mode) {
    return messadge.replace(/::error::/gi, mode);
}
export default getErrorModeMessadge;
