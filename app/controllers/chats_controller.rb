class ChatsController < ApplicationController
  
  def demo
    require "opentok"
    
    
    @api_key = ENV['api_key']
    @api_secret = ENV['api_secret']
    

    opentok = OpenTok::OpenTok.new @api_key, @api_secret
    
    
    session = opentok.create_session
    
    @session_id = session.session_id
    
    @token = @session_id.generate_token
  end
  
end
