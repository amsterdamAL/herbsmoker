class ChatsController < ApplicationController
  require 'opentok'
  def demo
    
    @session_id = "2_MX40NTI2NjczMn5-MTQzNTI5NzAxMTQ5N355MGZzTW5TaGgraXpiMjNydTJVOCtOa0Z-UH4"
    
    @api_key = ENV['api_key']
    @api_secret = ENV['api_secret']
    

    opentok = OpenTok::OpenTok.new "45266732", @session_id
    
    
    
    
    
    
    @token = opentok.generate_token @session_id
   
  end
  
  def token
    @token = opentok.generate_token @session_id
  end
  
end
