class ChatsController < ApplicationController
  
  def demo
    require "opentok"
    
    
    @test1 = ENV['api_key']
    @test2 = ENV['api_secret']
    

    @opentok = OpenTok::OpenTok.new 45266732, "141dc7cc7d8eddac8c0a4be35b910ea080936de6"
    
    
    @session = @opentok.create_session :media_mode => :routed
    
    @session_id = @session.session_id
    
  end
  
end
