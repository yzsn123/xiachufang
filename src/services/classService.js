import api from '../utils/api'
import Http from '../utils/Http'

export const requestClass = async()=>{
    let result = await Http.get(api.CLASS_ALL_API);
    // console.log(result);
    return result;
}

export const requestClassGuess = async()=>{
    let result = await Http.get(CLASS_GUESS_API);
    return result;
}

export default {
    requestClass,
    requestClassGuess
}
