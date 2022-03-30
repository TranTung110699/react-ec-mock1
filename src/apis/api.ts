export const apiUrls = {
  //auth
  loginApi: "/v1/auth/login",
  registerApi: "/v1/auth/register",
  logoutApi: "/v1/auth/logout",
  refreshTokenApi: "/v1/auth/refresh-tokens",

  //user
  getQuestionApi: "/v1/questions/",
  submitAnswerApi: "/v1/questions/submit",

  //admin(post, patch, delete, get)
  editAdminQuestionApi: "v1/questions/edit",
  adminManageUserApi: "/v1/users/",
};
