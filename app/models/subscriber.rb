class Subscriber < ActiveRecord::Base
  
  validates :email, uniqueness: { message: "already exists !" }
  validates_format_of :email, {:with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, :message => "doesen't look right !"}
  validates :zip, length: { is: 5, message: "must be 5 digits !" }, numericality: {only_integer: true, message: " can only be numbers !"}        
end
