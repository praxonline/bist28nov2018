const urls = {
 //api_url: "http://doctorinout.com/api/v1/",
   api_url: "http://dev.doctorinout.com/api/v1/",
  register: "User/create",
  registerPatient:"User/createPatient",
  auth: "User/Auth",
  user:"User",
  deleteMR:"Builder/deleteMr",
  getAllDocMR:"Builder/getMrByDocId",
  getTodayDocMR:"Builder/getTodayMrByDocId",
  getTimeByDocId:"User/getTimeById",
  getPatientByDoc:"Home/getPatientByDoc",
  getPatientByDocId:"Home/getPatientByDocId",
  receptionByDocId:"User/getreceptionByDocId",
  BillFileUpload:"Builder/fileUpload",
  checkPhone:"Home/checkPhone",
  Addreception:"User/Addreception",
  editReception:"User/editReception",
  editDocprofile:"User/editDocprofile",
  getUserProfile:"User/getProfile",
  savePushData:"User/savePushData",
  setHold:"User/setHold",
  addPatientInfo:"Builder/create",
  addMrInfo:"Builder/MRcreate",
  uploadTodayBook:"Builder/uploadTodayBook",
  UpdatePatientInfo:"Builder/update",
  getPandingPatient:"Builder/getPandingPatient",
  deletePatient:"Builder/delete",
  getAppomentList:"Builder/getAppomentList",
  markFavorite:"Builder/markFavorite",
  getTodayAllPatient:"Builder/getTodayAllPatient",
  updatePass:"User/UpdatePassword",
  getDonePatient:"Home/getDonePatient",
  deleteReception:"User/delete",
  Builder:"Builder",
  house:"Home",
  addHome:"Home/create",
  addUser:"User/create",
  addBuilder:"Builder/create",
  BuilderById:"Builder/view",
  getHomeByBuilder:"Home/viewByBuildId",
  userByBuilderId:"User/viewByBuildId",
  setValidity:"Builder/setValidity",
  forgot_password: "User/forgot_password",
  logout: "user/logout",
  homeListUpload:"Home/fileUpload"
};

const constants = {
  APP_VERSION: "1.0.3",
  TOAST_TIME: 4000, // in milliseconds
  SUC_DBLUP_AGE: 10, // in hours
  SUC_DATA_SYNC_AGE: 60, // in minutes
  TERMS_URL: "https://lawyerdiaryapp.com/m/terms-of-use",
  PRIVACY_URL: "https://lawyerdiaryapp.com/m/privacy-policy",
  IS_ONLINE: true, // Used to make a create case offline,
  /*
    IS_DEV_APP
    true while developing app using DEV_APP.
    This will no include plugins, make it false after development
  */
  IS_DEV_APP: false
};

const messages = {
  invalid_username:"invalid username or password",
  db_lookup_api_error: "db_lookup_api_error",
  data_sync: "Data is syncing-up",
  network_error: "No internet. App requires internet",
  logout_error: "No internet. Logout requires internet",
  lookupdata_sync: "Look-up data synced-up",
  lodata_sync: "Your data synced-up",
  went_wrong: "Something went wrong. Try it latter",
  non_Active:"Your account is temporarily blocked please contact customer care:07554274736",
  Expire_Account:"Your account is expired please contact customer care:07554274736",
  calender_view: {
    no_case: "No Cases",
    no_todo: "No To-dos"
  },
  register: {
    no_internet: "No internet. App requires internet",
    required: "field is required",
    atleast_3_chars: "should be atleast of 3 chars",
    only_alphabets: "should contain only alphabets",
    success_register: "Please check your email to activate your account",
    email_valid: "Email Address is not valid",
    phone_valid: "Phone number should be of 10 chars",
    phone_invalid: "Phone number is not valid",
    password_valid: "Password should be of atleast 4 chars",
    password_special_characters_valid: "Enter number and characters only",
    confirm_password_valid: "Password and confirm password should be same",
    terms: "You have to accept the terms and conditions"
  },
  law_office: {
    no_internet: "No internet. App requires internet",
    required: "field is required",
    phone_valid: "Phone number should be of 10 chars",
    terms: "You have to accept the terms and conditions",
    pin_valid: "Pin number should be of 6 chars",
    skipMess:"Your account is yet to be linked to a Law firm. Do you want to set it up now?",
    message:
      "Your Law office  account is created. Add your cases."
  },
  contact: {
    no_internet: "No internet. App requires internet",
    required: "field is required",
    comment: "Comments should be of atleast 10 chars",
    message: "Thanks. Your message will be responded in 1 business day"
  },
  forgot_password: {
    no_internet: "No internet. App requires internet",
    success_forgot_password: "Please check your email to get your New Password"
  },
  new_case: {
    case_number_valid: "Case Number should contain only numbers",
    case_number_length: "Case Number should not greater than 6 chars"
  },
  settings: {
    db_lookup_api_error: "db_lookup_api_error",
    network_error: "No internet. App requires internet",
    admin_message: "YOU ARE AN ADMIN",
    required: "Required",
    only_alphabets: "Only Alphabets",
    email_valid: "Invalid Email",
    phone_valid: "Invalid Phone Number",
    password_valid: "Invalid Password",
    confirm_password_valid: "Password is not same",
    atleast_3_chars: " requires min three characters",
    atleast_1_chars: " requires min one character",
    atleast_2_chars: " requires min two characters",
    rolenow: "Please select a role",
    LawofficesetUp:"Your account is yet to be linked to a Law Firm. Go to Settings and then enter Law office details."
  },
  new_appt: {
    validation: {
      meeting_with: "Please select meeting with",
      subject: "Please select subject",
      when_date: "Please select date",
      when_from_time: "Please select from time",
      when_to_time: "Please select to time"
    },
    success: {
      message: "Appointment added",
      duration: "2500"
    }
  },
  edit_appt: {
    validation: {
      meeting_with: "Please select meeting with",
      subject: "Please select subject",
      when_date: "Please select date",
      when_from_time: "Please select from time",
      when_to_time: "Please select to time"
    },
    success: {
      message: "Appointment update",
      duration: "2500"
    }
  },
  add_note: {
    validations: {
      case: "Please select a case",
      description: "Please enter some note text"
    },
    message: {
      success: "Notes added",
      success_edit: "Notes updated",
      error: "Error adding note."
    }
  },
  add_todo: {
    validations: {
      case: "Please select a case",
      due_date: "Please select due date",
      description: "Please enter some description"
    },
    message: {
      success: "Todo added",
      success_edit: "Todo updated",
      error: "Error adding todo."
    }
  }
};

export { urls, messages, constants };