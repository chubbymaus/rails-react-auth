if Rails.env == "production"
  Rails.application.config.session_store :cookie_store, 
    key: "_auth_app", 
    domain: "https://cpg-auth-app-api.herokuapp.com"
else
    Rails.application.config.session_store :cookie_store, 
    key: "_auth_app"
end  