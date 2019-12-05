import {ADD,MODIF,COMPLIT,SUP} from './actionTypes';
export function add(payload)
{
return {type:ADD,payload};
}
export function modif (payload)
{
    return {type:MODIF ,payload};
}
export  function complit (payload)
{
    return {type:COMPLIT ,payload};
} 
export function sup(payload)
{
    return {type:SUP,payload};
}