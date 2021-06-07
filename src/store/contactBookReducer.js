const ADD_CONTACT = "ADD_CONTACT";
const DELETE_CONTACT = "DELETE_CONTACT";
const UPDATE_CONTACT = "UPDATE_CONTACT";

const initialState = [
  {
    name: "John",
    lastname: "Dorian",
    age: 27,
    pager: 926545,
  },
  {
    name: "Carla",
    lastname: "Espinosa",
    age: 28,
    pager: 945455,
  },
  {
    name: "Perry",
    lastname: "Cox",
    age: 40,
    pager: 955654,
  },
  {
    name: "Robert",
    lastname: "Celso",
    age: 58,
    pager: 128215,
  },
];

const defaultState = JSON.parse(localStorage.getItem("local-storage-key")) || initialState;

export const contactBookReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [
        {
          name: action.payload.name,
          lastname: action.payload.lastname,
          age: action.payload.age,
          pager: action.payload.pager,
        },
        ...state,
      ];
    case DELETE_CONTACT:
      return state.filter(item => item.pager !== action.payload.pager);

    case UPDATE_CONTACT:
      return state.map(item => {
        return item.pager === action.payload.oldPager ? action.payload : item;
      });

    default:
      return state;
  }
};

export const delContactAction = payload => ({ type: DELETE_CONTACT, payload });
export const addContactAction = payload => ({ type: ADD_CONTACT, payload });
export const updateContactAction = payload => ({ type: UPDATE_CONTACT, payload });
