# == Route Map
#
#           Prefix Verb   URI Pattern                      Controller#Action
#     fan_comments GET    /fan_comments(.:format)          fan_comments#index
#                  POST   /fan_comments(.:format)          fan_comments#create
#  new_fan_comment GET    /fan_comments/new(.:format)      fan_comments#new
# edit_fan_comment GET    /fan_comments/:id/edit(.:format) fan_comments#edit
#      fan_comment GET    /fan_comments/:id(.:format)      fan_comments#show
#                  PATCH  /fan_comments/:id(.:format)      fan_comments#update
#                  PUT    /fan_comments/:id(.:format)      fan_comments#update
#                  DELETE /fan_comments/:id(.:format)      fan_comments#destroy
#          reviews GET    /reviews(.:format)               reviews#index
#                  POST   /reviews(.:format)               reviews#create
#       new_review GET    /reviews/new(.:format)           reviews#new
#      edit_review GET    /reviews/:id/edit(.:format)      reviews#edit
#           review GET    /reviews/:id(.:format)           reviews#show
#                  PATCH  /reviews/:id(.:format)           reviews#update
#                  PUT    /reviews/:id(.:format)           reviews#update
#                  DELETE /reviews/:id(.:format)           reviews#destroy
#          authors GET    /authors(.:format)               authors#index
#                  POST   /authors(.:format)               authors#create
#       new_author GET    /authors/new(.:format)           authors#new
#      edit_author GET    /authors/:id/edit(.:format)      authors#edit
#           author GET    /authors/:id(.:format)           authors#show
#                  PATCH  /authors/:id(.:format)           authors#update
#                  PUT    /authors/:id(.:format)           authors#update
#                  DELETE /authors/:id(.:format)           authors#destroy
#            users GET    /users(.:format)                 users#index
#                  POST   /users(.:format)                 users#create
#         new_user GET    /users/new(.:format)             users#new
#        edit_user GET    /users/:id/edit(.:format)        users#edit
#             user GET    /users/:id(.:format)             users#show
#                  PATCH  /users/:id(.:format)             users#update
#                  PUT    /users/:id(.:format)             users#update
#                  DELETE /users/:id(.:format)             users#destroy
#            books GET    /books(.:format)                 books#index
#                  POST   /books(.:format)                 books#create
#         new_book GET    /books/new(.:format)             books#new
#        edit_book GET    /books/:id/edit(.:format)        books#edit
#             book GET    /books/:id(.:format)             books#show
#                  PATCH  /books/:id(.:format)             books#update
#                  PUT    /books/:id(.:format)             books#update
#                  DELETE /books/:id(.:format)             books#destroy
#      hello_index GET    /hello/index(.:format)           hello#index
#       hello_show GET    /hello/show(.:format)            hello#show

Rails.application.routes.draw do
  resources :members
  resources :fan_comments
  resources :reviews
  resources :authors
  resources :users
  resources :books
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'hello/index'
  get 'hello/show'
  get 'view/keyword'
  get 'view/form_tag'
  get 'view/form_for'
  post 'view/create'
  get 'view/select'
  get 'view/col_select'
  get 'view/group_select'
  get 'view/dat_select'
  get 'view/col_radio'
  get 'view/fields'
  get 'view/simple_format'
  get 'view/truncate'
  get 'view/sanitize'
  get 'view/link'
  get 'view/helper'
  get 'view/nest'
  post 'keyword/search'
  get 'record/find_by2'
  get 'record/keyword'
  post 'record/ph1'
  get 'ctrl/upload'
  post 'ctrl/upload_process'
  get 'ctrl/updb(/:id)' => 'ctrl#updb'
  put 'ctrl/updb_process(/:id)' => 'ctrl#updb_process'

end
