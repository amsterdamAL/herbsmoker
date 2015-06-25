class ChatsController < ApplicationController
  require 'opentok'
  def demo
    
    
    
    @api_key = ENV['api_key']
    @api_secret = ENV['api_secret']
    

    opentok = OpenTok::OpenTok.new "45266732", "141dc7cc7d8eddac8c0a4be35b910ea080936de6"
    
    
    session = opentok.create_session
    
    @session_id = session.session_id
    
    @token = opentok.generate_token session_id
   
  end
  
end
