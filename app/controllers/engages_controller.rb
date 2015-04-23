class EngagesController < ApplicationController
  respond_to :json, :html, :jpg, :xml
 
  
  def now
    @sub = Subscriber.new
  end

  def create
    @sub = Subscriber.new(subscriber_params)
    
      respond_to do |format|
    if @sub.save
      format.html { render plain: "yooo", notice: 'User was successfully created.' }
      format.js   {}
      #format.json { render json: @sub, status: :created, location: @sub }
    else
      #format.html { render action: "now", :layout => false}
      format.json { render :json => @sub.errors, status: :unprocessable_entity }
      #format.json { render :json => @sub.to_json }
      
    end
  end
  end      
  
private
  def subscriber_params
    params.require(:engage).permit(:email, :zip)
  end

end

  
  
  

