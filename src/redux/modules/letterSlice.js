import { createSlice } from "@reduxjs/toolkit";
import dummyData from "../../shared/fakeData";

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
const letterSlice = createSlice({
  name: "letter",
  initialState,
  reducers: {
    setTab: (state, action) => {
      state.tab = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    // FormAdd
    setLetterValue: (state, action) => {
      state.letterValue = [action.payload, ...state.letterValue];
    },
    // EditDetail - edit, delete
    setLetterEdit: (state, action) => {
      state.letterValue = action.payload;
    },
    // EditDetail - delete
    setLetterDelete: (state, action) => {
      const letterData = state.letterValue.filter(
        (stayTodo) => stayTodo.id !== action.payload
      );
      state.letterValue = letterData;
    },
  },
  extraReducer: {},
});

export const {
  setTab,
  setActiveTab,
  setLetterValue,
  setLetterEdit,
  setLetterDelete,
} = letterSlice.actions;
export default letterSlice.reducer;
