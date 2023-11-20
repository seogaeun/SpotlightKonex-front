const initialState = {
    crop_id: null,
    // 다른 상태 프로퍼티들
  };
  const cropReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CROP_ID':
        return {
          ...state,
          crop_id: action.crop_id,
        };
      // 다른 액션 타입들에 대한 처리
      default:
        return state;
    }
  };

export default cropReducer;