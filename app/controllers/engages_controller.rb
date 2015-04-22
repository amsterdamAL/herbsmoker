class EngagesController < ApplicationController
  
  def now
    @sub = Subscriber.new
  end

  def create
    @sub = Subscriber.new(subscriber_params)
    
    if @sub.save
      render 'new'
    end
    
 
   
  
end

private
  def subscriber_params
    params.require(:engage).permit(:email, :zip)
  end

end

  
  
  

