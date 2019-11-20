Rails.application.config.middleware.insert_before 0, Rack::Cors do
  # allow local origins for development
  allow do
    origins "http://localhost:3000"
    resource "*", headers: :any, methods: [:get, :post, :put, :patch, :options, :head],credentials: true
  end
  # production app white list
  allow do
    origins "https://cpg-auth-app-react.herokuapp.com"
    resource "*", headers: :any, methods: [:get, :post, :put, :patch, :options, :head],credentials: true
  end
end