
const initialState = {
  formData: null,
  error: null,

};



export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_FORM_DATA_SUCCESS':
      return {
        ...state,
        formData: action.payload,
        error: null,
      };
    case 'SAVE_FORM_DATA_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const initialState2 = {
  Students:[]
}

 
export const resultReducer = (state = initialState2, action) => {
  switch (action.type) {
    case "GET_DATA_SUCCESS":
      return {
        ...state,
        Students: action.payload,
      };
    case "GET_DATA_FAIL":
      return {
        ...state,
        Students: null,
        error: action.payload,
      };
    default:
      return state;
  }
};




