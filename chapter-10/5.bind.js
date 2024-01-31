function logContext() {
    console.log("User Type: " + this.userType);
}

var superAdmin = {
    userType: "Super Admin"
};

var registeredUser = {
    userType: "Registered User"
};

var guestUser = {
    userType: "Guest User"
}

var superAdminLog = logContext.bind(superAdmin);
var registeredUserLog = logContext.bind(registeredUser);
var guestUserLog = logContext.bind(guestUser);

superAdminLog(); // User Type: Super Admin
registeredUserLog(); // User Type: Registered User
guestUserLog(); // User Type: Guest User

