set :stage, :staging
set :rails_env, :staging

# There is duplication here with sync.rake!

server = 'app.staging.9elements.com'

role :app, server, user: 'user'
role :web, server, user: 'user'
role :db,  server, user: 'user'

set :deploy_to, '/home/app/client/staging'
set :branch, ENV['BRANCH'] || 'master'
