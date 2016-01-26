set :default_env, {
  'PATH' => '/opt/ruby-2.2.2/bin:PATH=$PATH'
}

set :application, 'teamreader'
set :repo_url, 'git@gitlab-production-redqueen.9elements.com:sebastian.deutsch/TeamReader.git'
set :repo_tree, 'client'

set :ssh_options, { forward_agent: true }

set :npm_flags, ''

namespace :npm do
  task :build_webpack_production do
    on roles fetch(:npm_roles) do
      within fetch(:npm_target_path, release_path) do
        with fetch(:npm_env_variables, {}) do
          execute :npm, 'run build:webpack:production', fetch(:npm_flags)
        end
      end
    end
  end
end

namespace :deploy do
  after :finishing, 'npm:build_webpack_production'
end
