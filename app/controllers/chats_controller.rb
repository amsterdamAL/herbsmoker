class ChatsController < ApplicationController
  
  def demo
    require "opentok"
    
    
    @api_key = ENV['api_key']
    @api_secret = ENV['api_secret']
    

    opentok = OpenTok::OpenTok.new "45266732", "141dc7cc7d8eddac8c0a4be35b910ea080936de6"
    
    
    session = opentok.create_session
    
    session_id = session.session_id
    @session_id = session_id
    
    @token = session_id.generate_token
  end
  
end
