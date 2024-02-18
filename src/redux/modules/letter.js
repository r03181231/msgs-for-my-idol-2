import dummyData from "../../shared/fakeData";
// counter.js

// action value

const SET_TAB = "SET_TAB";
const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";
const SET_LETTER_VALUE = "SET_LETTER_VALUE";
const SET_LETTER_EDIT = "SET_LETTER_EDIT";
const SET_LETTER_DELETE = "SET_LETTER_DELETE";

// action creator : action value를 return하는 함수
export const setTab = (payload) => {
  return {
    type: SET_TAB,
    payload,
  };
};
export const setActiveTab = (payload) => {
  return {
    type: SET_ACTIVE_TAB,
    payload,
  };
};
export const setLetterValue = (payload) => {
  return {
    type: SET_LETTER_VALUE,
    payload,
  };
};

export const setLetterEdit = (payload) => {
  return {
    type: SET_LETTER_EDIT,
    payload,
  };
};

export const setLetterDelete = (letterValue) => {
  return {
    type: SET_LETTER_DELETE,
    payload: letterValue,
  };
};

const initialState = {
  tabData: [
    {
      tabNum: 1,
      writedTo: "정승환",
    },
    {
      tabNum: 2,
      writedTo: "권진아",
    },
    {
      tabNum: 3,
      writedTo: "샘킴",
    },
    {
      tabNum: 4,
      writedTo: "이진아",
    },
  ],

  activeTab: {
    tabNum: 1,
    writedTo: "정승환",
  },

  tab: {
    tabNum: 1,
    writedTo: "정승환",
  },
  letterValue: dummyData,
};

//원래라면
// const [number, setNumber] = useState(0); 지만 위처럼 바꾼거야.

// input : state, action
const letter = (state = initialState, action) => {
  switch (action.type) {
    // TabMenu
    case SET_TAB:
      return { ...state, tab: action.payload };
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    // FormAdd
    case SET_LETTER_VALUE:
      return {
        ...state,
        letterValue: [action.payload, ...state.letterValue],
      };
    // EditDetail - edit, delete
    case SET_LETTER_EDIT:
      return {
        ...state,
        letterValue: action.payload,
      };
    // EditDetail - delete
    case SET_LETTER_DELETE:
      const letterData = state.letterValue.filter(
        (stayTodo) => stayTodo.id !== action.payload
      );
      return { ...state, letterValue: letterData };
    default:
      return state;
  }
};

export default letter;
