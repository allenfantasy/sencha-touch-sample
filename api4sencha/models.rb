require 'active_record'
class User < ActiveRecord::Base
  validates :email, :uniqueness => true
  validates :email, :format => { :with => /^([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})$/i }
  validates_presence_of :username, :email, :password, :gender, :age

  def to_hash
  end

end
