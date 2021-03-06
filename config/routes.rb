Rails.application.routes.draw do

  resources :taglinks
  resources :tags
  resources :account_bases
  resources :budgets
  resources :categories
  resources :transactions
  root to: "static_pages#root"

  resources :users

  namespace :api, format: 'json' do
    resources :institutions, only: [:index, :create, :show]
    resources :accounts, only: [:create, :index, :show, :update, :destroy]
    resources :transactions, only: [:create, :index, :show, :update, :destroy]
    resources :categories
    resources :account_bases, only: [:index]
    resources :tags, only: [:create, :index, :destroy, :show]
    resources :taglinks, only: [:create, :destroy, :show]
    resources :users, only: [:show, :update, :index]
    resources :transaction_updates, only: [:index]
    resources :paginated_transactions, only: [:index]
    resources :transaction_searches, only: [:index]
  end

  resource :session, only: [:new, :create, :destroy]

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
