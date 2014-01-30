# coding: utf-8
require 'sinatra'
require 'sinatra/reloader' if development? # auto-reload
require 'json'
require 'active_record'
require './models'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'db/test-sinatra.sqlite'
)

class Application < Sinatra::Base
  set :static, true
  set :public_folder, File.dirname(__FILE__) + '/public'
  configure :development, :production do
    enable :logging
    register Sinatra::Reloader
  end

  before do
    CAREERS = %w[攻城狮 射鸡湿 CEO]
    headers 'Access-Control-Allow-Origin' => '*',
            'Access-Control-Allow-Methods' => "OPTIONS, GET, POST",
            'Access-Control-Allow-Headers' => "accept, authorization, origin, X-Requested-With, Content-Type"
    params.delete('_dc')
  end

  helpers do
    def json_for(user)
      result = if user.nil?
                 { success: false }
               else
                 user.as_json.merge({ success: true })
               end
      result.to_json
    end
  end

  get '/' do
    @users = User.all
    erb :'users/index'
  end
  get '/foo' do
    @foo = "OMG"
    erb :foo
  end

  ### APIs
  post '/foo' do
    params['hobby'] = JSON.parse(params['hobby']).compact.join(",")
    user = User.new(params)
    #user.career = CAREER[user.career.to_i] # get some real...
    begin
      user.save!
      params.merge({ success: true }).to_json # add 'success' to meet Sencha
    rescue ActiveRecord::RecordInvalid
      { message: user.errors.full_messages, success: false }.to_json
    end
  end
  get '/users/first' do
    json_for(User.first)
  end

  put '/users/:id' do
  end

  post '/users/find' do
    logger.info "PARAMS:"
    logger.info params
    json_for(User.find_by_username(params[:name]))
  end

  options '/*' do
    200
  end
end
