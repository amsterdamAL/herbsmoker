class EngagesController < ApplicationController
  
  def now
    @sub = Subscriber.new
    flash[:errors] = "Thanks"
  end

  def create
    @sub = Subscriber.new(subscriber_params)
    respond_to do |format|
      if @sub.save
        #format.html { render 'now', notice: 'User was successfully created.' }
        format.js {render 'success'}
      else
        format.js { render 'errors' }
      end
    end
  end      
  

private
  def subscriber_params
    params.require(:engage).permit(:email, :zip)
  end

end

  
  
  

