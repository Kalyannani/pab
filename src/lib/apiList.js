export const server = "http://localhost:4444";

const apiList = {
  login: `${server}/auth/login`,
  signup: `${server}/auth/signup`,
  sendOTP: `${server}/auth/mobile/send-otp`,
  verifyOTP: `${server}/auth/mobile/verify-otp`,
  contactSendOTP: `${server}/auth/contact-verification/send-otp`,
  contactVerifyOTP: `${server}/auth/contact-verification/verify-otp`,
  forgotPassword: `${server}/auth/forgot-password`,
  mobilelogin: `${server}/auth/mobilelogin`,
  uploadResume: `${server}/upload/resume`,
  uploadProfileImage: `${server}/upload/profile`,
  jobs: `${server}/api/jobs`,
  applications: `${server}/api/applications`,
  rating: `${server}/api/rating`,
  user: `${server}/api/user`,
  applicants: `${server}/api/applicants`,
  sendotp:`${server}/api/sendotp`,
  alljobs:`${server}/api/alljobs`,
  jobSearch:`${server}/api/jobs/search`,
  listFiveCompanies:`${server}/api/company/list/filter`,
  listCompanies:`${server}/api/company/list`,
  listSkills:`${server}/api/skills/list`,
  searchFilterList:`${server}/api/search/list`,
  changepassword:`${server}/api/changepassword`,
  resumeUpload: `${server}/api/resume/upload`,
  profileUpload: `${server}/api/profile/upload`,
  wishlist: `${server}/api/wishlist/`
};

export default apiList;
