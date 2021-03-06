export abstract class Constants {
    static readonly DATE_FORMAT = "MM/dd/yyyy HH:mm:ss"
}

export abstract class ApiEndpoints {
    static readonly USERS = "/users"
    static readonly VALIDATIONS = "/validations"
    static readonly DATATYPES = "/datatypes"
}

export abstract class AppRoutes {
    static readonly HOME = "home"
    static readonly HOME_SLASH = `/${AppRoutes.HOME}`
    static readonly LOGIN = "login"
    static readonly LOGIN_SLASH = `/${AppRoutes.LOGIN}`
    static readonly VALIDATION = "validation"
    static readonly VALIDATION_SLASH = `/${AppRoutes.VALIDATION}`
    static readonly VALIDATING_LOADING = "loading"
    static readonly VALIDATING_LOADING_SLASH = `/${AppRoutes.VALIDATING_LOADING}`
    static readonly VALIDATING_MATCHING = "matching"
    static readonly VALIDATING_MATCHING_SLASH = `/${AppRoutes.VALIDATING_MATCHING}`
    static readonly VALIDATING_PAYMENT = "payment"
    static readonly VALIDATING_PAYMENT_SLASH = `/${AppRoutes.VALIDATING_PAYMENT}`
    static readonly ACCOUNT = "account"
    static readonly ACCOUNT_SLASH = `/${AppRoutes.ACCOUNT}`
    static readonly SETTINGS = "settings"
    static readonly SETTINGS_SLASH = `/${AppRoutes.SETTINGS}`   
    static readonly ACCOUNTDETAIL = "accountDetail"
    static readonly ACCOUNTDETAIL_SLASH = `/${AppRoutes.ACCOUNTDETAIL}`
    static readonly ACCOUNTDETAILWITHID = "accountDetail/:id"
    static readonly ACCOUNTDETAILWITHID_SLASH = `/${AppRoutes.ACCOUNTDETAILWITHID}`
    static readonly PROFILE = "profile"
    static readonly PROFILE_SLASH = `/${AppRoutes.PROFILE}`
    static readonly NEW_VALIDATION = "newvalidation"
    static readonly NEW_VALIDATION_SLASH = `/${AppRoutes.NEW_VALIDATION}`
    static readonly FORGOTPASSWORD="forgotpassword"
    static readonly FORGOTPASSWORD_SLASH = `/${AppRoutes.FORGOTPASSWORD}`
}