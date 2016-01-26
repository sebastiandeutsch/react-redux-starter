set :stage, :production
set :rails_env, :production

server = 'app.production.9elements.com'

role :app, server, user: 'user'
role :web, server, user: 'user'
role :db,  server, user: 'user'

set :deploy_to, '/home/app/client/production'
set :branch, ENV['BRANCH'] || 'production'
