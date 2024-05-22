import { createSlice} from "@reduxjs/toolkit"
import { userList } from "../asset/Data";

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers:{
        addUser: (state, action) => {
             state.push(action.payload)
            console.log("The action",action)
        }
        
    }
})
export const {addUser} = userSlice.actions
export default userSlice.reducer;