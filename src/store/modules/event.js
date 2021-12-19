import EventService from '@/services/EventService.js';

export const namespaced = true;

export const state = {
  todos: [
    { id: 1, text: '...', done: true },
    { id: 2, text: '...', done: false },
    { id: 3, text: '...', done: true },
    { id: 4, text: '...', done: false },
  ],
  events: [],
  eventsTotal: 0,
  event: {},
};

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event);
  },
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENTS_TOTAL(state, total) {
    state.eventsTotal = total;
  },
  SET_EVENT(state, event) {
    state.event = event;
  },
};

export const actions = {
  createEvent({ commit }, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event);
    });
  },
  fetchEvents({ commit, dispatch }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then((res) => {
        commit('SET_EVENTS_TOTAL', res.headers['x-total-count']);
        commit('SET_EVENTS', res.data);
      })
      .catch((error) => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching events: ' + `${error.message}`,
        };
        dispatch('notification/add', notification, { root: true });
      });
  },
  fetchEvent({ commit, getters, dispatch }, id) {
    const event = getters.getEventById(id);

    if (event) {
      commit('SET_EVENT', event);
    } else {
      EventService.getEvent(id)
        .then((res) => {
          commit('SET_EVENT', res.data);
        })
        .catch((error) => {
          const notification = {
            type: 'error',
            message:
              'There was a problem fetching event: ' + `${error.message}`,
          };
          dispatch('notification/add', notification, { root: true });
        });
    }
  },
};

export const getters = {
  catLength: (state) => {
    return state.categories ? state.categories.length : 0;
  },
  doneTodos: (state) => {
    return state.todos.filter((todo) => todo.done);
  },
  activeTodosCount: (state, getters) => {
    return state.todos.length - getters.doneTodos.length;
  },
  activeTodosCount2: (state) => {
    return state.todos.filter((todo) => !todo.done).length;
  },
  getEventById: (state) => (id) => {
    return state.events.find((event) => event.id === id);
  },
};
