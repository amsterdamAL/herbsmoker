class Subscriber < ActiveRecord::Base
  validates :email, presence: true
  validates :zip, presence: true, length: {minimum: 5}
                    
  
  
end
