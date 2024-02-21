import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { letterApi } from "api/letterApi";

const initialState = {
  setletterErrorStatus: null,
  setletterErrorMessage: null,

  getLetterError: null,
  getLetterErrorStatus: null,
  getletterErrorMessage: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
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
  letterValue: [],
};

//원래라면
// const [number, setNumber] = useState(0); 지만 위처럼 바꾼거야.
export const __getletterCards = createAsyncThunk(
  "letter/getLetters",

  async (_, thunkAPI) => {
    try {
      const { data } = await letterApi.getLetters();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __setletterCard = createAsyncThunk(
  "letter/LetterCard",
  async (addValue, thunkAPI) => {
    try {
      const response = await letterApi.postLetters(addValue);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __patchLetterCard = createAsyncThunk(
  "letter/patchLetterCard",
  async (editData, thunkAPI) => {
    try {
      const { data } = await letterApi.patchLetters(editData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(__setletterCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__setletterCard.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(__setletterCard.rejected, (state, action) => {
        const errorStatus = action.payload.response.status;
        const errorMessage = action.payload.response.data.message;
        state.isLoading = false;
        state.isError = true;

        state.error = action.payload;
        state.setletterErrorStatus = errorStatus;
        state.setletterErrorMessage = errorMessage;
      });
    //getletterCard
    builder
      .addCase(__getletterCards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__getletterCards.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.letterValue = action.payload;
      })
      .addCase(__getletterCards.rejected, (state, action) => {
        console.log(action.payload);
        const errorStatus = action.payload.response.status;
        const errorMessage = action.payload.response.data.message;
        state.isLoading = false;
        state.isError = true;

        state.error = action.payload;
        state.setletterErrorStatus = errorStatus;
        state.setletterErrorMessage = errorMessage;
      });
    builder
      .addCase(__patchLetterCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__patchLetterCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.letterValue = action.payload;
      })
      .addCase(__patchLetterCard.rejected, (state, action) => {
        const errorStatus = action.payload.response.status;
        const errorMessage = action.payload.response.data.message;
        state.isLoading = false;
        state.isError = true;

        state.error = action.payload;
        state.setletterErrorStatus = errorStatus;
        state.setletterErrorMessage = errorMessage;
      });
  },
});

export const {
  setTab,
  setActiveTab,
  setLetterValue,
  setLetterEdit,
  setLetterDelete,
} = letterSlice.actions;
export default letterSlice.reducer;
