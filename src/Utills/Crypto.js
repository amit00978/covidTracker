import Store from 'store';

function getKey(item){
    return `@FINTRIP:SAAS:${item.toUpperCase()}`
}

const get=(key)=>{
    return Store.get(getKey(key))
}

const set=(key,value)=>{
    Store.set(getKey(key),value);
}


export {get,set}