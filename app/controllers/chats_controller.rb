class ChatsController < ApplicationController
  require 'opentok'
  
  
  def demo
    
    
    api_key = ENV['api_key']
    api_secret = ENV['api_secret']
    
    
    opentok = OpenTok::OpenTok.new api_key, api_secret
    
    session = opentok.create_session
    @token = session.generate_token
    @session_id = session.session_id
    
    
  end
  
  
  
end
