const result = (state = [], action)=> {

  switch (action.type) {
  case 'TODO_LOADED':
    return action.data;
  }

  return state;
};

export default result;