class ChatsController < ApplicationController
  require 'opentok'
  def demo
    
    
    
    @api_key = ENV['api_key']
    @api_secret = ENV['api_secret']
    

    
    
    
    @token = opentok.generate_token @session_id
   
  end
  
  def token
    @token = opentok.generate_token @session_id
  end
  
end
