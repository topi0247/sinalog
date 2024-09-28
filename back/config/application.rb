require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module App
  class Application < Rails::Application
    config.load_defaults 7.2
    config.autoload_lib(ignore: %w[assets tasks])
    config.api_only = true
    config.generators.system_tests = nil
    config.generators do |g|
      g.skip_routes true
      g.helper false
      g.test_framework nil
    end
  end
end
