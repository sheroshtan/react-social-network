import { createSelector } from 'reselect';

export const getUsersSelector = (state) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {

    // filter only for practice with reselect library

    return users.filter(user => true);
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsLoading = (state) => {
    return state.usersPage.isLoading;
}

export const getIsFollowingInProgress = (state) => {
    return state.usersPage.isFollowingInProgress;
}