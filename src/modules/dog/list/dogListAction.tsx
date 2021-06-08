import Errors from 'src/view/shared/errors';
import DogService from '../dogService';

const prefix = 'DOG_LIST';

const listDogActions = {
  LIST_STARTED: `${prefix}_LIST_STARTED`,
  LIST_SUCCESS: `${prefix}_LIST_SUCCESS`,
  LIST_ERROR: `${prefix}_LIST_ERROR`,

  RANDOM_STARTED: `${prefix}_RANDOM_STARTED`,
  RANDOM_SUCCESS: `${prefix}_RANDOM_SUCCESS`,
  RANDOM_ERROR: `${prefix}_RANDOM_ERROR`,

  SELECT_STARTED: `${prefix}_SELECT_STARTED`,
  SELECT_SUCCESS: `${prefix}_SELECT_SUCCESS`,
  SELECT_ERROR: `${prefix}_SELECT_ERROR`,

  SELECT_SUB_STARTED: `${prefix}_SELECT_SUB_STARTED`,
  SELECT_SUB_SUCCESS: `${prefix}_SELECT_SUB_SUCCESS`,
  SELECT_SUB_ERROR: `${prefix}_SELECT_SUB_ERROR`,

  RESETED: `${prefix}_RESETED`,

  doInit: () => async (dispatch) => {
    dispatch(listDogActions.doRandom());
  },

  doRandom: () => async (dispatch) => {
    try {
      dispatch({
        type: listDogActions.RANDOM_STARTED,
      });
      const response = await DogService.random();
      dispatch({
        type: listDogActions.RANDOM_SUCCESS,
        payload: {
          rows: response.rows,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: listDogActions.RANDOM_ERROR,
      });
    }
  },

  doFetchDogs: () => async (dispatch) => {
    try {
      dispatch({
        type: listDogActions.LIST_STARTED,
      });

      const response = await DogService.list();

      dispatch({
        type: listDogActions.LIST_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: listDogActions.LIST_ERROR,
      });
    }
  },

  doSelectBreed: (breedName) => async (dispatch) => {
    try {
      dispatch({
        type: listDogActions.SELECT_STARTED,
      });

      const response = await DogService.selecBreed(
        breedName,
      );

      dispatch({
        type: listDogActions.SELECT_SUCCESS,
        payload: {
          rows: response.rows,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: listDogActions.SELECT_ERROR,
      });
    }
  },

  doSelectSubBreed:
    (breedName, subBreedName) => async (dispatch) => {
      try {
        dispatch({
          type: listDogActions.SELECT_SUB_STARTED,
        });

        const response = await DogService.selectSubBreed(
          breedName,
          subBreedName,
        );

        dispatch({
          type: listDogActions.SELECT_SUB_SUCCESS,
          payload: {
            rows: response.rows,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: listDogActions.SELECT_SUB_ERROR,
        });
      }
    },
};

export default listDogActions;
