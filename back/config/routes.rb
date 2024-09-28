Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      root to: "bases#index"
    end
  end
end
