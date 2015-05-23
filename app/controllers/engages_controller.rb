class EngagesController < ApplicationController
  
  def now
    @sub = Subscriber.new
    flash[:errors] = "Thanks"
  end

  def create
    @sub = Subscriber.new(subscriber_params)
    respond_to do |format|
      if @sub.save
        UserMailer.welcome_email(@sub).deliver_now
        #format.html { render 'now', notice: 'User was successfully created.' }
        format.js {render 'success'}
      else
        format.js { render 'errors' }
      end
    end
  end      
  


  def show
    @sub = Subscriber.all
  end


  def destroy
    @sub = Subscriber.find(params[:id])
    @sub.destroy
  
    redirect_to engages_path
  end  

private
  def subscriber_params
    params.require(:engage).permit(:email, :zip)
  end

end

  
  
  

