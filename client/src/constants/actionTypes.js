//We'll be creating variables for our action file. The reason is that if we misspelled any 
//string (as in the case of UPDATE -> UPDTE), there will be no error in console on inspecting
//but the app won't work. As in this case it keeps loading. To rectify this issue, we'll declare
//all of these strings in variables here

export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const FETCH_ALL = 'FETCH_ALL';