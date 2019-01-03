Rails.application.routes.draw do
  namespace :api do
    get 'posts/index'
    get 'posts/update'
    get 'posts/create'
    get 'posts/destroy'
  end
  namespace :api do
    resources :posts
    get 'users/index'
    get 'users/my_friends', to: 'static#index'
    get 'users/update'
  end
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
