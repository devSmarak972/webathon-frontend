export const host = "http://localhost:3422";
// export const host = process.env.REACT_APP_SERVER;
export const loginRoute = `${host}/api/auth/login`;
export const registerRoute = `${host}/api/auth/createUser`;
// export const registerRoute = `${host}/api/auth/register`;
// export const registerRoute = `${host}/api/auth/register`;
export const logoutRoute = `${host}/api/auth/logout`;
export const allUsersRoute = `${host}/api/auth/allusers`;
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;
export const setAvatarRoute = `${host}/api/auth/setavatar`;
export const getAvatarRoute = `${host}/api/auth/getavatar`;
