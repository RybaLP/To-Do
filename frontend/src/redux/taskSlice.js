import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTasks, addTask } from "../../api/taskService";

export const fetchTasksAsync = createAsyncThunk("tasks/fetch", async () => {
    return await fetchTasks();
});

export const addTaskAsync = createAsyncThunk("tasks/add", async (taskData) => {
    return await addTask(taskData);
});

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        loading: false,
        error: null    
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasksAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTasksAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = action.payload; // Oczekujemy listy zadań
            })
            .addCase(fetchTasksAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Obsługa błędów
            })
            .addCase(addTaskAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addTaskAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks.push(action.payload); // Dodajemy nowe zadanie
            })
            .addCase(addTaskAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Obsługa błędów
            });
    }
});

export default taskSlice.reducer;
