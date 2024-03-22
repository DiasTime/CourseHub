import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  courses: [],
}

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourses(state, action) {
      state.courses = action.payload
    }
  },
})

export const courseSelector = state => state.course

export const { setCourses } = courseSlice.actions
export default courseSlice.reducer;
