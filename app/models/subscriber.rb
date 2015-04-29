class Subscriber < ActiveRecord::Base
  
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  validates :zip, numericality: {only_integer: true}, length: {minimum: 5}
        
end
