import axios from 'axios';

export const saveFormData = (obj) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:6002/StudentData', obj);
        dispatch({
            type: 'SAVE_FORM_DATA_SUCCESS',
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: 'SAVE_FORM_DATA_ERROR',
            payload: error,
        });
    }
};

export const getStudentData = (id) => async (dispatch) => {
    try {

        const {data} = await axios.get(`http://localhost:6002/StudentData/${id}`)
        
            dispatch({
              type: "GET_DATA_SUCCESS",
              payload: data,
            });
          }
    
      catch (error) {
        dispatch({
          type: "GET_DATA_FAIL",
          payload: error.message,
        });
      };
  };
