class UserMailer < ApplicationMailer
  
  default from: 'floridatokersubscriber@gmail.com'
  
  def welcome_email(user)
    @sub = user
    @url = 'http://example.com/login'
    mail(to: @sub.email, subject: "Welcome to FloridaToker")
  end
  
  def reach_out_email(email, email2)
    @email = email
    @email2 = email2
    mail(to: @email, subject: "test")
  end
  
end
