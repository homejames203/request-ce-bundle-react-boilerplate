import axios from 'axios';
import { push } from 'react-router-redux';
import { isLoop, getModel, getCmd, Cmd } from 'bdwain-redux-loop';
import reducer, { actions, defaultState, types } from './profile';

jest.mock('react-kinetic-core', () => ({
  bundle: {
    apiLocation: () => 'space/app/api/v1',
  },
}));

describe('profile redux module', () => {
  describe('action creators', () => {
    test('clearProfile', () => {
      const action = actions.clearProfile('dumbAction');
      expect(action.type).toBe(types.CLEAR_PROFILE);
      expect(action.payload).toBe('dumbAction');
    });

    test('fetchProfile', () => {
      const action = actions.fetchProfile('dumbAction');
      expect(action.type).toBe(types.FETCH_PROFILE);
      expect(action.payload).toBe('dumbAction');
    });

    test('fetchProfileSuccess', () => {
      const action = actions.fetchProfileSuccess('dumbAction');
      expect(action.type).toBe(types.FETCH_PROFILE_SUCCESS);
      expect(action.payload).toBe('dumbAction');
    });

    test('fetchProfileError', () => {
      const action = actions.fetchProfileError('dumbAction');
      expect(action.type).toBe(types.FETCH_PROFILE_ERROR);
      expect(action.payload).toBe('dumbAction');
    });
  });

  describe('reducer', () => {
    test('initializes with the default state', () => {
      expect(reducer(undefined, {})).toEqual(defaultState);
    });

    test('CLEAR_PROFILE sets to the default state', () => {
      const before = { loaded: true, failed: true, data: 'foo' };
      expect(reducer(before, actions.clearProfile())).toEqual(defaultState);
    });

    test('FETCH_PROFILE sets loaded to false and returns command', () => {
      const before = { loaded: true, failed: true, data: 'foo' };
      const state = reducer(before, actions.fetchProfile());
      expect(isLoop(state)).toBeTruthy();
      expect(getModel(state)).toEqual({ loaded: false, failed: true, data: 'foo' });
      expect(getCmd(state)).toEqual(Cmd.run(axios, {
        args: [{ url: 'space/app/api/v1/me', method: 'get' }],
        successActionCreator: actions.fetchProfileSuccess,
        failActionCreator: actions.fetchProfileError,
      }));
    });

    test('FETCH_PROFILE_SUCCESS sets loaded to true and sets data to response', () => {
      const before = { loaded: false, failed: true, data: null };
      const state = reducer(before, actions.fetchProfileSuccess({ data: { body: 'hi' } }));
      expect(state).toEqual({ loaded: true, failed: false, data: { body: 'hi' } });
    });

    test('FETCH_PROFILE_ERROR sets loaded to true and sets failed to true', () => {
      const before = { loaded: false, failed: false, data: null };
      const state = reducer(before, actions.fetchProfileError({ response: { status: 500 } }));
      expect(state).toEqual({ loaded: true, failed: true, data: 500 });
    });

    test('UPDATE PROFILE sets saving to true and returns command', () => {
      const before = { loaded: true, failed: false, saving: false, data: 42 };
      const state = reducer(before, actions.updateProfile({ value: 'Hello World' }));
      expect(isLoop(state)).toBeTruthy();
      expect(getModel(state)).toEqual({ loaded: true, failed: false, saving: true, data: 42 });
      expect(getCmd(state)).toEqual(Cmd.run(axios, {
        args: [{ url: 'space/app/api/v1/me', method: 'put', data: { value: 'Hello World' } }],
        successActionCreator: actions.updateProfileSuccess,
        failActionCreator: actions.updateProfileError,
      }));
    });

    test('UPDATE PROFILE SUCCESS sets saving to false and returns command', () => {
      const before = { loaded: true, failed: false, saving: true, data: { foo: 'bar' } };
      const state = reducer(before, actions.updateProfileSuccess({ data: { user: { foo: 'baz' } } }));
      expect(isLoop(state)).toBeTruthy();
      expect(getModel(state)).toEqual({ loaded: true, failed: false, saving: false, data: { foo: 'baz' } });
      expect(getCmd(state)).toEqual(Cmd.action(push('/')));
    });

    test('UPDATE PROFILE ERROR sets saving to false error and failed to true', () => {
      const before = { loaded: true, failed: false, saving: true, data: { foo: 'bar' } };
      const state = reducer(before, actions.updateProfileError({ response: { status: 400 } }));
      expect(state).toEqual({ loaded: true, failed: true, saving: false, data: 400 });
    });
  });
});
