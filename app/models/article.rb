class Article < ActiveRecord::Base
  
  def self.search(keyword)
    if keyword.present?
      #where(title: keyword)
      where('keywords LIKE ?', "%#{keyword.downcase}%")
    else
      all  
    end
  end
  
  before_save :set_keywords
  
  has_many :comments, dependent: :destroy
  
  has_attached_file :image, :styles => { :featured => "386x217>", :regular => "247x190>", :thumb => "100x100#", :show => "700x400>", :facebook => "200x200" }
  
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
                    
  validates :title, presence: true,
                    length: {minimum: 5}



  protected
    def set_keywords
      self.keywords = [title, text].map(&:downcase).join(' ')
    end


end
 