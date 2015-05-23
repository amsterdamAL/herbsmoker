class SubscribersController < ApplicationController
  
  def destroy
    @sub = Subscriber.find(params[:id])
    @sub.destroy
  
    redirect_to root_path
  end  
end
