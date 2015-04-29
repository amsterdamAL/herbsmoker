class EngagesController < ApplicationController
  
  def now
    @sub = Subscriber.new
  end

  def create
    @sub = Subscriber.new(subscriber_params)
    
    respond_to do |format|
      if @sub.save
        format.html { render 'now', notice: 'User was successfully created.' }
        format.js   {}
      else
        format.js { render 'errors', errors: @sub.errors.full_messages }
      end
    end
  end      
  

private
  def subscriber_params
    params.require(:engage).permit(:email, :zip)
  end

end

  
  
  

