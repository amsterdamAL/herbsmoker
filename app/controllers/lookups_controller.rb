class LookupsController < ApplicationController
  
  
  def new
    
  end
  
  
  def all
    
  end 
  
  def review
    
    
    
    @email = params[:email_to_controller]
    @name = params[:name_to_controller]
    @email2 = params[:email2_to_controller]
    @name2 = params[:name2_to_controller]
    #UserMailer.reach_out_email(@email, @email2).deliver_now
    
  end
  
end
