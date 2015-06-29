class ChatsController < ApplicationController
  require 'opentok'
  
  
  def demo
    
    
    api_key = ENV['api_key']
    api_secret = ENV['api_secret']
    @session_id = "2_MX40NTI2NjczMn5-MTQzNTU1MTE5NTQ1MH42a1dVSXhqOENFQ0FyN1BYcEVPWERGSjN-UH4"
    
    opentok = OpenTok::OpenTok.new 45266732, "141dc7cc7d8eddac8c0a4be35b910ea080936de6"
    
    
    @token = opentok.generate_token @session_id
    
    
    
  end
  
  
  
end
