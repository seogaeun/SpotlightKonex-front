export const SET_CROP_ID = 'SET_CROP_ID';

export const setCropIid = (crop_id) => {
  return {
    type: SET_CROP_ID,
    crop_id,
  };
};