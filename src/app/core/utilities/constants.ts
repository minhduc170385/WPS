export abstract class Constants {
     
}

export abstract class ApiEndpoints {
    static readonly USERS = "/users"
}

export abstract class AppRoutes {
    static readonly HOME = "home"
    static readonly HOME_SLASH = `/${AppRoutes.HOME}`
    static readonly LOGIN = "login"
    static readonly LOGIN_SLASH = `/${AppRoutes.LOGIN}`
    static readonly ACCOUNT = "account"
    static readonly ACCOUNT_SLASH = `/${AppRoutes.ACCOUNT}`
    static readonly SETTING = "setting"
    static readonly SETTING_SLASH = `/${AppRoutes.SETTING}`    
    static readonly ACCOUNTDETAIL = "accountDetail"
    static readonly ACCOUNTDETAIL_SLASH = `/${AppRoutes.ACCOUNTDETAIL}`
    static readonly ACCOUNTDETAILWITHID = "accountDetail/:id"
    static readonly ACCOUNTDETAILWITHID_SLASH = `/${AppRoutes.ACCOUNTDETAILWITHID}`
    static readonly PROFILE = "profile"
    static readonly PROFILE_SLASH = `/${AppRoutes.PROFILE}`
}