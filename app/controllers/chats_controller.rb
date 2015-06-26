class ChatsController < ApplicationController
  require 'opentok'
  def demo
    
    @session_id = ENV['session_id']
    
    @api_key = ENV['api_key']
    @api_secret = ENV['api_secret']
    

    opentok = OpenTok::OpenTok.new "45266732", "141dc7cc7d8eddac8c0a4be35b910ea080936de6"
    
    
    
    
    
    
    @token = opentok.generate_token ENV['session_id']
   
  end
  
  def token
    @token = opentok.generate_token @session_id
  end
  
end
