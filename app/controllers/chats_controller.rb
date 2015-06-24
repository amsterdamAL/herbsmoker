class ChatsController < ApplicationController
  
  def demo
    require "opentok"
    
    
    @test1 = ENV['api_key']
    @test2 = ENV['api_secret']
    

    @opentok = OpenTok::OpenTok.new @test1, @test2
    
    
    @session = @opentok.create_session :media_mode => :routed
    
    @session_id = @session.session_id
    
  end
  
end
